import { test, expect } from "@playwright/test";

test("add multiple movies to favorites and verify pagination", async ({
  page,
}) => {
  await page.goto("/");

  await page.locator('input[placeholder="Type to search..."]').fill("the");
  await page.waitForSelector('a[href^="/movie/"]');

  const movies = await page.locator('a[href^="/movie/"]').all();
  for (let i = 0; i < 20; i++) {
    await movies[i].locator("xpath=..").locator("button").first().click();
  }

  await page.locator('button:has-text("2")').first().click();
  await page.waitForSelector('a[href^="/movie/"]');
  await page
    .locator('a[href^="/movie/"]')
    .first()
    .locator("xpath=..")
    .locator("button")
    .first()
    .click();

  await page.goto("/favourites");
  await expect(page.locator('button:has-text("2")').first()).toBeVisible();
});
