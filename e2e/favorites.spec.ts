import { test, expect } from "@playwright/test";

test("add movie to favorites and verify on favorites page", async ({
  page,
}) => {
  await page.goto("/");

  await page.locator('input[placeholder="Type to search..."]').fill("kiler");
  await page.waitForSelector('a[href^="/movie/"]');

  const movieCard = page
    .locator('a[href^="/movie/"]')
    .first()
    .locator("xpath=..");
  await movieCard.locator("button").first().click();

  await page.goto("/favourites");
  await expect(movieCard).toBeVisible();
});
