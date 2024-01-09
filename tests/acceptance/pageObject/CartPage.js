const {expect} = require("playwright/test")
const util = require('util')
class CartPage {
    constructor() {
        this.inverntoryItemNameSelector = '//div[contains(@class,"inventory_item_name") and text()="%s"]'
        this.checkoutCompleteSelector = '//span[contains(@class,"title") and text()="Checkout: Complete!"]'
        this.checkoutSelector='[data-test="checkout"]'
        this.firstNameSelector='[data-test="firstName"]'
        this.lastNameSelector='[data-test="lastName"]'
        this.postalCodeSelector='[data-test="postalCode"]'
        this.continueCheckoutSelector='[data-test="continue"]'
        this.finishCheckoutSelector='[data-test="finish"]'
    }

   async expectTheItemToBeInTheCart(item){
        await expect(page.locator(util.format(this.inverntoryItemNameSelector,item))).toBeVisible()
    }

    async checkout(data){
        await page.click(this.checkoutSelector)
        await page.fill(this.firstNameSelector,data.firstName)
        await page.fill(this.lastNameSelector,data.lastName)
        await page.fill(this.postalCodeSelector,data.postalCode)
        await page.click(this.continueCheckoutSelector)
        await page.click(this.finishCheckoutSelector)
    }

    async expectTheCheckoutToBeComplete(){
        await expect(page.locator(this.checkoutCompleteSelector)).toBeVisible()
    }
}

module.exports = {CartPage};
