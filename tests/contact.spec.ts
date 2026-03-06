import { test, expect } from '@playwright/test';

test('homepage responds and shows header', async ({ page }) => {
  const response = await page.goto('/');
  expect(response && response.ok()).toBeTruthy();
  // basic smoke check: header or hero text exists
  const h1 = page.locator('h1, h2, [role="banner"]');
  await expect(h1.first()).toBeVisible();
});
