class AdactinSearchPage {
  constructor(page) {
    this.page = page;
    this.locationDropdown = 'select[name="location"]';
    this.hotelsDropdown = 'select[name="hotels"]';
    this.roomTypeDropdown = 'select[name="room_type"]';
    this.roomCountDropdown = 'select[name="room_nos"]';
    this.checkInDate = 'input[name="datepick_in"]';
    this.checkOutDate = 'input[name="datepick_out"]';
    this.adultsDropdown = 'select[name="adult_room"]';
    this.childrenDropdown = 'select[name="child_room"]';
    this.searchButton = 'input[name="Submit"]';
  }

  async searchHotel(location, hotel, roomType, roomCount, checkIn, checkOut, adults, children) {
    await this.page.selectOption(this.locationDropdown, location);
    await this.page.waitForTimeout(500);
    await this.page.selectOption(this.hotelsDropdown, hotel);
    await this.page.waitForTimeout(500);
    await this.page.selectOption(this.roomTypeDropdown, roomType);
    await this.page.waitForTimeout(500);
    await this.page.selectOption(this.roomCountDropdown, roomCount);
    await this.page.waitForTimeout(500);
    await this.page.fill(this.checkInDate, checkIn);
    await this.page.waitForTimeout(500);
    await this.page.fill(this.checkOutDate, checkOut);
    await this.page.waitForTimeout(500);
    await this.page.selectOption(this.adultsDropdown, adults);
    await this.page.waitForTimeout(500);
    await this.page.selectOption(this.childrenDropdown, children);
    await this.page.waitForTimeout(500);
    await this.page.click(this.searchButton);
    await this.page.waitForTimeout(2000);
  }
}

module.exports = AdactinSearchPage;
