const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")
const {LoginPage} = require("../pageObject/LoginPage")
const {InventoryPage} = require("../pageObject/InventoryPage")



const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()

When('user {string} logs in', async function (username) {
    await loginPage.navigate()
    await loginPage.login(username)
})

When('user logs out', async function () {
    await loginPage.logout()
})

Then('the user should be in the inventory page', async function () {
    await inventoryPage.expectInventoryPageToBeVisible()
})

Given('user {string} has logged in', async function (username) {
    await loginPage.navigate()
    await loginPage.login(username)
    await inventoryPage.expectInventoryPageToBeVisible()
})

When('user {string} tries to log in', async function(username){
    await loginPage.navigate()
    await loginPage.login(username)
})

Then('user should not be able to log in', async function () {
    await loginPage.loginError()
})
