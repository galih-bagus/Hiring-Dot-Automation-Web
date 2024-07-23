const helper = require("../helpers/helper");
const element = require("../helpers/element");
const assert = require("../helpers/assert");
const nameValid = process.env.NAME_FACEBOOK_VALID

describe("Authentication", function() {
    describe("Login", function() {
        before(async function() {
            let user = process.env.USERNAME_FACEBOOK_VALID
            let pswd = process.env.PASSWORD_FACEBOOK_VALID
            await helper.login(user, pswd)
        })
        after(async function() {
            await driver.sleep(500);
            await driver.quit();
        })
        it("As user, i can login facebook with valid data", async function() {
            const nameSidebar = await element.getTextXpath(`(//div[@data-visualcompletion]//span[normalize-space()='${nameValid}'])[2]`)
            await assert.assertionActualExpected(nameSidebar, nameValid)
        })
    })
})