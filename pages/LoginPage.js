class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input').first();
  }

  async navigate() {
    await this.page.goto('https://staging.flow.stax.run/#/login');
    await this.page.waitForTimeout(5000);
  }

  async login(email, password) {
    await this.emailInput.waitFor({ timeout: 10000 });
    await this.emailInput.click();
    await this.emailInput.fill(email);
    await this.page.keyboard.press('Tab');
    await this.page.waitForTimeout(500);
    await this.page.keyboard.type(password, { delay: 10 });
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(5000);
  }
}

module.exports = LoginPage;
