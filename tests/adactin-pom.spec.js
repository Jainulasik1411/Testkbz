const { chromium } = require('playwright');
const AdactinLoginPage = require('../pages/AdactinLoginPage');
const AdactinSearchPage = require('../pages/AdactinSearchPage');
const AdactinSelectPage = require('../pages/AdactinSelectPage');
const AdactinBookingPage = require('../pages/AdactinBookingPage');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    const loginPage = new AdactinLoginPage(page);
    const searchPage = new AdactinSearchPage(page);
    const selectPage = new AdactinSelectPage(page);
    const bookingPage = new AdactinBookingPage(page);

    await loginPage.navigate();
    await loginPage.login('jainulasik', 'Asik@2324');

    await searchPage.searchHotel('London', 'Hotel Sunshine', 'Deluxe', '4', '25/12/2025', '30/12/2025', '1', '1');

    await selectPage.selectHotel();

    await bookingPage.fillBookingDetails('Jainul', 'Asik', '2/45 , West street , Chennai.', '1234567890123456', 'VISA', 'May', '2027', '8651');

    await bookingPage.logout();
    await page.pause();

  } catch (error) {
    console.error('Error:', error.message);
  }
})();
