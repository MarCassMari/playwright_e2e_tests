import { test, expect } from '@playwright/test';
import { CartFlows } from '../../fluxos/cartilhaFluxos';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { LoginPage } from '../../pages/LoginPage';
import { ItensPage } from '../../pages/ItensPage';

test.describe('Cenários de Checkout', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.acessarPagina();
    await loginPage.realizarLogin('standard_user', 'secret_sauce');
  });

  test('Deve validar valor total com kit de 3 itens', async ({ page }) => {
    const cartFlow = new CartFlows(page);
    const checkout = new CheckoutPage(page);

    await cartFlow.adicionarKitBasicoAoCarrinho();

    await page.locator('[data-test="checkout"]').click();
    await checkout.preencherDadosEContinuar('Marcus', 'Machado', '30000-000');

    await expect(checkout.subtotalLabel).toContainText('55.97');
  });

  test('Fluxo completo do checkout com sucesso após adicionar itens', async ({ page }) => {
    const itens = new ItensPage(page);
    const checkout = new CheckoutPage(page);

    await itens.adicionarBackpackAoCarrinho();
    await itens.cartLink.click();
    await page.locator('[data-test="checkout"]').click();

    await checkout.preencherDadosEContinuar('Marcus', 'Machado', '31030080');

    await expect(checkout.subtotalLabel).toContainText('Item total: $');
    await expect(
      page.locator('.inventory_item_name').filter({ hasText: 'Sauce Labs Backpack' })
    ).toBeVisible();

    await checkout.finalizarCompra();
    await expect(checkout.successHeader).toHaveText('Thank you for your order!');
  });
});
