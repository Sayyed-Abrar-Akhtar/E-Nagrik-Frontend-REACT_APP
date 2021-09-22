const { expect } = require('chai');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until, sleep } = require('selenium-webdriver');
const { delay } = require('../utils/delay');

// 1 CHILD BRITH REGISTRATION FEATURE TEST
Given(
  'Test child birth registration functionality',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
    await driver.get('http://localhost:3000/');
    await driver.findElement(By.id('birth-registration-section')).click();
    await driver.findElement(By.id('child-name')).sendKeys('baby test');
    await driver.findElement(By.id('label-male')).click();
    await driver.findElement(By.id('date-of-birth')).sendKeys('2021/1/10');
    await driver.findElement(By.id('permanent-address')).sendKeys('kly');
    await driver.findElement(By.id('birth-place')).sendKeys('kly');
    await driver.findElement(By.id('grandfather-name')).sendKeys('test');
    await driver.findElement(By.id('father-name')).sendKeys('test');
    await driver.findElement(By.id('father-id-number')).sendKeys('test');
    await driver.findElement(By.id('mother-name')).sendKeys('test');
    await driver.findElement(By.id('mother-id-number')).sendKeys('test');
    await driver.findElement(By.id('informant-name')).sendKeys('test');
    await driver
      .findElement(By.id('informant-id-number'))
      .sendKeys('2021/1/10');
    await driver.findElement(By.id('birth-register-btn')).click();
    await driver.wait(
      until.elementLocated(By.id('birth-register-success')),
      30000
    );
    expect(
      await driver.wait(until.elementLocated(By.id('birth-register-success')))
    );
  }
);

// 2 DEATH REGISTRATION FEATURE TEST
Given(
  'Test death registration functionality',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
    await driver.get('http://localhost:3000/');
    await driver.findElement(By.id('death-registration-section')).click();
    await driver.findElement(By.id('deceased-name')).sendKeys('test');
    await driver.findElement(By.id('label-male')).click();
    await driver.findElement(By.id('age')).sendKeys('40');
    await driver.findElement(By.id('died-on')).sendKeys('2021/08/11');
    await driver.findElement(By.id('death-place')).sendKeys('test');
    await driver.findElement(By.id('country-of-birth')).sendKeys('test');
    await driver.findElement(By.id('citizen-id')).sendKeys('test');
    await driver.findElement(By.id('permanent-address')).sendKeys('test');
    await driver.findElement(By.id('marital-status')).sendKeys('test');
    await driver.findElement(By.id('education')).sendKeys('test');
    await driver.findElement(By.id('religion')).sendKeys('test');
    await driver.findElement(By.id('grandfather-name')).sendKeys('test');
    await driver.findElement(By.id('father-name')).sendKeys('test');
    await driver.findElement(By.id('spouse-name')).sendKeys('test');
    await driver.findElement(By.id('cause-of-death')).sendKeys('test');
    await driver.findElement(By.id('informant-name')).sendKeys('test');
    await driver
      .findElement(By.id('informant-relation-with-deceased'))
      .sendKeys('test');
    await driver.findElement(By.id('informant-address')).sendKeys('test');
    await driver.findElement(By.id('death-register-btn')).click();
    await driver.wait(
      until.elementLocated(By.id('death-register-success')),
      30000
    );
    expect(
      await driver.wait(until.elementLocated(By.id('death-register-success')))
    );
  }
);

// 3 MARRIAGE REGISTRATION FEATURE TEST
Given(
  'Test marriage registration functionality',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
    await driver.get('http://localhost:3000/');
    await driver.findElement(By.id('marriage-registration-section')).click();
    await driver.findElement(By.id('bridegroom-name')).sendKeys('test');
    await driver.findElement(By.id('bride-name')).sendKeys('test');
    await driver
      .findElement(By.id('bridegroom-date-of-birth'))
      .sendKeys('2021/05/11');
    await driver
      .findElement(By.id('bride-date-of-birth'))
      .sendKeys('2021/05/11');
    await driver
      .findElement(By.id('bridegroom-citizenship-number'))
      .sendKeys('123');
    await driver.findElement(By.id('bride-citizenship-number')).sendKeys('123');
    await driver
      .findElement(By.id('bridegroom-permanent-address'))
      .sendKeys('test');
    await driver.findElement(By.id('bride-permanent-address')).sendKeys('test');
    await driver.findElement(By.id('bridegroom-father-name')).sendKeys('test');
    await driver.findElement(By.id('bride-father-name')).sendKeys('test');
    await driver.findElement(By.id('bridegroom-mother-name')).sendKeys('test');
    await driver.findElement(By.id('bride-mother-name')).sendKeys('test');
    await driver
      .findElement(By.id('bridegroom-grandfather-name'))
      .sendKeys('test');
    await driver.findElement(By.id('bride-grandfather-name')).sendKeys('test');
    await driver.findElement(By.id('marriage-register-btn')).click();
    await driver.wait(
      until.elementLocated(By.id('marriage-register-success')),
      30000
    );
    expect(
      await driver.wait(
        until.elementLocated(By.id('marriage-register-success'))
      )
    );
  }
);

