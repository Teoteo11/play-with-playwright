import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(`http://localhost:4200/`);
});

test.describe('Load Application', () => {
  test('Application Load Successfully', async ({ page }) => {
    await expect(page.locator('app-root')).toBeAttached();
  });

  test('Router Outlet Tag in HTML', async ({ page }) => {
    const htmlContent = await page.content();
    expect(htmlContent).toContain('<router-outlet');
  });
}); 