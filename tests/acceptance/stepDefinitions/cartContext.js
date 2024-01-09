const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")
const {InventoryPage} = require("../pageObject/InventoryPage")
const {CartPage} = require('../pageObject/CartPage')

const inventoryPage = new InventoryPage()
const cartPage = new CartPage()

When('user performs checkout with following information',async function(table){
    await inventoryPage.navitageToCartPage()
    await cartPage.checkout(table.rowsHash())
})

Then('item {string} should be in the cart', async function (item) {
    await inventoryPage.navitageToCartPage()
    await cartPage.expectTheItemToBeInTheCart(item)
})

Then('the checkout should be complete', async function () {
    await cartPage.expectTheCheckoutToBeComplete()
})