// 4 CITIZEN REGISTRATION FEATURE TEST
Given(
  'Test citizen registration functionality',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
    await driver.get('http://localhost:3000/');
    await driver.findElement(By.id('citizen-registration-section')).click();
    await driver.findElement(By.id('name')).sendKeys('test');
    await driver.findElement(By.id('label-male')).click();
    await driver.findElement(By.id('birth-place')).sendKeys('test');
    await driver.findElement(By.id('address')).sendKeys('test');
    await driver.findElement(By.id('father-name')).sendKeys('test');
    await driver.findElement(By.id('father-address')).sendKeys('test');
    await driver.findElement(By.id('mother-name')).sendKeys('test');
    await driver.findElement(By.id('mother-address')).sendKeys('test');
    await driver.findElement(By.id('email')).sendKeys('test@test.com');
    await driver.findElement(By.id('password')).sendKeys('test');
    await driver.findElement(By.id('citizen-register-btn')).click();
    await driver.wait(
      until.elementLocated(By.id('citizen-register-success')),
      30000
    );
    expect(
      await driver.wait(until.elementLocated(By.id('citizen-register-success')))
    );
  }
);

// 5 COMPLAIN REGISTRATION FEATURE TEST
Given(
  'Test complain registration functionality',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
    await driver.get('http://localhost:3000/');
    await driver.findElement(By.id('complain-registration-section')).click();
    await driver.findElement(By.id('name')).sendKeys('test');
    await driver.findElement(By.id('citizen-id')).sendKeys('test');
    await driver.findElement(By.id('contact')).sendKeys('test');
    await driver.findElement(By.id('assailant-name')).sendKeys('test');
    await driver.findElement(By.id('event-date')).sendKeys('test');
    await driver
      .findElement(By.id('event-description'))
      .sendKeys('description...');
    await driver.findElement(By.id('complain-register-success')).click();
    await driver.wait(
      until.elementLocated(By.id('complain-register-success')),
      30000
    );
    expect(
      await driver.wait(
        until.elementLocated(By.id('complain-register-success'))
      )
    );
  }
);

// 6 NOTICE DISPLAY FEATURE TEST
Given(
  'Test notice display functionality',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
    await driver.get('http://localhost:3000/');
    await driver.wait(until.elementLocated(By.id('notice-list-1')), 30000);
    expect(await driver.wait(until.elementLocated(By.id('notice-list-1'))));
  }
);

// 7 CITIZEN LOGIN FEATURE TEST
Given(
  'Test citizen login functionality',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
    await driver.get('http://localhost:3000/');
    await driver.findElement(By.id('menu-login')).click();
    await driver.findElement(By.id('email')).sendKeys('s@a.com');
    await driver.findElement(By.id('password')).sendKeys('s');
    await driver.findElement(By.id('login-btn')).click();

    await driver.wait(until.elementLocated(By.id('profile-screen')), 30000);
    expect(await driver.wait(until.elementLocated(By.id('profile-screen'))));
  }
);

// 8 CITIZEN PROFILE FEATURE TEST
Given(
  'Test citizen profile functionality',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
    await driver.get('http://localhost:3000/');
    await driver.findElement(By.id('menu-login')).click();
    await driver.findElement(By.id('email')).sendKeys('s@a.com');
    await driver.findElement(By.id('password')).sendKeys('s');
    await driver.findElement(By.id('login-btn')).click();

    await driver.wait(until.elementLocated(By.id('menu-profile')), 30000);
    expect(await driver.wait(until.elementLocated(By.id('menu-profile'))));
  }
);

// 9 CITIZEN SUPPORT FEATURE TEST
Given(
  'Test citizen support functionality',
  { timeout: 30000 },
  async function () {
    let driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
    await driver.get('http://localhost:3000/');
    await driver.findElement(By.id('menu-support')).click();
    await driver.findElement(By.id('name')).sendKeys('test');
    await driver.findElement(By.id('email')).sendKeys('s@a.com');
    await driver.findElement(By.id('contact')).sendKeys('s');
    await driver.findElement(By.id('subject')).sendKeys('s');
    await driver.findElement(By.id('address')).sendKeys('s');
    await driver
      .findElement(By.id('support-text'))
      .sendKeys('support information..');
    await driver.findElement(By.id('support-btn')).click();

    await driver.wait(until.elementLocated(By.id('site-frame')), 90000);
    expect(await driver.wait(until.elementLocated(By.id('site-frame'))));
    await driver.quit();
  }
);
