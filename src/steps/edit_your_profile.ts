import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
Given('the user edit the first name', async function (this: ICustomWorld) {
  const page = this.page!;

  await page.locator('text=First Name Last Name >> input[type="text"]').first().fill('Juan');
});

When('the user confirms the edition', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator('text=Save').click();
});

Then('the changes should be saved', async function (this: ICustomWorld) {
  const page = this.page!;

  try {
    await expect(page.locator('.text')).toContainText('has been saved');
  } catch (error) {
    throw new Error(`Custom errror message\n${error}`);
  }
});
