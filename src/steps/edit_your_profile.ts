import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
Given('the user edit the first name', async function (this: ICustomWorld) {
  const page = this.page!;
  let name = 'Juan' + Math.random();
  
  await page.locator('text=First Name Last Name >> input[type="text"]').first().fill(name);
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

Given ('the user edit the last name', async function (this: ICustomWorld) {
  const page = this.page!;
  let lastName = 'Serrano' + Math.random();
  await page.locator('text=First Name Last Name >> input[type="text"]').nth(1).fill(lastName);
});

Given ('the user edit the country', async function (this: ICustomWorld) {
  const page = this.page!;
  
  await page.locator('#first-block > form > div > div.col-9 > div:nth-child(2) > div:nth-child(1) > div > div > a > span.select2-arrow.ui-select-toggle').click();

  const maxLength = await (await page.$$('#ui-select-choices-0 > li')).length;

  console.log(maxLength);

  const rand =   Math.floor(Math.random() * (maxLength) + 1);


  await page.locator(`#ui-select-choices-row-0-${rand}`).click();
});

Given ('the user edit the gender', async function (this: ICustomWorld) {
  const page = this.page!;

  const rand =   Math.floor(Math.random() * (3));

  await page.locator('#first-block > form > div > div.col-9 > div:nth-child(2) > div.col-6.col-b-7.clearfix-b > div > div > a > span.select2-arrow.ui-select-toggle').click();

  await page.locator(`#ui-select-choices-row-1-${rand}`).click();
});


