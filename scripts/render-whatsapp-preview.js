const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const out = path.join(__dirname, '..', 'public', 'assets', 'whatsapp-preview.png');
const og = {
  title: 'Artificial Music',
  description: 'Engenharia de Inteligência para Sistemas Sonoros.',
  image: 'https://www.artificialmusic.ai/assets/preview.png',
  url: 'https://www.artificialmusic.ai/'
};

(async () => {
  const html = `
  <html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
  <body style="font-family:Arial,Helvetica,sans-serif;margin:0;padding:24px;background:#f0f2f5;">
    <div style="width:520px;max-width:100%;background:#fff;border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,.12);display:flex;gap:12px;padding:12px;align-items:center;">
      <img src='${og.image}' style='width:96px;height:72px;object-fit:cover;border-radius:6px;flex:0 0 96px' />
      <div style='flex:1;min-width:0'>
        <div style='color:#111827;font-weight:600;font-size:16px;line-height:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis'>${og.title}</div>
        <div style='color:#6b7280;font-size:14px;line-height:18px;margin-top:6px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden'>${og.description}</div>
        <div style='color:#6b7280;font-size:12px;margin-top:8px'>${og.url}</div>
      </div>
    </div>
  </body></html>`;

  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 560, height: 160, deviceScaleFactor: 2 });
  await page.setContent(html, { waitUntil: 'networkidle2' });
  await page.screenshot({ path: out, omitBackground: false });
  await browser.close();
  console.log('Wrote preview to', out);
})();
