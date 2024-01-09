const {expect} = require("playwright/test");

class LoginPage {
    constructor() {
        //locators
        this.usernameInputField = '[data-test="username"]'
        this.passwordInputField = '[data-test="password"]'
        this.loginButton = '[data-test="login-button"]'
        this.menuSelector = '#react-burger-menu-btn'
        this.logoutSelector = '#logout_sidebar_link'
        this.errorMessageContainer = '.error-message-container'
    }

    async navigate(){
        await page.goto('https://www.saucedemo.com/')
    }

    async login(username){
        await page.fill(this.usernameInputField,username)
        await page.fill(this.passwordInputField,'secret_sauce')
        await page.click(this.loginButton)
    }

    async logout() {
        await page.click(this.menuSelector)
        await page.click(this.logoutSelector)
        await expect(page.locator(this.usernameInputField)).toBeVisible()
    }

    async loginError(){
        await expect(page.locator(this.errorMessageContainer)).toBeVisible()
    }
}

module.exports = {LoginPage}
