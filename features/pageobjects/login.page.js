const { $, expect } = require('@wdio/globals')
const Page = require('./page');

const errorLockedOutUser = (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`)


class LoginPage extends Page {
    
    get fieldUsername () {
        return $('#user-name');
    }

    get fieldPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('#login-button');
    }
    
    async login (username) {
        await this.fieldUsername.waitForDisplayed({ timeout : 2500});
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.btnLogin.click();
    }
    async validateLockedOutUserError (dynamicMessage) {
        await errorLockedOutUser(dynamicMessage).waitForDisplayed({ timeout: 2500 });
        await expect(errorLockedOutUser(dynamicMessage)).toBeDisplayed()
    }
    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();