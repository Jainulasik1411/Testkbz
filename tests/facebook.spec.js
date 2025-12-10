const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://www.facebook.com');
  await page.click('text=/Create new account/i');
  await page.fill('input[name="firstname"]', 'John');
  await page.fill('input[name="lastname"]', 'Doe');
  await page.selectOption('select[name="birthday_day"]', '27');
  await page.selectOption('select[name="birthday_month"]', '11');
  await page.selectOption('select[name="birthday_year"]', '2000');
  await page.click('input[value="2"]');
  await page.fill('input[name="reg_email__"]', 'john.doe@gmail.com');
  await page.fill('input[name="reg_passwd__"]', 'Test@12345');
  await page.waitForTimeout(1000);
  const signUpButton = page.locator('button:has-text("Sign Up")').first();
  await signUpButton.scrollIntoViewIfNeeded();
  await signUpButton.click();
  await page.pause();

  
  await browser.close();
})().catch(err => console.error('Error:', err.message));
