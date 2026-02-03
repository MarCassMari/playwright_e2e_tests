import { Page, Locator } from '@playwright/test';

export class ItensPage {
  readonly page: Page;
  readonly backpackAddToCartBtn: Locator;
  readonly cartBadge: Locator;
  readonly bikeLightAddToCartBtn: Locator;
  readonly boltTshirtAddToCartBtn: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.backpackAddToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');

    this.bikeLightAddToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.boltTshirtAddToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async adicionarBackpackAoCarrinho() {
    await this.backpackAddToCartBtn.click();
    await this.bikeLightAddToCartBtn.click();
    await this.boltTshirtAddToCartBtn.click();
  }
}
