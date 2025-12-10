const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://www.netflix.com');
  await page.click('text=Sign In');
  await page.waitForTimeout(2000);
  await page.fill('input[name="userLoginId"]', '95656565');
  await page.fill('input[name="password"]', 'Test@132121');
  await page.click('button:has-text("Sign In")');
  await page.pause();
  
})().catch(err => console.error('Error:', err.message));
