const BaseClass = require('../BaseClass');

(async () => {
  const base = new BaseClass();

  try {
    // Launch browser and navigate
    await base.browserLaunch('chrome');
    await base.urlLaunch('https://staging.flow.stax.run/#/login');
    await base.maximize();

    await base.thread();

    // Login
    await base.page.click("xpath=//*[@aria-label='Enter registered email']");
    await base.page.waitForTimeout(1000);
    await base.page.fill("xpath=//*[@aria-label='Enter registered email']", 'BranchTeam_KBZPay@gmail.com');
    await base.wait(50);
    await base.page.keyboard.press('Tab');
    await base.page.waitForTimeout(200);
    await base.wait(50);
    await base.page.fill("xpath=//flt-semantics[@aria-label='Enter Password']//input[@data-semantics-role='text-field']", '98DjpLo4WVsdI5HILPVI');
    await base.wait(100);
    await base.page.click("xpath=//*[text()='Login']");
    await base.page.waitForTimeout(2000);

    // Select KBZPay Service Operations
    await base.page.click("xpath=//*[text()='KBZPay Service Operations']");
     await base.thread();
    await base.page.waitForTimeout(2000);

    // Add New
    await base.clickAddNew();
    await base.threadhalf();

    // Zoom out
    await base.page.keyboard.press('Control+Minus');
    await base.page.keyboard.press('Control+Minus');
    await base.threadhalf();

    // Please Select
    await base.PleaseSelect();
    await base.page.waitForTimeout(1000);

    // Scroll into view and click Pin Reset Request + Device Change Request
    await base.page.evaluate(() => {
      const element = Array.from(document.querySelectorAll('flt-semantics')).find(el => el.textContent.trim() === 'Pin Reset Request + Device Change Request');
      if (element) {
        element.scrollIntoView({ block: 'center' });
        element.click();
      }
    });
    await base.page.waitForTimeout(1000);

    // Fill form fields
    await base.inputareasindex(1, '98765432');
    await base.threadhalf();
    await base.page.click("xpath=(//*[@aria-label='YYYY-MM-DD'])[1]");
    await base.threadhalf();
    await base.DateclickOk(26);
    await base.threadhalf();
    await base.inputareasindex(2, 'Customer Pin Reset Device');
    await base.threadhalf();
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[4]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();

    // Radio button
    await base.radiobutton(1);
    await base.threadone();
    await base.thread();

    // Click role buttons and select options
    await base.clickRoleButtonByIndex(3);
    await base.threadhalf();
    await base.textpath('6');
    await base.threadhalf();
    await base.clickRoleButtonByIndex(4);
    await base.threadhalf();
    await base.textpath('BAPANA');
    await base.threadhalf();
    await base.clickRoleButtonByIndex(5);
    await base.threadhalf();
    await base.textpath('Y');
    await base.threadone();

    // Continue filling fields
    await base.inputareasindex(5, '561255');
    await base.threadhalf();
    await base.page.waitForTimeout(1000);
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[6]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();
    await base.page.waitForTimeout(1000);
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[7]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadhalf();
    await base.inputareasindex(8, '5/42,Canada ');
    await base.threadhalf();
    await base.inputareasindex(9, 'Smith');
    await base.threadhalf();
    await base.inputareasindex(10, '92000');
    await base.threadhalf();
    await base.inputareasindex(11, '98765432');
    await base.threadhalf();
    await base.inputareasindex(12, 'NIL');
    await base.threadone();
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[13]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadhalf();
    await base.inputareasindex(14, 'No reason as of now');
    await base.threadhalf();
    await base.inputareasindex(15, 'No error');
    await base.threadhalf();
    await base.clickAutoCompleteByIndex(16);
    await base.threadhalf();
    await base.textpath('OK');
    await base.threadhalf();
    await base.textpath('OK');
    await base.threadhalf();
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[18]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadhalf();
    await base.inputareasindex(19, 'MODEL965');
    await base.threadhalf();
    await base.inputareasindex(20, '9896865565');

    // Next Button
    await base.NextButton();
    await base.thread();

    // Tab navigation
    await base.tabNavigation(30);
    await base.tabNavigation(30);

    // Eye Button, History, Edit
    await base.EyeButton();
    await base.threadone();
    await base.textpath('History');
    await base.threadhalf();
    await base.EditButton();
    await base.threadone();

    // Edit fields
    await base.clearAndTypeAutoCompleteByIndex(2, 'Flow 6 - Kbz ');
    await base.threadhalf();
    await base.clickAutoCompleteByIndex(3);
    await base.threadhalf();
    await base.DateclickOk(25);
    await base.threadone();
    await base.clearAndTypeAutoCompleteByIndex(10, '75000');
    await base.threadhalf();
    await base.clearAndTypeAutoCompleteByIndex(11, '95656565');
    await base.threadhalf();
    //await base.inputareasindex(18, '98765432');

    // Next, History, Details, Back
    await base.NextButton();
    await base.threadone();
    await base.textpath('History');
    await base.threadhalf();
    await base.textpath('Details');
    await base.threadone();
    await base.backbutton();
    await base.thread();

    await base.tabNavigation(30);
    await base.tabNavigation(20);

    // Assign to TSO
    await base.Texthome('Assign to TSO');
    await base.threadhalf();
    await base.typing('Testing - Assign to Tso');
    await base.threadhalf();
    await base.NextButton();
    await base.thread();

    // Logout and login as TSO
    await base.performLogout();
    await base.threadone();
    await base.performLogin('TSO_KBZPay@gmail.com', 'i00TLMvg~OWa3wW@xCE7');

    await base.thread();
    await base.thread();

    // Select and Pull
    await base.textpath('Select');
    await base.threadone();
    
    // Scroll and click the exact "Pin Reset Request + Device Change Request" option
    await base.page.evaluate(() => {
      const xpath = "(//*[contains(text(),'Pin Reset Request + Device Change Request')])[1]";
      const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (element) element.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });
    await base.page.waitForTimeout(1000);
    await base.page.evaluate(() => {
      const xpath = "(//*[contains(text(),'Pin Reset Request + Device Change Request')])[1]";
      const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (element) element.click();
    });
    await base.threadhalf();
    await base.textpath('Pull');
    await base.threadone();

    // Tab navigation
    await base.tabNavigation(30);
    await base.tabNavigation(20);

    // Resolve
    await base.threadhalf();
    await base.Texthome('Resolve');
    await base.threadone();
    await base.typing('Testing - Resolve');
    await base.NextButton();
    await base.thread();

    // Logout and login as closeloopteam
    await base.performLogout();
    await base.threadone();
    await base.performLogin('closeloopteam@gmail.com', 'Nw5ZQMJNx9uN85AJb0n0');

    await base.thread();

    await base.tabNavigation(30);
    await base.tabNavigation(20);

    // Close
    await base.Texthome('Close');
    await base.threadhalf();
    await base.typing('Testing - Close');
    await base.threadhalf();
    await base.NextButton();

    await base.page.pause();

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    //await base.quitbrowser();
  }
})();
