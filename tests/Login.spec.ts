import { test } from '@playwright/test';
import { loginPage } from './utils/loginPage';
import { takeScreenshot } from './utils/screenshotHelper';
import * as credentialsLog1 from './data/credentials1.json';

test('Successfull Login', async ({ page }) => {

    await page.goto('/mio-rd/adminConsole/login');
    await page.waitForTimeout(2000);

    const login = new loginPage(page);
    await login.loginWhitCredentials(credentialsLog1.username, credentialsLog1.password);

    await login.checkSuccessFullLogin();
    await takeScreenshot(page, 'Login');

    await login.Uplogin();
    await page.waitForTimeout(2000);

    await login.checkSuccessFullClosing();
    await page.waitForTimeout(2000);
    await takeScreenshot(page, 'User logout');
    await page.close();
});

test('Failed Login', async ({ page }) => {
    await page.goto('/mio-rd/adminConsole/login');
    await page.waitForTimeout(2000);

    const login = new loginPage(page);
    await login.loginWhitCredentials(credentialsLog1.username, credentialsLog1.password + '1234');

    await takeScreenshot(page, 'Login Failed');
    await page.close();
});
