import { test, expect } from '@playwright/test';

test('Guest user completes checkout with Cash on Delivery', async ({ page }) => {

  // Open store
  await page.goto('https://www.shopware6-demo.development-s25.com/');

  // Verify homepage loaded
  await expect(page).toHaveURL(/development-s25/);

  // Open category and product
  await page.getByRole('link', { name: 'Women' }).click();
  await page.getByRole('link', { name: 'Demo Produkt' }).click();

  // Add product to cart
  await page.getByRole('button', { name: 'In den Warenkorb' }).click();

  // Cart should appear
  await expect(
      page.getByRole('dialog')
  ).toBeVisible();

  // Checkout
  await page.getByRole('link', { name: 'Zur Kasse' }).click();

  // Checkout page visible
  await expect(page).toHaveURL(/checkout/);

  // Fill guest information
  await page.getByRole('textbox', { name: 'Vorname' })
      .fill('Albion');

  await page.getByRole('textbox', { name: 'Nachname' })
      .fill('Haj');

  await page.getByRole('textbox', { name: 'E-Mail-Adresse' })
      .fill('albiontest123@gmail.com');

  await page.getByRole('textbox', {
      name:'Straße und Hausnummer'
  }).fill('Istoq Street');

  await page.getByRole('textbox', { name:'PLZ' })
      .fill('15000');

  await page.getByRole('textbox', { name:'Ort' })
      .fill('Istog');

  // Continue
  await page.getByRole('button', {
      name:'Weiter'
  }).click();

  // Accept terms
await page.getByRole('checkbox', {
   name: 'Ich habe die AGB gelesen und'
}).check();

// Place order
await page.getByRole('button', {
   name:'Zahlungspflichtig bestellen'
}).click();

  // Verify order confirmation
  await expect(
      page.getByText(/Vielen Dank|Thank you/i)
  ).toBeVisible();

});