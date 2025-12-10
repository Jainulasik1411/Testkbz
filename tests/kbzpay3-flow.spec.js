const BaseClass = require('../BaseClass');

(async () => {
  const base = new BaseClass();

  try {
    await base.browserLaunch('chrome');
    await base.urlLaunch('https://staging.flow.stax.run/#/login');
    await base.maximize();

    await base.page.waitForTimeout(2000);
    await base.thread();
    await base.page.click("xpath=//*[@aria-label='Enter registered email']");
    await base.wait(10);
    await base.page.waitForTimeout(1000);
    await base.page.fill("xpath=//*[@aria-label='Enter registered email']", 'BranchTeam11_KBZPay@gmail.com');
    await base.wait(50);
    await base.page.keyboard.press('Tab');
    await base.page.waitForTimeout(200);
    await base.wait(50);
    await base.page.fill("xpath=//flt-semantics[@aria-label='Enter Password']//input[@data-semantics-role='text-field']", '3wY2r-NjP3MJxQ3O5qu1');
    await base.wait(100);
    await base.page.click("xpath=//*[text()='Login']");
    await base.page.waitForTimeout(2000);

    await base.thread();
    await base.page.waitForTimeout(2000);
    await base.clickAddNew();
    await base.thread();
    await base.page.keyboard.press('Control+Minus');
    await base.page.keyboard.press('Control+Minus');
    await base.PleaseSelect();
    await base.threadhalf();
    await base.textpath('PIN Reset Request');
    await base.threadhalf();

    await base.inputareasindex(1, '95656565');
    await base.threadone();
    await base.inputareasindex(2, 'Customer name : Flow2');
    await base.threadone();
    await base.page.click("xpath=//*[@aria-label='YYYY-MM-DD']");
    await base.threadhalf();
    await base.DateclickOk(30);
    await base.thread();
    await base.page.waitForTimeout(1000);
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[4]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadhalf();

    await base.radiobutton(2);
    await base.threadhalf();
    await base.inputareasindex(5, 'S5DS6D86');
    await base.threadone();
    await base.page.waitForTimeout(1000);
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[6]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadone();
    await base.page.waitForTimeout(1000);
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[7]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.thread();

    await base.inputareasindex(8, 'Address is 2/963,Uk- England');
    await base.threadhalf();
    await base.inputareasindex(9, 'JOHNDARY');
    await base.threadhalf();
    await base.inputareasindex(10, '12000000');
    await base.threadhalf();
    await base.inputareasindex(11, '9898989898');
    await base.threadhalf();
    await base.inputareasindex(12, '9898989888');
    await base.page.waitForTimeout(1000);
    await base.threadone();
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[13]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadhalf();
    await base.inputareasindex(14, 'Active');
    await base.threadhalf();
    await base.page.waitForTimeout(1000);
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[15]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();

    await base.NextButton();
    await base.thread();
    await base.tabNavigation(30);
    await base.tabNavigation(30);

    await base.EyeButton();
    await base.threadone();
    await base.textpath('History');
    await base.threadhalf();
    await base.EditButton();
    await base.threadone();

    await base.clearAndTypeAutoCompleteByIndex(2, 'Flow 2 - Kbz ');
    await base.thread();
    await base.clickRoleButtonByIndex(3);
    await base.threadhalf();
    await base.textpath('USD');
    await base.threadone();
    await base.clearAndTypeAutoCompleteByIndex(11, '9898989877');
    await base.threadone();
    await base.inputareasindex(16, 'No reason');
    await base.threadone();
    await base.inputareasindex(17, 'No error');
    await base.clickAutoCompleteByIndex(18);
    await base.threadhalf();
    await base.DateclickOk(3);
    await base.threadhalf();
    await base.textpath('OK');
    await base.threadhalf();

    await base.NextButton();
    await base.thread();
    await base.textpath('History');
    await base.threadone();
    await base.textpath('Details');
    await base.thread();

    await base.Texthome('Assign to TSO');
    await base.threadhalf();
    await base.radiobutton(1);
    await base.threadhalf();
    await base.radiobutton(3);
    await base.threadhalf();
    await base.radiobutton(5);
    await base.threadone();
    await base.typing('Testing - Assign to TSO');
    await base.threadone();
    await base.NextButton();
    await base.thread();
    await base.thread();

    await base.performLogout();
    await base.threadone();
    await base.performLogin('TSO2_KBZPay@gmail.com', 'Xg919I5E28sAJm86tV!i');
    await base.thread();
    await base.textpath('Select');
    await base.threadone();
    await base.TabIndex(4);
    await base.threadhalf();
    await base.textpath('Pull');
    await base.threadone();
    await base.tabNavigation(30);
    await base.tabNavigation(30);

    await base.Texthome('Mark for Correction');
    await base.threadone();
    await base.typing('Testing - Mark for correction');
    await base.threadhalf();
    await base.NextButton();
    await base.thread();
    await base.thread();

    await base.performLogout();
    await base.threadone();
    await base.performLogin('BranchTeam11_KBZPay@gmail.com', '3wY2r-NjP3MJxQ3O5qu1');
    await base.thread();
    await base.tabNavigation(30);
    await base.tabNavigation(30);

    await base.Texthome('Application Corrected');
    await base.threadhalf();
    await base.clearAndTypeAutoCompleteByIndex(5, 'PA896PRT');
    await base.threadone();
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[14]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadhalf();
    await base.clearAndTypeAutoCompleteByIndex(18, 'Testing - Application corr');
    await base.threadhalf();
    await base.NextButton();
    await base.thread();
    await base.thread();

    await base.performLogout();
    await base.threadone();
    await base.performLogin('TSO2_KBZPay@gmail.com', 'Xg919I5E28sAJm86tV!i');
    await base.thread();
    await base.textpath('Select');
    await base.threadone();
    await base.TabIndex(4);
    await base.threadhalf();
    await base.textpath('Pull');
    await base.threadone();
    await base.tabNavigation(30);
    await base.tabNavigation(30);

    await base.threedot();
    await base.threadone();
    await base.Texthome('Need more info');
    await base.threadhalf();
    await base.typing('Testing - Need more info');
    await base.threadhalf();
    await base.NextButton();
    await base.thread();
    await base.thread();

    await base.performLogout();
    await base.threadone();
    await base.performLogin('closeloopteam2@gmail.com', '@~MkkPi6K!Vv-nED3ABe');
    await base.thread();
    await base.tabNavigation(30);
    await base.tabNavigation(30);

    await base.Texthome('Update');
    await base.threadhalf();
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[1]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.inputareasindex(2, 'Testing - Update');
    await base.threadhalf();
    await base.NextButton();
    await base.thread();
    await base.thread();

    await base.performLogout();
    await base.threadone();
    await base.performLogin('TSO_KBZPay@gmail.com', 'i00TLMvg~OWa3wW@xCE7');
    await base.thread();
    await base.textpath('Select');
    await base.threadone();
    await base.TabIndex(4);
    await base.threadhalf();
    await base.textpath('Pull');
    await base.threadone();
    await base.tabNavigation(30);
    await base.tabNavigation(30);

    await base.Texthome('Resolve');
    await base.threadhalf();
    await base.typing('Testing - Resolve');
    await base.threadhalf();
    await base.NextButton();
    await base.thread();
    await base.thread();

    await base.performLogout();
    await base.threadone();
    await base.performLogin('closeloopteam@gmail.com', 'Nw5ZQMJNx9uN85AJb0n0');
    await base.thread();
    await base.tabNavigation(30);
    await base.tabNavigation(30);

    await base.Texthome('Close');
    await base.threadhalf();
    await base.typing('Testing - Close');
    await base.NextButton();

    await base.page.pause();

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    //await base.quitbrowser();
  }
})();
