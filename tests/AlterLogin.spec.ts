import { test } from '@playwright/test';
import { loginPage } from './utils/loginPage';
import { takeScreenshot } from './utils/screenshotHelper';
import credentialsData from './data/credentials2.json';

credentialsData.forEach((user) => {
    test(`Test de ${user.name}`, async ({ page }) => {
        const login = new loginPage(page);    
        await page.goto(`${user.path}`);
        await login.loginWhitCredentials(user.username, user.password);
        await page.screenshot({ path: 'captcha-error.png', fullPage: true }); // Captura de pantalla del error de captcha
        await takeScreenshot(page, `Screenshot de ${user.screenshot}`);
        await page.close();
    });
});