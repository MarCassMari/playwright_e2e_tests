import { Page } from '@playwright/test';
import { InventoryPage } from '../pages/ItensPage';

export class CartFlows {
  readonly page: Page;
  readonly inventoryPage: InventoryPage;

  constructor(page: Page) {
    this.page = page;
    this.inventoryPage = new InventoryPage(page);
  }

  async adicionarKitBasicoAoCarrinho() {
    await this.inventoryPage.backpackAddToCartBtn.click();
    await this.inventoryPage.bikeLightAddToCartBtn.click();
    await this.inventoryPage.boltTshirtAddToCartBtn.click();
    await this.inventoryPage.cartLink.click();
  }
}
