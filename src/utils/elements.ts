import { Page, Locator } from '@playwright/test';

export async function navigate(page: Page, url: string) {
  await page.goto(url, { timeout: 0, waitUntil: 'networkidle' });
}

export async function clickOn(element:Locator) {
    await element.isVisible();
    await element.click();
}