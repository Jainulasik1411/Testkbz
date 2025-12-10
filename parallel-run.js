const { chromium } = require('playwright');

(async () => {
  const flipkartTest = async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    
    await page.goto('https://www.flipkart.com');
    await page.waitForTimeout(1000);
    await page.fill('input[name="q"]', 'Iphone 16pro max');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    await page.locator('text=White Titanium').first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'flipkart-screenshot.png' });
    await page.pause();
    
    await browser.close();
  };

  const facebookTest = async () => {
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
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'facebook-screenshot.png' });
    await page.pause();
    
    await browser.close();
  };

  const netflixTest = async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    
    await page.goto('https://www.netflix.com');
    await page.click('text=Sign In');
    await page.waitForTimeout(2000);
    await page.fill('input[name="userLoginId"]', '95656565');
    await page.fill('input[name="password"]', 'Test@132121');
    await page.click('button:has-text("Sign In")');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'netflix-screenshot.png' });
    await page.pause();
  };

  await Promise.all([flipkartTest(), facebookTest(), netflixTest()]);
})().catch(err => console.error('Error:', err.message));
