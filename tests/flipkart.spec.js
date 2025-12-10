const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://www.flipkart.com');
  await page.waitForTimeout(1000);
  await page.fill('input[name="q"]', 'Iphone 16pro max');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000);
  await page.locator('text=White Titanium').first().click();
  await page.pause();
  
  await browser.close();
})().catch(err => console.error('Error:', err.message));
