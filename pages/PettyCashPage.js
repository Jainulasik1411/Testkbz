class PettyCashPage {
  constructor(page) {
    this.page = page;
  }

  async selectPettyCash() {
    await this.page.keyboard.press('Control+Minus');
    await this.page.keyboard.press('Control+Minus');
    await this.page.waitForTimeout(500);
    await this.page.click('text=Please select');
    await this.page.waitForTimeout(1000);
    await this.page.click('text=Petty Cash');
    await this.page.waitForTimeout(1000);
  }

  async enterInvoiceNumber(invoiceNumber) {
    const invoiceInput = this.page.locator('input[data-semantics-role="text-field"]').first();
    await invoiceInput.waitFor({ timeout: 10000 });
    await invoiceInput.click();
    await this.page.waitForTimeout(500);
    await invoiceInput.fill(invoiceNumber);
    await this.page.waitForTimeout(1000);
  }

  async selectDate(day) {
    const dateInput = this.page.locator('input[data-semantics-role="text-field"]').nth(1);
    await dateInput.click();
    await this.page.waitForTimeout(1000);
    await this.page.click(`text=${day}`);
    await this.page.waitForTimeout(500);
    await this.page.click('text=OK');
    await this.page.waitForTimeout(1000);
  }

  async selectVendor(searchText, vendorName) {
    await this.page.click('text=Please select');
    await this.page.waitForTimeout(1000);
    await this.page.click('text=Vendor Name');
    await this.page.waitForTimeout(1000);
    const vendorSearchInput = this.page.locator('input[aria-label="Search for Vendor Name"]');
    await vendorSearchInput.fill(searchText);
    await this.page.waitForTimeout(1000);
    await this.page.click(`text=${vendorName}`);
    await this.page.waitForTimeout(1000);
  }

  async selectCurrency() {
    await this.page.click('text=Please select');
    await this.page.waitForTimeout(1000);
    await this.page.click('text=MMK');
    await this.page.waitForTimeout(1000);
  }

  async enterDescription(description) {
    const descriptionField = this.page.locator('textarea[data-semantics-role="text-field"]').first();
    await descriptionField.click();
    await descriptionField.fill(description);
    await this.page.waitForTimeout(1000);
  }

  async selectCommodityCode() {
    const commodityDropdown = this.page.locator('#flt-semantic-node-303');
    await commodityDropdown.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(500);
    await commodityDropdown.click();
    await this.page.waitForTimeout(1000);
    await this.page.click('text=Dummy Desc code');
    await this.page.waitForTimeout(1000);
  }

  async enterQuantity(quantity) {
    const quantityField = this.page.locator('#flt-semantic-node-310 textarea');
    await quantityField.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(500);
    await quantityField.click();
    await quantityField.fill(quantity);
    await this.page.waitForTimeout(1000);
  }

  async enterPrice(price) {
    const priceField = this.page.locator('#flt-semantic-node-314 textarea');
    await priceField.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(500);
    await priceField.click();
    await priceField.fill(price);
    await this.page.waitForTimeout(1000);
  }

  async uploadAttachment(filePath) {
    const attachmentElement = this.page.locator('#flt-semantic-node-349');
    await attachmentElement.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(1000);
    const fileChooserPromise = this.page.waitForEvent('filechooser');
    await attachmentElement.click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(filePath);
    await this.page.waitForTimeout(1000);
  }

  async clickNext() {
    await this.page.click('text=Next');
    await this.page.waitForTimeout(2000);
  }

  async clickEyeIcon() {
    const eyeIcon = this.page.locator('#flt-semantic-node-800');
    await eyeIcon.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(500);
    await eyeIcon.click();
    await this.page.waitForTimeout(1000);
  }
}

module.exports = PettyCashPage;
