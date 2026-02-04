import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly zipCodeInput: Locator;
  readonly continueBtn: Locator;
  readonly subtotalLabel: Locator;
  readonly finishBtn: Locator;
  readonly successHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.zipCodeInput = page.locator('[data-test="postalCode"]');
    this.continueBtn = page.locator('[data-test="continue"]');
    this.subtotalLabel = page.locator('[data-test="subtotal-label"]');
    this.finishBtn = page.locator('[data-test="finish"]');
    this.successHeader = page.locator('.complete-header');
  }

  async preencherDadosEContinuar(first: string, last: string, zip: string) {
    await this.firstNameInput.fill(first);
    await this.lastNameInput.fill(last);
    await this.zipCodeInput.fill(zip);
    await this.continueBtn.click();
  }

  async finalizarCompra() {
    await this.finishBtn.click();
  }
}
