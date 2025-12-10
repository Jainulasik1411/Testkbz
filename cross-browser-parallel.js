const { chromium, firefox } = require('playwright');

(async () => {
  const flipkartChrome = async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    
    await page.goto('https://www.flipkart.com');
    await page.waitForTimeout(1000);
    await page.fill('input[name="q"]', 'Iphone 16pro max');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    await page.locator('text=White Titanium').first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'flipkart-chrome-screenshot.png' });
    await page.pause();
    
    await browser.close();
  };

  const flipkartFirefox = async () => {
    const browser = await firefox.launch({ headless: false });
    const page = await browser.newPage();
    
    await page.goto('https://www.flipkart.com');
    await page.waitForTimeout(1000);
    await page.fill('input[name="q"]', 'Iphone 16pro max');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    await page.locator('text=White Titanium').first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'flipkart-firefox-screenshot.png' });
    await page.pause();
    
    await browser.close();
  };

  const facebookChrome = async () => {
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
    await page.screenshot({ path: 'facebook-chrome-screenshot.png' });
    await page.pause();
    
    await browser.close();
  };

  const facebookFirefox = async () => {
    const browser = await firefox.launch({ headless: false });
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
    await page.screenshot({ path: 'facebook-firefox-screenshot.png' });
    await page.pause();
    
    await browser.close();
  };

  await Promise.all([flipkartChrome(), flipkartFirefox(), facebookChrome(), facebookFirefox()]);
})().catch(err => console.error('Error:', err.message));
