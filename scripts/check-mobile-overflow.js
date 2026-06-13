const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const SITE = process.argv[2] || 'https://www.artificialmusic.ai/';
const outDir = path.join(__dirname, '..', 'public', 'assets');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const viewports = [
  { name: 'iphone-12', width: 390, height: 844, deviceScaleFactor: 3 },
  { name: 'iphone-x', width: 375, height: 812, deviceScaleFactor: 3 },
  { name: 'pixel-4', width: 393, height: 852, deviceScaleFactor: 2 },
  { name: 'small-360', width: 360, height: 800, deviceScaleFactor: 2 }
];

async function checkViewport(browser, vp) {
  const page = await browser.newPage();
  await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: vp.deviceScaleFactor });
  await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15A372 Safari/604.1');
  await page.goto(SITE, { waitUntil: 'networkidle2', timeout: 30000 });

  // Evaluate overflow and collect offenders
  const result = await page.evaluate(() => {
    const winW = window.innerWidth || document.documentElement.clientWidth;
    const docW = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
    const hasOverflow = docW > winW;
    const offenders = [];
    const els = Array.from(document.querySelectorAll('*'));
    for (let el of els) {
      try {
        const r = el.getBoundingClientRect();
        if ((r.right - 0) > winW + 0.5) {
          offenders.push({
            tag: el.tagName.toLowerCase(),
            class: el.className ? el.className.toString().slice(0,200) : '',
            id: el.id || '',
            rect: { left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width) }
          });
          if (offenders.length >= 8) break;
        }
      } catch (e) { /* ignore */ }
    }
    return { winW, docW, hasOverflow, offenders };
  });

  const screenshotPath = path.join(outDir, `mobile-test-${vp.name}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: true });
  await page.close();
  return { vp, result, screenshotPath };
}

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const reports = [];
  for (let vp of viewports) {
    try {
      const r = await checkViewport(browser, vp);
      reports.push(r);
      console.log(`Checked ${vp.name}: overflow=${r.result.hasOverflow} (docW=${r.result.docW} winW=${r.result.winW})`);
      if (r.result.offenders.length) console.log('  Offenders:', JSON.stringify(r.result.offenders, null, 2));
      else console.log('  No obvious offenders found.');
      console.log('  Screenshot saved to', r.screenshotPath);
    } catch (e) {
      console.error('Error checking', vp.name, e.message);
    }
  }
  await browser.close();
  process.exit(0);
})();
