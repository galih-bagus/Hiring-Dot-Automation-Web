const helper = require("../helpers/helper");
const element = require("../helpers/element");
const assert = require("../helpers/assert");
const nameValid = process.env.NAME_FACEBOOK_VALID

describe("Authentication", function() {
    describe("Login", function() {
        before(async function() {
            await helper.openWebsite()
        })
        after(async function() {
            await driver.sleep(500);
            await driver.quit();
        })

        it("As user, i can't login facebook with invalid data", async function() {
            let user = process.env.USERNAME_FACEBOOK_INVALID
            let pswd = process.env.PASSWORD_FACEBOOK_INVALID
            await helper.login(user, pswd)
            const errorMessage = await element.getTextXpath(`//div[@id='error_box']//div[2]`)
            await assert.assertionActualExpected(errorMessage, 'Invalid username or password')
        })
        it("As user, i can't login facebook without password", async function() {
            let user = process.env.USERNAME_FACEBOOK_INVALID
            let pswd = process.env.PASSWORD_FACEBOOK_INVALID
            await helper.login(user, pswd, false)
            const errorMessage = await element.getTextXpath(`//div[@id='error_box']//div[2]`)
            await assert.assertionActualExpected(errorMessage, 'Invalid username or password')
            await driver.sleep(6000)
        })
        it("As user, i can't login facebook without username", async function() {
            await element.clearInputXpath(`//input[@id='email']`)
            let user = process.env.USERNAME_FACEBOOK_INVALID
            let pswd = process.env.PASSWORD_FACEBOOK_INVALID
            await helper.login(user, pswd, true, false)
            const errorMessage = await element.getTextXpath(`//div[@id='error_box']//div[2]`)
            await assert.assertionActualExpected(errorMessage, 'Invalid username or password')
        })
    })
})