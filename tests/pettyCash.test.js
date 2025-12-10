const { chromium } = require('playwright');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const PettyCashPage = require('../pages/PettyCashPage');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const pettyCashPage = new PettyCashPage(page);

  await loginPage.navigate();
  await loginPage.login('branch_npo@gmail.com', 'P$2EorwK5cyc@Ar-8NOT');
  
  await dashboardPage.clickAddNew();
  
  await pettyCashPage.selectPettyCash();
  await pettyCashPage.enterInvoiceNumber('56S4D5S4D');
  await pettyCashPage.selectDate('21');
  await pettyCashPage.selectVendor('A', 'Access Spectrum Company Limited');
  await pettyCashPage.selectCurrency();
  await pettyCashPage.enterDescription('Test123');
  await pettyCashPage.selectCommodityCode();
  await pettyCashPage.enterQuantity('156');
  await pettyCashPage.enterPrice('64');
  await pettyCashPage.uploadAttachment('C:\\Users\\jainu\\OneDrive\\Documents\\Testpdf123 (39).pdf');

  await page.pause();
  await browser.close();
})().catch(err => console.error('Error:', err.message));
