import { Page } from "@playwright/test";
import {navigate, clickOn} from '../utils/elements';

export async function login (page:Page, url: string, userName: string, password: string) {
  
  const loginBtn = page.locator('#user-menu #loginBtn');

  await navigate(page, url);
    
  await clickOn(loginBtn);
  
  await page
    .frameLocator('#login-iframe')
    .locator('input[name="username"]')
    .type(userName);

  await page.frameLocator('#login-iframe').locator('input[name="password"]').type(password);

  await page.frameLocator('#login-iframe').locator('#fm1 .btn-submit').click();
    
}
