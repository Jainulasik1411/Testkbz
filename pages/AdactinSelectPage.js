class AdactinSelectPage {
  constructor(page) {
    this.page = page;
    this.hotelRadio = 'input[type="radio"]';
    this.continueButton = 'input[name="continue"]';
  }

  async selectHotel() {
    await this.page.click(this.hotelRadio);
    await this.page.waitForTimeout(500);
    await this.page.click(this.continueButton);
    await this.page.waitForTimeout(2000);
  }
}

module.exports = AdactinSelectPage;
