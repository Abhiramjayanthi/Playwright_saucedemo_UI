import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import users from '../test-data/user.json';
import dotenv from 'dotenv';
dotenv.config();
export default {};
for(const u of users.allUsers){
    test(`Login page for ${u.username}`, async ({page})=>{
        const loginpage = new LoginPage(page);
        await loginpage.openWebsite();
        await loginpage.login(u.username,process.env.VALID_PASSWORD);
    });
    

}