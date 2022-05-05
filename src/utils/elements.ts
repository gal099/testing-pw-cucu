import { Page, Locator } from '@playwright/test';

export async function navigate(page: Page, url: string) {
  await page.goto(url, { waitUntil: 'networkidle' });
}

export async function clickOn(element:Locator) {
    await element.isVisible();
    await element.click();
}

export async function getElement(page: Page, element:string) {
    return page.locator(element);    
}