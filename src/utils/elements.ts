import { Page } from '@playwright/test';

export async function navigate(page: Page, url: string) {
  await page.goto(url, { timeout: 0, waitUntil: 'networkidle' });
}