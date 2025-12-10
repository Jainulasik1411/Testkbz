const BaseClass = require('../BaseClass');

(async () => {
  const base = new BaseClass();

  try {
    await base.browserLaunch('chrome');
    await base.urlLaunch('https://staging.flow.stax.run/#/login');
    await base.maximize();
    await base.performLogin('TSO_KBZPay@gmail.com', 'i00TLMvg~OWa3wW@xCE7');

    await base.thread();
    await base.thread();

    await base.textpath('Select');
    await base.threadone();
    
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

    await base.page.pause();

  } catch (error) {
    console.error('Error:', error.message);
  }
})();
