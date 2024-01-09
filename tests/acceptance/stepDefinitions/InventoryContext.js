const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")
const {InventoryPage} = require("../pageObject/InventoryPage")


const inventoryPage = new InventoryPage()


When('user adds item {string} to the cart', async function (item) {
    await inventoryPage.addItemToTheCart(item)
})

When ('user sorts the items from {string}', async function(sortType){
    await inventoryPage.sortItem(sortType)
})

Given('user has added item {string} to the cart', async function (item) {
    await inventoryPage.addItemToTheCart(item)
})

Then('the items should be sorted from {string}', async function(sortType){
    let  sortedItem = null
    if( sortType==='A to Z') {
        sortedItem = await inventoryPage.getSortedItemByName()
        expect(inventoryPage.isSortedNameAscending(sortedItem)).toBe(true)
    } else if( sortType==='Z to A') {
        sortedItem = await inventoryPage.getSortedItemByName()
        expect(inventoryPage.isSortedNameDescending(sortedItem)).toBe(true)
    } else if( sortType==='low to high') {
        sortedItem = await inventoryPage.getSortedItemByPrice()
        expect(inventoryPage.isSortedPriceAscending(sortedItem)).toBe(true)
    } else if( sortType==='high to low') {
        sortedItem = await inventoryPage.getSortedItemByPrice()
        expect(inventoryPage.isSortedPriceDescending(sortedItem)).toBe(true)
    }
})
