import { test } from '@playwright/test';
import { loginPage } from './utils/loginPage';
import { takeScreenshot } from './utils/screenshotHelper';
import * as credentialsLog2 from './data/credentials1.json';

test.describe.configure({ mode: 'parallel' });

test.beforeEach(async ({ page }) => {
    await page.goto('/mio-rd/adminConsole/login');
    await page.waitForTimeout(2000);
});

test.afterEach(async ({ page }) => {
    await page.close();
});

test('Login with valid credentials', async ({ page }) => {
    const login = new loginPage(page);
    await login.loginWhitCredentials(credentialsLog2.username, credentialsLog2.password);
    await takeScreenshot(page, 'Login Success');
});

test('Login with invalid credentials', async ({ page }) => {
    const login = new loginPage(page);
    await login.loginWhitCredentials(credentialsLog2.username + '1234', credentialsLog2.password + '1234');
    await takeScreenshot(page, 'Login Failed, wrong credentials');
});

test('Login with empty credentials', async ({ page }) => {
    const login = new loginPage(page);
    await login.loginWhitCredentials('', '');
    await takeScreenshot(page, 'Login Failed, empty credentials');
});