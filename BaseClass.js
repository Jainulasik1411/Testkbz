const { chromium, firefox } = require('playwright');
const fs = require('fs');
const path = require('path');

class BaseClass {
  constructor() {
    this.browser = null;
    this.page = null;
  }

  async browserLaunch(browserType = 'chrome') {
    const uniqueId = Date.now() + Math.random();
    if (browserType.toLowerCase() === 'chrome') {
      const context = await chromium.launchPersistentContext(`./temp-profile-${uniqueId}`, {
        headless: false,
        viewport: null,
        args: [
          '--start-maximized', 
          '--force-device-scale-factor=1',
          '--disable-background-timer-throttling',
          '--disable-backgrounding-occluded-windows',
          '--disable-renderer-backgrounding'
        ]
      });
      this.browser = context;
      this.page = context.pages()[0] || await context.newPage();
    } else if (browserType.toLowerCase() === 'firefox') {
      this.browser = await firefox.launch({ headless: false });
      const context = await this.browser.newContext({ viewport: null });
      this.page = await context.newPage();
    }
  }

  async urlLaunch(url) {
    await this.page.goto(url);
  }

  async clickAddNew() {
    await this.page.click("xpath=//*[text()='Add New']");
  }

  async Date(index) {
    await this.page.click(`xpath=(//*[@role='button'])[${index}]`);
  }

  async clickOkButton() {
    await this.page.click("xpath=//*[text()='OK']");
  }

  async TabIndex(index) {
    await this.page.click(`xpath=(//*[@tabindex='0'])[${index}]`);
  }

  async clickRoleButtonByIndex(index) {
    await this.page.click(`xpath=(//*[@role='button'])[${index}]`);
  }

  async clickCheckboxByIndex(index) {
    await this.page.click(`xpath=(//*[@role='checkbox'])[${index}]`);
  }

  async DateclickOk(index) {
    await this.page.click(`xpath=(//*[@role='button'])[${index}]`);
    await this.page.click("xpath=//*[text()='OK']");
  }

  async inputareasindex(index, text) {
    const locator = `xpath=(//*[@autocomplete='off'])[${index}]`;
    await this.page.waitForSelector(locator, { state: 'visible' });
    await this.page.click(locator);
    await this.page.fill(locator, text);
  }

  async radiobutton(index) {
    await this.page.click(`xpath=(//*[@role='radio'])[${index}]`);
  }

  async switchEnable(index) {
    await this.page.click(`xpath=(//*[@role='switch'])[${index}]`);
  }

  async NextButton() {
    await this.page.click("xpath=(//*[text()='Next'])[1]");
    await this.page.waitForTimeout(2000);
  }

  async SubmitButton() {
    await this.page.click("xpath=(//*[text()='Submit'])[1]");
  }

  async clicking(xpath) {
    await this.page.click(`xpath=${xpath}`);
  }

  async textpath(text) {
    await this.page.click(`xpath=(//*[text()='${text}'])[1]`);
  }

  async EditButton() {
    await this.page.click("xpath=(//*[text()='Edit'])[1]");
  }

  async typing(text) {
    await this.page.fill("xpath=(//*[@autocomplete='off'])[1]", text);
  }

  async PleaseSelect() {
    await this.page.click("xpath=(//*[text()='Please select'])[1]");
  }
async uploadFile(selector, filePath) {
  const [fileChooser] = await Promise.all([
    this.page.waitForEvent('filechooser'),
    this.page.click(selector)  // click upload button / icon
  ]);

  await fileChooser.setFiles(filePath);
}


  async selectdate(dateButtonIndex) {
    await this.page.click("xpath=//*[@aria-label='YYYY-MM-DD']");
    await this.page.waitForTimeout(1000);
    await this.page.click(`xpath=(//*[@role='button'])[${dateButtonIndex}]`);
    await this.page.waitForTimeout(1000);
    await this.page.click("xpath=//*[text()='OK']");
  }

  async backbutton() {
    await this.page.click("xpath=(//*[@role='button'])[4]");
  }

