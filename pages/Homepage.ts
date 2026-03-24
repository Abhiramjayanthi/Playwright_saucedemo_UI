import { Page,expect,Locator } from "@playwright/test";
/*
After login:

👉 Add product to cart
👉 Open cart
👉 Validate item is added
*/
export class Homepage {
    private page :Page;
    private addToCartButton : Locator;
    private clickBasket:Locator;
    private clickCheckOut : Locator;
    private firstName : Locator;
    private lastName : Locator;
    private PostCode : Locator;
    private clickContinue : Locator;
    private finish : Locator;
    private backHome: Locator;
    constructor(page:Page){
        this.page=page;
        this.addToCartButton = page.locator("button[id='add-to-cart-test.allthethings()-t-shirt-(red)']");
        this.clickBasket = page.locator(".shopping_cart_link");
        this.clickCheckOut=page.locator("#checkout");
        this.firstName=page.locator("#first-name");  
        this.lastName=page.locator("#last-name");
        this.PostCode=page.locator("#postal-code");
        this.clickContinue=page.locator("#continue");
        this.finish = page.locator("#finish");
        this.backHome = page.locator("#back-to-products");
    }
    /*
    This is hardcoded but we need dynamic
    async addToCart(){
        await this.addToCartButton.click();
        //await expect(this.page.locator("//button[@id='remove-test.allthethings()-t-shirt-(red)']")).toBeVisible();
    }

    */

    async addToCart(ProductName : string){
        await this.page.locator('.inventory_item').filter({hasText:ProductName}).locator('button').click();
    }
    async clickBasketButton(){
        await this.clickBasket.click();
        //await expect(this.page.locator(".cart_quantity_label")).toBeVisible();
    }
    async clickCheckOutButton(){
        await this.clickCheckOut.click();
       // await expect(this.page).toHaveURL(/checkout/);
    }
    async passingCustomerDetails(){
        await this.firstName.fill("Abhiram");
        await this.lastName.fill("Jayanthi");
        await this.PostCode.fill("600097");
    }
    async completingOrder(){
        await this.clickContinue.click();
    }
    async finishingOrder(){
        await this.finish.click();
    }
    async backToHomePage(){
        await this.backHome.click();
    }
}