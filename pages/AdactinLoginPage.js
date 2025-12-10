class AdactinLoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[name="password"]';
    this.loginButton = 'input[name="login"]';
  }

  async navigate() {
    await this.page.goto('https://adactinhotelapp.com/');
    await this.page.waitForTimeout(2000);
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.waitForTimeout(500);
    await this.page.fill(this.passwordInput, password);
    await this.page.waitForTimeout(500);
    await this.page.click(this.loginButton);
    await this.page.waitForTimeout(2000);
  }
}

module.exports = AdactinLoginPage;
