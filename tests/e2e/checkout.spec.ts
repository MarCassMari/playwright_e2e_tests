import { test, expect } from '@playwright/test';
import { CartFlows } from '../../fluxos/cartilhaFluxos';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Cenários de Checkout', () => {
  // Setup de Login obrigatório para acessar o inventário
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
});
