import { Page } from '@playwright/test';
import { ItensPage } from '../pages/ItensPage';

export class CartFlows {
  readonly page: Page;
  readonly ItensPage: ItensPage;

  constructor(page: Page) {
    this.page = page;
    this.ItensPage = new ItensPage(page);
  }

  async adicionarKitBasicoAoCarrinho() {
    await this.ItensPage.backpackAddToCartBtn.click();
    await this.ItensPage.bikeLightAddToCartBtn.click();
    await this.ItensPage.boltTshirtAddToCartBtn.click();
    await this.ItensPage.cartLink.click();
  }
}
