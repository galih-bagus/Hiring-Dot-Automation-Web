const { Builder } = require("selenium-webdriver");
const element = require("../helpers/element");

driver = new Builder().forBrowser("chrome").build();

async function openWebsite() {
    let url = process.env.URL;
    await driver.get(url);
    await driver.manage().window().maximize();
}

async function login(user, password, withoutPassword = true, withoutUsername = true) {
    if (withoutUsername == true) {
        await element.fillFilledXpath(`//input[@id='email']`, user);
    }
    if (withoutPassword == true) {
        await element.fillFilledXpath(`//input[@id='pass']`, password);
    }
    await element.clickButtonUntilFindXpath(`//button[@name='login']`);
}

module.exports = {
    openWebsite: openWebsite,
    login: login,
}