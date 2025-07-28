import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(`http://localhost:4200/dashboard`);
});

test.describe('Navbar', () => {
  test('Title and logo are visible', async ({ page }) => {
    const logoAndTitle = page.getByTestId('logo-and-title');
    await expect(logoAndTitle).toBeVisible();
  });

  test('Tasks button is visible', async ({ page }) => {
    const tasksButton = page.getByRole('button', { name: 'Tasks' });
    await expect(tasksButton).toBeVisible();
  });

  test('Add task button is visible', async ({ page }) => {
    const addTaskButton = page.getByRole('button', { name: 'Add task' });
    await expect(addTaskButton).toBeVisible();
  });
});