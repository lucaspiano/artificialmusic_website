const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 360, height: 800 });
  await page.goto('https://www.artificialmusic.ai/', { waitUntil: 'networkidle2' });

  const info = await page.evaluate(() => {
    const el = document.querySelector('button.bg-purple-500');
    if (!el) return { error: 'no-element' };
    const r = el.getBoundingClientRect();
    const cs = window.getComputedStyle(el);
    const parent = el.parentElement;
    const pr = parent ? parent.getBoundingClientRect() : null;
    return {
      tag: el.tagName,
      classes: el.className,
      rect: { left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width) },
      offsetWidth: el.offsetWidth,
      clientWidth: el.clientWidth,
      scrollWidth: el.scrollWidth,
      computed: {
        width: cs.width,
        boxSizing: cs.boxSizing,
        paddingLeft: cs.paddingLeft,
        paddingRight: cs.paddingRight,
        marginLeft: cs.marginLeft,
        marginRight: cs.marginRight
      },
      parentRect: pr ? { left: Math.round(pr.left), right: Math.round(pr.right), width: Math.round(pr.width) } : null,
      docW: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
      winW: window.innerWidth
    };
  });

  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
