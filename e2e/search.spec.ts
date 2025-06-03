import { test, expect } from "@playwright/test";

test("search for movies", async ({ page }) => {
  await page.goto("/");

  const searchInput = page.locator('input[placeholder="Type to search..."]');
  await searchInput.fill("kiler");

  await expect(page.getByText("Killer", { exact: true })).toBeVisible();
  await expect(
    page.getByText("Ninja Dojo and the Kiler of Masters", { exact: true })
  ).toBeVisible();
});
