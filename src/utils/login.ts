import { Page , expect} from "@playwright/test";
import * as assistant from '../utils/elements';
import { selectors } from "./selectors";

export async function login (page:Page, url: string, userName: string, password: string) {
    const loginBtn = await assistant.getElement(page, selectors.loginBtn);
    // const frame = await(getLoginFrame(page));
    // const userNameInput = await assistant.getElement(page, selectors.userNameInput);
    // const passwordInput = await assistant.getElement(page, selectors.passwordInput);
    // const submitBtn = await assistant.getElement(page, selectors.submitBtn);
    await assistant.navigate(page, url);
    await assistant.clickOn(loginBtn);

    const frame = await getLoginFrame(page);
    await page.pause();
    const userNameInput = await frame?.waitForSelector('#username');
    await page.pause();

    const passwordInput = await frame?.waitForSelector('#password');
    await page.pause();

    const submitBtn = await frame?.waitForSelector('.btn-submit');
    await page.pause();

    if (!userNameInput || !passwordInput || ! submitBtn) {
        throw new Error ('Login form not found')        
    }
    await page.pause();

    await userNameInput.type(userName);
    await passwordInput.type(password);
    await submitBtn.click();
    expect(page.locator('.name-user').first()).toBeTruthy();
  
//   await page
//     .frameLocator('#login-iframe')
//     .locator('input[name="username"]')
//     .type(userName);

//   await page.frameLocator('#login-iframe').locator('input[name="password"]').type(password);

//   await page.frameLocator('#login-iframe').locator('#fm1 .btn-submit').click();
    
}

export async function getLoginFrame(page: Page) {
    const elementHandle = await page.$('#login-iframe');
    const frame = await elementHandle?.contentFrame();
    return frame;
  }