const { Builder } = require("selenium-webdriver");
const element = require("../helpers/element");

driver = new Builder().forBrowser("chrome").build();

async function login(user, password, first = true) {
    if (first == true) {
        vars = {};
        let url = process.env.URL;

        await driver.get(url);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
    }
    await element.fillFilledXpath(`//input[@data-testid='royal_email']`, user);
    await element.fillFilledXpath(`//input[@data-testid='royal_pass']`, password);
    await element.clickButtonUntilFindXpath(`//button[@data-testid='royal_login_button']`);
}

module.exports = {
    login: login,
}