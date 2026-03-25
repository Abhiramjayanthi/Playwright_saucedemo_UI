import {test as base, Page,expect} from "@playwright/test";
import {LoginPage} from '../pages/LoginPage';
type MyFixtures = {
    loggedInPage : Page;
}
export const test=base.extend<MyFixtures>({
    loggedInPage:async({page},use)=>{
        const loginpage = new LoginPage(page);
        await loginpage.openWebsite();
        await loginpage.login('standard_user','secret_sauce');
        await use(page);
    }  
})
export { expect };