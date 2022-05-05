import { ICustomWorld } from '../support/custom-world';
import { Given} from '@cucumber/cucumber';
import { login } from '../utils/login';
import { goToProfile } from '../utils/elements';

/* eslint-disable import/first */
require('dotenv').config();

Given('the user is logged in', async function (this: ICustomWorld) {
  const page = this.page!;
  const userName = process.env.EMAIL || '';
  const password = process.env.PASSWORD || '';
  const url = process.env.URL || '';  

  await login(page, url, userName, password);
  
});

Given('the user is in the user profile section tab', async function (this: ICustomWorld) {
  const page = this.page!;
  await goToProfile(page);

  
});
