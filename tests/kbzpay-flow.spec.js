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
    await base.threadhalf();

    // Select Pin Reset Request + Device Change Request
    await base.textpath('Unfreeze Balance Status');
    await base.threadone();

    // Fill form fields
    await base.inputareasindex(1, '9256665111');
    await base.threadhalf();
    await base.page.click("xpath=(//*[@aria-label='YYYY-MM-DD'])[1]");
    await base.page.waitForTimeout(1000);
    await base.page.click("xpath=(//*[@role='button'])[26]");
    await base.page.waitForTimeout(500);
    await base.page.click("xpath=//*[text()='OK']");
    await base.page.waitForTimeout(1000);
    await base.page.evaluate(() => window.scrollBy(0, 200));
    await base.threadhalf();
    await base.inputareasindex(2, 'Cus name is Unfreeze');
    await base.threadhalf();

    // Upload PDF
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[4]","C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");

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
    await base.page.waitForTimeout(2000);
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[6]","C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");

    await base.threadone();
    await base.page.waitForTimeout(2000);
       await base.uploadFile("xpath=(//*[@autocomplete='off'])[7]","C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");

    await base.threadhalf();
    await base.inputareasindex(8, '2/96,Australia ');
    await base.threadhalf();
    await base.inputareasindex(9, 'John');
    await base.threadhalf();
    await base.inputareasindex(10, '85000');
    await base.threadhalf();
    await base.inputareasindex(11, '95656565');
    await base.threadhalf();
        await base.uploadFile("xpath=(//*[@autocomplete='off'])[12]","C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();
        await base.uploadFile("xpath=(//*[@autocomplete='off'])[13]","C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");

    await base.threadhalf();
    await base.inputareasindex(14, 'SD54S5D45S4D');
    await base.threadhalf();
    await base.inputareasindex(15, 'OLDDJ65S6D5');
    await base.threadhalf();
    await base.page.click("xpath=(//*[@autocomplete='off'])[16]");
    await base.threadhalf();
    await base.textpath('OK');
    await base.threadhalf();
    await base.textpath('OK');
    await base.threadhalf();
     //  await base.uploadFile("xpath=(//*[@autocomplete='off'])[18]","C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");

         await base.inputareasindex(18, '95656565');
    await base.threadhalf();
    await base.inputareasindex(19, 'No reason as of now');
    await base.threadhalf();
    await base.page.evaluate(() => window.scrollBy(0, 300));
    await base.threadone();

    // Next Button
    await base.page.evaluate(() => {
      const nextButton = document.evaluate("(//*[text()='Next'])[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (nextButton) nextButton.click();
    });
    await base.threadone();

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
    await base.clearAndTypeAutoCompleteByIndex(10, '50000');
    await base.threadhalf();
    await base.clearAndTypeAutoCompleteByIndex(11, '9786546556');
    await base.threadhalf();
    await base.inputareasindex(18, '9956565555');

    // Next, History, Details, Back
    await base.NextButton();
    await base.threadone();
    await base.textpath('History');
    await base.threadhalf();
    await base.textpath('Details');
    await base.threadone();
    await base.backbutton();
    await base.threadone();

        await base.tabNavigation(30);
                await base.tabNavigation(30);



    // Assign to TSO
    await base.Texthome('Assign to TSO');
    await base.threadhalf();
    await base.radiobutton(1);
    await base.threadhalf();
    await base.radiobutton(3);
    await base.threadhalf();
    await base.radiobutton(5);
    await base.threadhalf();
    await base.NextButton();
    await base.thread();

    // Logout and login as TSO
    await base.performLogout();
    await base.threadone();
    await base.performLogin('TSO_KBZPay@gmail.com', 'i00TLMvg~OWa3wW@xCE7');

    // Select and Pull
    await base.textpath('Select');
    await base.threadone();
    await base.TabIndex(3);
    await base.threadhalf();
    await base.textpath('Pull');
    await base.threadone();

    // Tab navigation
    await base.tabNavigation(30);
            await base.tabNavigation(30);


    // Three dot and Deny
    await base.threedot();
    await base.threadhalf();
    await base.Texthome('Deny');
    await base.threadone();
    await base.typing('Testing - Deny');
    await base.NextButton();
    await base.thread();

    // Logout and login as BranchTeam
    await base.performLogout();
    await base.threadone();
    await base.performLogin('BranchTeam_KBZPay@gmail.com', '98DjpLo4WVsdI5HILPVI');

            await base.tabNavigation(30);
        await base.tabNavigation(30);


    await base.page.pause();

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    //await base.quitbrowser();
  }
})();
