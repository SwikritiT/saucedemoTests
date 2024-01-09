const {expect} = require("playwright/test")
const util = require('util')

class InventoryPage {
    constructor() {
        //locators
        this.inverntoryContainerLocator = '.inventory_container'
        this.addToCartLocator='[data-test="add-to-cart-%s"]'
        this.removeFromCartLocator='[data-test="remove-%s"]'
        this.shoppingCartLocator='.shopping_cart_link'
        this.itemSortingLocator='//*[@data-test="product_sort_container"]'
        this.sortOptionSelectContainerLocator='.select_container'
        this.inventoryItemNameLocator = '.inventory_item_name'
        this.inventoryItemPriceLocator = '.inventory_item_price'
    }

    async expectInventoryPageToBeVisible(){
        await expect(page.locator(this.inverntoryContainerLocator)).toBeVisible()
    }

    async addItemToTheCart(item) {
        //replace all the whitespaces
        const sanitizedText = item.toLowerCase().replace(/\s+/g, '-')
        const addToCartSelector = util.format(this.addToCartLocator,sanitizedText)
        await page.click(addToCartSelector)
        await expect(page.locator(util.format(this.removeFromCartLocator, sanitizedText))).toBeVisible()
    }

    async navitageToCartPage() {
        await page.click(this.shoppingCartLocator)
    }

    async sortItem(sortType){
        await page.click(this.sortOptionSelectContainerLocator)
        const sortValue = this.getSortValue(sortType)
        await page.locator(this.itemSortingLocator).selectOption(sortValue)
    }

     getSortedItemByName() {
        return  page.locator(this.inventoryItemNameLocator).allTextContents()
    }

    getSortedItemByPrice() {
        return  page.locator(this.inventoryItemPriceLocator).allTextContents()
    }

     isSortedNameAscending(items) {
        for (let i = 0; i < items.length - 1; i++) {
            if (items[i].localeCompare(items[i + 1]) > 0) {
                return false;
            }
        }
        return true;
    }

    isSortedNameDescending(items) {
        for (let i = 0; i < items.length - 1; i++) {
            if (items[i].localeCompare(items[i + 1]) < 0) {
                return false;
            }
        }
        return true;
    }

    isSortedPriceAscending(items) {
        return items.every((value, index, array) => index === 0 || parseFloat(array[index - 1].replace('$', '')) <= parseFloat(value.replace('$', '')));
    }

    isSortedPriceDescending(items) {
        return items.every((value, index, array) => index === 0 || parseFloat(array[index - 1].replace('$', '')) >= parseFloat(value.replace('$', '')));
    }

    getSortValue(sortType) {
        let sortValue = null
        switch (sortType){
            case "A to Z":
                sortValue = "az"
                break;
            case "Z to A":
                sortValue = "za"
                break;
            case "low to high":
                sortValue = "lohi"
                break;
            case "high to low":
                sortValue = "hilo"
                break;
            default:
                sortValue = "az"
        }
        return sortValue
    }
}
module.exports = {InventoryPage};
