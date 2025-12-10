class AdactinBookingPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = 'input[name="first_name"]';
    this.lastNameInput = 'input[name="last_name"]';
    this.addressTextarea = 'textarea[name="address"]';
    this.ccNumberInput = 'input[name="cc_num"]';
    this.ccTypeDropdown = 'select[name="cc_type"]';
    this.ccExpMonthDropdown = 'select[name="cc_exp_month"]';
    this.ccExpYearDropdown = 'select[name="cc_exp_year"]';
    this.ccCvvInput = 'input[name="cc_cvv"]';
    this.bookNowButton = 'input[name="book_now"]';
    this.logoutLink = 'text=Logout';
  }

  async fillBookingDetails(firstName, lastName, address, ccNumber, ccType, ccMonth, ccYear, ccCvv) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.waitForTimeout(500);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.waitForTimeout(500);
    await this.page.fill(this.addressTextarea, address);
    await this.page.waitForTimeout(500);
    await this.page.fill(this.ccNumberInput, ccNumber);
    await this.page.waitForTimeout(500);
    await this.page.selectOption(this.ccTypeDropdown, ccType);
    await this.page.waitForTimeout(500);
    await this.page.selectOption(this.ccExpMonthDropdown, ccMonth);
    await this.page.waitForTimeout(500);
    await this.page.selectOption(this.ccExpYearDropdown, ccYear);
    await this.page.waitForTimeout(500);
    await this.page.fill(this.ccCvvInput, ccCvv);
    await this.page.waitForTimeout(500);
    await this.page.click(this.bookNowButton);
    await this.page.waitForTimeout(3000);
  }

  async logout() {
    await this.page.click(this.logoutLink);
  }
}

module.exports = AdactinBookingPage;
