const { test, expect } = require('@playwright/test');

test('Login to Stax Flow', async ({ page }) => {
  await page.goto('https://staging.flow.stax.run/#/login');
  
  await page.waitForLoadState('networkidle');
  
  await page.fill('input[type="email"]', 'Test123@gmail.com');
  await page.fill('input[type="password"]', 'Test@128');
  await page.click('button[type="submit"]');
  
  await page.waitForTimeout(3000);
});