const { By, until, Key } = require("selenium-webdriver");
const fs = require("fs");
const path = require("path");
const timestampjs = Math.floor(new Date().getTime() / 1000);

async function clickButtonUntilFindXpath(selector) {
    await driver.wait(until.elementLocated(By.xpath(selector)), 10000).click();
}

async function fillFilledXpath(selector, value, enter) {
    const ele = driver.wait(until.elementLocated(By.xpath(selector)), 10000);
    await ele.clear();
    await ele.sendKeys(value);
    if (enter == true) {
        await ele.sendKeys(Key.ENTER);
    }

}

async function fillSelectXpath(selector) {
    driver.findElement(By.xpath(selector), 10000).click();
}

async function scrollByXpath(selector) {
    const ScrollToNationality = await driver.wait(until.elementLocated(By.xpath(selector)), 10000);
    await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", ScrollToNationality);
}

async function getTextXpath(selector) {
    const elemen = driver.wait(until.elementLocated(By.xpath(selector)), 10000);
    const text = await elemen.getText();
    return text;
}

async function clearInputXpath(selector, enter = false) {
    const ele = await driver.wait(until.elementLocated(By.xpath(selector)), 10000);
    await ele.clear();
    if (enter == true) {
        await ele.sendKeys(" ");
        await ele.sendKeys(Key.ENTER);
    }
}

async function countElement(selector) {
    await driver.wait(until.elementLocated(By.xpath(selector)), 10000);
    const rows = await driver.findElements(By.xpath(selector));
    return rows.length;
}

async function showElement(selector) {
    await driver.wait(until.elementLocated(By.xpath(selector)), 10000);
}

async function takeScreenshot(name) {
    let takeSs = process.env.TAKESS;
    if (takeSs == "true") {
        const fileNameSs = name + timestampjs;
        await driver.sleep(1500);
        const screenshot = await driver.takeScreenshot();
        const filePath = path.join("./result", fileNameSs + ".png");
        fs.writeFileSync(filePath, screenshot, "base64");
    }
}

module.exports = {
    clickButtonUntilFindXpath: clickButtonUntilFindXpath,
    fillFilledXpath: fillFilledXpath,
    fillSelectXpath: fillSelectXpath,
    scrollByXpath: scrollByXpath,
    getTextXpath: getTextXpath,
    clearInputXpath: clearInputXpath,
    countElement: countElement,
    showElement: showElement,
    takeScreenshot: takeScreenshot,
};