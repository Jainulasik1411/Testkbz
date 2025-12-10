const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://staging.flow.stax.run/#/login');
  await page.waitForTimeout(5000);
  
  const emailInput = page.locator('input').first();
  await emailInput.click();
  await emailInput.type('branch_npo@gmail.com', { delay: 10 });
  await page.keyboard.press('Tab');
  await page.keyboard.type('P$2EorwK5cyc@Ar-8NOT', { delay: 10 });
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
  
  await page.click('text=Add New');
  await page.waitForTimeout(2000);
  await page.click('text=Please select');
  await page.waitForTimeout(1000);
  await page.click('text=Petty Cash');
  await page.waitForTimeout(3000);
  
  const textareas = page.locator('textarea[data-semantics-role="text-field"]');
  const count = await textareas.count();
  console.log(`Total textareas found: ${count}`);
  
  for (let i = 0; i < count; i++) {
    const textarea = textareas.nth(i);
    const box = await textarea.boundingBox();
    console.log(`Textarea ${i}: position`, box);
  }
  
  await page.pause();
  await browser.close();
})();
