import { Page, Locator } from '@playwright/test';

export async function navigate(page: Page, url: string) {
  await page.goto(url, { waitUntil: 'networkidle' });
}

export async function clickOn(element:Locator) {
    await element.isVisible();
    await element.click();
}

export async function hoverOn(element: Locator) {
    await element.hover();
}

export async function getElement(page: Page, element:string) {
    return page.locator(element);    
}

export async function goToProfile(page: Page) {
    const userMenu = await getElement(page, '#header-user-actions .name ');
    await hoverOn(userMenu);
    await page.locator('.shared .edit >> nth=0').click();
}