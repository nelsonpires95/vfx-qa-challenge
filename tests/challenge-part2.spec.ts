import { test, expect } from '@playwright/test';

test('google search for VFX Financial', async ({ page }) => {  
  // Go to www.google.com
  await page.goto('https://www.google.com');
  
  // Accept the Google page cookies
  await page.click('#L2AGLb');

  // Search for ‘VFX Financial’
  const searchBoxSelector = 'textarea[name=q]';
  await page.click(searchBoxSelector);
  await page.fill(searchBoxSelector, 'VFX Financial');
  await page.press(searchBoxSelector, 'Enter');

  // Wait for the search results page to load
  await page.waitForLoadState();

  // Check that the title of the business is ‘VFX Financial Plc’
  const title = await page.textContent('h2[data-dtype=d3ifr]');
  expect(title).toBe('VFX Financial Plc');
});
