import { ICustomWorld } from '../support/custom-world';
import { When , Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When('the user edit the first name', async function (this: ICustomWorld) {
  const page = this.page!;
  let name = 'Juan' + Math.random();
  await page.locator('text=First Name Last Name >> input[type="text"]').first().fill(name);
});

When('the user saves the changes', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator('text=Save').click();
});

Then ('the changes should be saved', async function (this: ICustomWorld) {
  const page = this.page!;
  try {
    await expect(page.locator('.text')).toContainText('has been saved');
  } catch (error) {
    throw new Error(`Custom errror message\n${error}`);
  }
});

When ('the user edit the last name', async function (this: ICustomWorld) {
  const page = this.page!;
  let lastName = 'Serrano' + Math.random();
  await page.locator('text=First Name Last Name >> input[type="text"]').nth(1).fill(lastName);
});

When ('the user edit the country', async function (this: ICustomWorld) {
  const page = this.page!;  
  await page.locator('#first-block > form > div > div.col-9 > div:nth-child(2) > div:nth-child(1) > div > div > a > span.select2-arrow.ui-select-toggle').click();
  const maxLength = (await page.$$('#ui-select-choices-0 > li')).length;
  const rand =   Math.floor(Math.random() * (maxLength));
  await page.locator(`#ui-select-choices-row-0-${rand}`).click();
});

When ('the user edit the gender', async function (this: ICustomWorld) {
  const page = this.page!;
  
  let currentText = await (page.innerText('#first-block > form > div > div.col-9 > div:nth-child(2) > div.col-6.col-b-7.clearfix-b > div > div > a > span:nth-child(2) > span'));
  
  console.log(currentText);
  
  await page.locator('#first-block > form > div > div.col-9 > div:nth-child(2) > div.col-6.col-b-7.clearfix-b > div > div > a > span.select2-arrow.ui-select-toggle').click();

  const maxLength = (await page.$$('#ui-select-choices-1 > li')).length;
    
  let rand = Math.floor(Math.random() * (maxLength));
  
  console.log(rand);
  const randPositionText = await page.innerText(`#ui-select-choices-row-1-${rand}`);
  
  console.log("ASD " + currentText);

  console.log("ASDASDA " + randPositionText);


  console.log("is true??: " + (currentText === randPositionText))

  if (currentText === randPositionText ) {
    rand = Math.floor(Math.random() * (maxLength));  
} 

await page.locator(`#ui-select-choices-row-1-${rand}`).click()
});

