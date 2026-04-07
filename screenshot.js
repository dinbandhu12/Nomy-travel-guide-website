const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000); // wait for animations
  await page.screenshot({ path: 'hero_screenshot.png' });
  await browser.close();
})();
