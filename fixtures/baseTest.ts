import {test as base, Page,expect} from "@playwright/test";
import {LoginPage} from '../pages/LoginPage';
import user from '../test-data/user.json';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({
    path: path.resolve(__dirname, '../.env'),
});
type MyFixtures = {
    loggedInPage : Page;
}
export const test=base.extend<MyFixtures>({
    loggedInPage:async({page},use)=>{
        const loginpage = new LoginPage(page);
        await loginpage.openWebsite();
        //await loginpage.login('standard_user','secret_sauce');
        const testUser = user.validUsers[0];
        await loginpage.login(testUser.username,process.env.VALID_PASSWORD);
        if(testUser.type=='valid'){
            await expect(page).toHaveURL(/inventory/);
        }
        else if(testUser.type=='Invalid'){
            await expect(page.locator('[data-test="error"]'))
        .toContainText('Sorry, this user has been locked out');
        }
        //const invalidtestUser = user.invalidUsers[0];
        //await loginpage.login(invalidtestUser.username,invalidtestUser.password);
        await use(page);
        console.log(process.env.VALID_PASSWORD);
    }  
})
export { expect };