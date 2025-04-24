import { Page, test } from '@playwright/test';

/**
 * Captura una captura de pantalla y la adjunta al reporte de Playwright.
 * @param page - Página de Playwright donde se tomará la captura.
 * @param name - Nombre de la captura de pantalla en el reporte.
 */
export async function takeScreenshot(page: Page, name: string) {
    const screenshot = await page.screenshot({ fullPage: true });
    test.info().attach(name, {
        body: screenshot,
        contentType: 'image/png',
    });
}