  async performLogin(email, password) {
    await this.page.waitForTimeout(2000);
    await this.page.fill("xpath=(//*[@autocomplete='off'])[1]", email);
    await this.page.keyboard.press('Tab');
    await this.page.waitForTimeout(500);
    await this.page.fill("xpath=(//*[@autocomplete='off'])[2]", password);
    await this.page.waitForTimeout(500);
    await this.page.click("xpath=//*[text()='Login']");
    await this.page.waitForTimeout(1000);
  }

  async performLogout() {
    await this.page.evaluate(() => {
      const button = document.evaluate("(//*[@role='button'])[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (button) button.click();
    });
    await this.page.waitForTimeout(1000);
    await this.page.evaluate(() => {
      const group = document.evaluate("//*[@role='group']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (group) group.click();
    });
    await this.page.waitForTimeout(2000);
    await this.page.evaluate(() => {
      const logout = document.evaluate("//*[text()='Logout']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (logout) logout.click();
    });
  }

  async clearAndTypeText(xpath, newText) {
    await this.page.click(`xpath=${xpath}`);
    await this.page.keyboard.press('Control+A');
    await this.page.fill(`xpath=${xpath}`, newText);
  }

  async clearAndTypeAutoCompleteByIndex(index, newText) {
    const xpath = `(//*[@autocomplete='off'])[${index}]`;
    await this.page.click(`xpath=${xpath}`);
    await this.page.waitForTimeout(500);
    await this.page.keyboard.press('Control+A');
    await this.page.fill(`xpath=${xpath}`, newText);
  }

  async thread() {
    await this.page.waitForTimeout(2000);
  }

  async threadhalf() {
    await this.page.waitForTimeout(500);
  }

  async threadone() {
    await this.page.waitForTimeout(500);
  }

  async wait(milliseconds) {
    await this.page.waitForTimeout(milliseconds);
  }

  async maximize() {
    await this.page.setViewportSize({ width: 1920, height: 1080 });
  }

  async buttonClick(selector) {
    await this.page.click(selector);
  }

  async sendText(selector, text) {
    await this.page.fill(selector, text);
  }

  async screenCapture(filename) {
    await this.page.screenshot({ path: `${filename}.png`, fullPage: true });
  }

  async navigationRefresh() {
    await this.page.reload();
  }

  async navigationback() {
    await this.page.goBack();
  }

  async scrollIntoView(selector) {
    await this.page.locator(selector).scrollIntoViewIfNeeded();
  }

  async jsclick(selector) {
    await this.page.evaluate((sel) => {
      document.querySelector(sel).click();
    }, selector);
  }

  async selectbyIndex(selector, index) {
    await this.page.selectOption(selector, { index: index });
  }

  async selectbyvalue(selector, value) {
    await this.page.selectOption(selector, value);
  }

  async selectbyvisibletext(selector, text) {
    await this.page.selectOption(selector, { label: text });
  }

  async quitbrowser() {
    try {
      if (this.page) {
        await this.page.close();
      }
      if (this.browser) {
        await this.browser.close();
      }
    } catch (error) {
      console.log('Browser already closed');
    }
  }

  async tabNavigation(count) {
    for (let i = 0; i < count; i++) {
      await this.page.keyboard.press('Tab');
      await this.page.waitForTimeout(300);
    }
  }

  async EyeButton() {
    await this.page.click("xpath=//flt-semantics[@role='button' and @tabindex='0' and contains(@style, 'transform: matrix(1, 0, 0, 1, 50, 7.5)')]");
  }

  async clickAutoCompleteByIndex(index) {
    await this.page.click(`xpath=(//*[@autocomplete='off'])[${index}]`);
  }

  async Texthome(text) {
    await this.page.click(`xpath=(//flt-semantics[@role='button' and contains(text(),'${text}')])[1]`);
  }

  async threedot() {
    await this.page.waitForTimeout(2000);
    try {
      await this.page.click("xpath=(//*[@tabindex='0'])[18]", { timeout: 5000 });
    } catch (error) {
      await this.page.evaluate(() => {
        const element = document.evaluate("(//*[@tabindex='0'])[18]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (element) element.click();
      });
    }
  }
}

module.exports = BaseClass;
