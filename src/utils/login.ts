import { Page , expect} from "@playwright/test";
import * as assistant from '../utils/elements';
import { selectors } from "./selectors";

export async function login (page:Page, url: string, userName: string, password: string) {
    const loginBtn = await assistant.getElement(page, selectors.loginBtn);

    await assistant.navigate(page, url);
    await assistant.clickOn(loginBtn);
    
    const frame = await getLoginFrame(page);
    const userNameInput = await frame?.waitForSelector('#username');
    const passwordInput = await frame?.waitForSelector('#password');
    const submitBtn = await frame?.waitForSelector('.btn-submit');

    if (!userNameInput || !passwordInput || ! submitBtn) {
        throw new Error ('Login form not found')        
    }

    await userNameInput.type(userName);
    await passwordInput.type(password);
    await submitBtn.click();
    expect(page.locator('.name-user').first()).toBeTruthy();      
}

export async function getLoginFrame(page: Page) {
    const elementHandle = await page.$('#login-iframe');
    const frame = await elementHandle?.contentFrame();
    return frame;
  }