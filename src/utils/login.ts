import { Page } from "@playwright/test";
import {navigate, clickOn} from '../utils/elements';

export async function login (page:Page, url: string, userName: string, password: string) {
    

    const loginBtn = page.locator('#user-menu #loginBtn');

    // await page.goto('https://stage.connectamericas.com/');
  await navigate(page, url);
    // await console.log(page.url());

  await clickOn(loginBtn);
  
  await page
    .frameLocator('#login-iframe')
    .locator('input[name="username"]')
    .type(userName);

  // await page.frameLocator('#login-iframe').locator('input[name="password"]').fill('qwe123'); change the method 'fill' for 'type' 

  await page.frameLocator('#login-iframe').locator('input[name="password"]').type(password);

  // await page.frameLocator('#login-iframe').locator('input[name="password"]').press('Enter');

  // await page.frameLocator('#login-iframe').locator('input[name="password"]').dispatchEvent('change');

  await page.frameLocator('#login-iframe').locator('#fm1 .btn-submit').click();
    
}
