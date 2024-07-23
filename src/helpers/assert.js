const { By, until } = require("selenium-webdriver");
let expect;
import("chai").then((chai) => {
  expect = chai.expect;
});

async function assertionValue(selector, expectedValue, type = true) {
  const element = await driver.wait(until.elementLocated(By.xpath(selector)));
  await driver.wait(until.elementIsVisible(element), 10000);
  let text;
  if (type) {
    text = await element.getText();
  } else {
    text = await element.getAttribute("value");
  }
  expect(text).to.equal(expectedValue);
  await driver.sleep(1000);
}

async function assertionActualExpected(actual, expected) {
  expect(expected).to.equal(actual);
}

module.exports = {
  assertionValue: assertionValue,
  assertionActualExpected: assertionActualExpected,
};