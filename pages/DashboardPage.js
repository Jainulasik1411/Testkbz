class DashboardPage {
  constructor(page) {
    this.page = page;
  }

  async clickAddNew() {
    try {
      await this.page.click('button:has-text("Add New")', { timeout: 5000 });
    } catch {
      try {
        await this.page.click('text=Add New', { timeout: 5000 });
      } catch {
        await this.page.locator('button').filter({ hasText: 'Add New' }).click();
      }
    }
    await this.page.waitForTimeout(2000);
  }
}

module.exports = DashboardPage;
