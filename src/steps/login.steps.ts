import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';

//import { expect } from '@playwright/test';
Given('the user is in the log in page', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto('https://stage.connectamericas.com/');
  await page
    .locator(
      'text=Search Why ConnectAmericas? Features Purchasing Announcements Connected companie >> #loginBtn',
    )
    .click();
});
When(
  'the user enters the username {string}',
  async function (this: ICustomWorld, username: string) {
    const page = this.page!;

    // eslint-disable-next-line no-constant-condition
    if (username === 'correct') {
      username = 'juanba91@hotmail.com';
    }

    await page.frameLocator('#login-iframe').locator('input[name="username"]').fill(`${username}`);
  },
);

When('the user enters a password {string}', async function (this: ICustomWorld, password: string) {
  const page = this.page!;
  // eslint-disable-next-line no-constant-condition
  if (password === 'correct') {
    password = 'qwe123';
  }

  await page.frameLocator('#login-iframe').locator('input[name="password"]').fill(`${password}`);

  await page.frameLocator('#login-iframe').locator('input[name="password"]').press('Enter');
});

Then('the user login status is {string}', async function (this: ICustomWorld, status: string) {
  const page = this.page!;
  // eslint-disable-next-line no-console
  console.log('login status: ' + status);
  await page.waitForTimeout(5000);
  const result = page.url();
  // eslint-disable-next-line no-console
  console.log('este es el resultado de la url ' + result);
  if (result.includes('dashboard')) {
    // eslint-disable-next-line no-console
    console.log('todo ok');
  } else {
    // eslint-disable-next-line no-console
    console.log('todo maaaal');
  }
});
