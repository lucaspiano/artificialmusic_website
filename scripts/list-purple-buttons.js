const puppeteer = require('puppeteer');
(async ()=>{
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 360, height: 800 });
  await page.goto('https://www.artificialmusic.ai/', { waitUntil: 'networkidle2' });
  const buttons = await page.evaluate(()=>{
    return Array.from(document.querySelectorAll('button.bg-purple-500')).map(b=>{
      const r=b.getBoundingClientRect();
      return {classes:b.className, left:Math.round(r.left), right:Math.round(r.right), width:Math.round(r.width), top:Math.round(r.top)}
    })
  });
  console.log(JSON.stringify(buttons, null, 2));
  await browser.close();
})();
