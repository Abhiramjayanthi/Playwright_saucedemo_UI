//import{test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Homepage } from '../pages/Homepage';
import {test,expect} from '../fixtures/baseTest';
// test.beforeEach('LoginPage Test', async({page})=>{
//     const loginpage = new LoginPage(page);
//     await loginpage.openWebsite();
//     await loginpage.login();
//     await expect(page).toHaveURL(/inventory/);
//     await expect(page.locator("//span[@class='title']")).toBeVisible();
// })

// test('HomePage Test', async({page})=>{
//     const HomePage = new Homepage(page);
//     //await HomePage.addToCart('Sauce Labs Backpack');
//     const products = [
//         'Sauce Labs Backpack',
//         'Test.allTheThings() T-Shirt (Red)'
//     ]
//     const numberOfProducts : number = products.length;
//     for(const product of products){
//         await HomePage.addToCart(product);
//     }
//     await expect(page.locator('.shopping_cart_badge')).toHaveText(numberOfProducts.toString());
//     await HomePage.clickBasketButton();
//     await expect(page.locator(".cart_quantity_label")).toBeVisible();
//     await HomePage.clickCheckOutButton();
//     await expect(page).toHaveURL(/checkout/);
//     await HomePage.passingCustomerDetails();
//     await HomePage.completingOrder();
//     await expect(page.locator('.inventory_item_name')).toHaveCount(numberOfProducts);
//     await HomePage.finishingOrder();
//     await expect(page.locator("//h2[normalize-space()='Thank you for your order!']")).toBeVisible();
//     await HomePage.backToHomePage(); 
// })


test('Logged in test',async({loggedInPage})=>{
    const page = loggedInPage;
    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator("//span[@class='title']")).toBeVisible();
    const HomePage = new Homepage(page);
    //await HomePage.addToCart('Sauce Labs Backpack');
    const products = [
        'Sauce Labs Backpack',
        'Test.allTheThings() T-Shirt (Red)'
    ]
    const numberOfProducts : number = products.length;
    for(const product of products){
        await HomePage.addToCart(product);
    }
    await expect(page.locator('.shopping_cart_badge')).toHaveText(numberOfProducts.toString());
    await HomePage.clickBasketButton();
    await expect(page.locator(".cart_quantity_label")).toBeVisible();
    await HomePage.clickCheckOutButton();
    await expect(page).toHaveURL(/checkout/);
    await HomePage.passingCustomerDetails();
    await HomePage.completingOrder();
    await expect(page.locator('.inventory_item_name')).toHaveCount(numberOfProducts);
    await HomePage.finishingOrder();
    await expect(page.locator("//h2[normalize-space()='Thank you for your order!']")).toBeVisible();
    await HomePage.backToHomePage(); 
})