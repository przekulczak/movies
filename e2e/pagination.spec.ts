import { test, expect } from "@playwright/test";

test("search and verify pagination", async ({ page }) => {
  await page.goto("/");

  await page.locator('input[placeholder="Type to search..."]').fill("the");
  await page.waitForSelector('a[href^="/movie/"]');

  await page.waitForSelector('button:has-text("2")');
  const firstPageMovies = await page.locator('a[href^="/movie/"]').all();
  const firstPageFirstMovie = firstPageMovies[0];
  const firstPageTitle = await firstPageFirstMovie.getAttribute("href");

  await page.locator('button:has-text("2")').first().click();
  await page.waitForSelector('a[href^="/movie/"]');

  const secondPageMovies = await page.locator('a[href^="/movie/"]').all();
  const secondPageFirstMovie = secondPageMovies[0];
  const secondPageTitle = await secondPageFirstMovie.getAttribute("href");

  expect(firstPageTitle).not.toBe(secondPageTitle);
});
