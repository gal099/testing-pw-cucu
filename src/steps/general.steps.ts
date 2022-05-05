import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { login } from '../utils/login';

/* eslint-disable import/first */
require('dotenv').config();



Given('a user is in the log in page', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto('https://stage.connectamericas.com/');
  await page
    .locator(
      'text=Search Why ConnectAmericas? Features Purchasing Announcements Connected companie >> #loginBtn',
    )
    .click();
});
When(
  'a user enters the correct username and correct password',
  async function (this: ICustomWorld) {
    const page = this.page!;
    await page
      .frameLocator('#login-iframe')
      .locator('input[name="username"]')
      .fill('juanba91@hotmail.com');

    await page.frameLocator('#login-iframe').locator('input[name="password"]').fill('qwe123');

    await page.frameLocator('#login-iframe').locator('input[name="password"]').press('Enter');
  },
);
Then('a user is logged in to the system', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.waitForURL('https://stage.connectamericas.com/dashboard');
  try {
    expect(page.url()).toContain('dash');
  } catch (error) {
    throw new Error(`Custom errror message\n${error}`);
  }
});

Given('the user is logged in', async function (this: ICustomWorld) {
  const page = this.page!;
  const userName = process.env.EMAIL || '';
  const password = process.env.PASSWORD || '';
  const url = process.env.URL || '';  

  await login(page, url, userName, password);
  
});

Given('the user is in the user profile section tab', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator('#header-user-actions .name ').hover();
  await page.locator('.shared .edit >> nth=0').click();

  
});
