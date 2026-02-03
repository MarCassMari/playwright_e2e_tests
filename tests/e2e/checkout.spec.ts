import { test, expect } from '@playwright/test';
import { CartFlows } from '../../fluxos/cartilhaFluxos';
import { CheckoutPage } from '../../pages/checkoutPage';

test('Deve validar valor total com kit de 3 itens', async ({ page }) => {
  const cartFlow = new CartFlows(page);
  const checkout = new CheckoutPage(page);

  await cartFlow.adicionarKitBasicoAoCarrinho();

  await page.locator('[data-test="checkout"]').click();
  await checkout.preencherDadosEContinuar('Mariana', 'Machado', '30000-000');

  await expect(checkout.subtotalLabel).toContainText('55.97');
});
