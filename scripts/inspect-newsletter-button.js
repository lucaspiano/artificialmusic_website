const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 360, height: 800 });
  await page.goto('https://www.artificialmusic.ai/', { waitUntil: 'networkidle2' });

  const info = await page.evaluate(() => {
    const btn = document.querySelector('form button[type=submit]');
    if (!btn) return { error: 'no-newsletter-button' };
    const cs = window.getComputedStyle(btn);
    const r = btn.getBoundingClientRect();
    const form = btn.closest('form');
    const p = form ? form.getBoundingClientRect() : null;
    const gp = form && form.parentElement ? form.parentElement.getBoundingClientRect() : null;
    const card = btn.closest('.rounded-3xl') || btn.closest('[class*=rounded-3xl]') || null;
    const cardRect = card ? card.getBoundingClientRect() : null;
    return {
      tag: btn.tagName,
      classes: btn.className,
      rect: { left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width), top: Math.round(r.top) },
      computed: {
        position: cs.position,
        display: cs.display,
        float: cs.float,
        transform: cs.transform,
        right: cs.right,
        left: cs.left,
        marginLeft: cs.marginLeft,
        marginRight: cs.marginRight
      },
      formRect: p ? { left: Math.round(p.left), right: Math.round(p.right), width: Math.round(p.width) } : null,
      formParentRect: gp ? { left: Math.round(gp.left), right: Math.round(gp.right), width: Math.round(gp.width) } : null,
      cardRect: cardRect ? { left: Math.round(cardRect.left), right: Math.round(cardRect.right), width: Math.round(cardRect.width) } : null
    };
  });

  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
