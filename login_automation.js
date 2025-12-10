const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://staging.flow.stax.run/#/login');
  await page.waitForTimeout(5000);
  
  const emailInput = page.locator('input').first();
  await emailInput.waitFor({ timeout: 10000 });
  await emailInput.click();
  await emailInput.type('branch_npo@gmail.com', { delay: 10 });
  console.log('Email entered');
  
  await page.keyboard.press('Tab');
  console.log('Tab pressed');
  
  await page.keyboard.type('P$2EorwK5cyc@Ar-8NOT', { delay: 10 });
  console.log('Password entered');
  
  await page.keyboard.press('Enter');
  console.log('Enter pressed');
  
  await page.waitForTimeout(3000);
  
  try {
    await page.click('button:has-text("Add New")', { timeout: 5000 });
  } catch {
    try {
      await page.click('text=Add New', { timeout: 5000 });
    } catch {
      await page.locator('button').filter({ hasText: 'Add New' }).click();
    }
  }
  console.log('Add New button clicked');
  
  await page.waitForTimeout(1000);
  
  await page.click('text=Please select');
  console.log('Please select clicked');
  
  await page.waitForTimeout(1000);
  
  await page.click('text=Petty Cash');
  console.log('Petty Cash clicked');
  
  await page.waitForTimeout(1000);
  
  const invoiceInput = page.locator('input[data-semantics-role="text-field"]').first();
  await invoiceInput.waitFor({ timeout: 10000 });
  await invoiceInput.click();
  await page.waitForTimeout(500);
  await invoiceInput.fill('56S4D5S4D');
  console.log('Invoice number entered');
  
  await page.waitForTimeout(1000);
  
  const dateInput = page.locator('input[data-semantics-role="text-field"]').nth(1);
  await dateInput.click();
  console.log('Date field clicked');
  
  await page.waitForTimeout(1000);
  
  await page.click('text=21');
  console.log('Day 21 clicked');
  
  await page.waitForTimeout(500);
  
  await page.click('text=OK');
  console.log('OK button clicked');
  
  await page.waitForTimeout(1000);
  
  await page.click('text=Please select');
  console.log('Please select dropdown clicked');
  
  await page.waitForTimeout(1000);
  
  await page.click('text=Vendor Name');
  console.log('Vendor Name clicked');
  
  await page.waitForTimeout(1000);
  
  await page.fill('input[aria-label="Search for Vendor Name"]', 'A');
  console.log('A entered in search box');
  
  await page.waitForTimeout(1000);
  
  await page.click('text=Access Spectrum Company Limited');
  console.log('Access Spectrum Company Limited clicked');
  
  await page.waitForTimeout(1000);
  
  await page.click('text=Please select');
  console.log('Currency dropdown clicked');
  
  await page.waitForTimeout(1000);
  
  await page.click('text=MMK');
  console.log('MMK currency selected');
  
  await page.waitForTimeout(1000);
  
  const descriptionField = page.locator('textarea[data-semantics-role="text-field"]').first();
  await descriptionField.click();
  await descriptionField.fill('Test description for petty cash');
  console.log('Description entered');
  
  await page.waitForTimeout(1000);
  
  const commodityDropdown = page.locator('xpath=//*[@id="flt-semantic-node-304"]');
  await commodityDropdown.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await commodityDropdown.click();
  console.log('Commodity code dropdown clicked');
  
  await page.waitForTimeout(1000);
  
  await page.click('text=Dummy Desc code');
  console.log('Commodity code selected');
  
  await page.waitForTimeout(1000);
  
  const quantityField = page.locator('#flt-semantic-node-310 textarea');
  await quantityField.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await quantityField.click();
  await quantityField.fill('10');
  console.log('Quantity entered');
  
  await page.waitForTimeout(1000);
  
  const priceField = page.locator('#flt-semantic-node-314 textarea');
  await priceField.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await priceField.click();
  await priceField.fill('5000');
  console.log('Price entered');
  
  await page.waitForTimeout(1000);
  
  const attachmentElement = page.locator('#flt-semantic-node-349');
  await attachmentElement.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  const fileChooserPromise = page.waitForEvent('filechooser');
  await attachmentElement.click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles('C:\\Users\\jainu\\Downloads\\Testpdf123 (40).pdf');
  console.log('Attachment uploaded');
  
  await page.waitForTimeout(1000);
  
  await page.click('text=Next');
  console.log('Next button clicked');
  
  await page.waitForTimeout(2000);
  
  const eyeIcon = page.locator('#flt-semantic-node-800');
  await eyeIcon.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await eyeIcon.click();
  console.log('Eye icon clicked');
  
  await page.waitForTimeout(1000);
  
  await page.pause();
  await browser.close();
})().catch(err => console.error('Error:', err.message));
