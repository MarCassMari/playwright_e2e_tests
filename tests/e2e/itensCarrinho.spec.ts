import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ItensPage } from '../../pages/ItensPage';

test.describe('Cenários de adicionar itens no Carrinho', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.acessarPagina();
    await loginPage.realizarLogin('standard_user', 'secret_sauce');
  });

  test('Deve adicionar a mochila ao carrinho com sucesso', async ({ page }) => {
    const item = new ItensPage(page);

    await item.adicionarBackpackAoCarrinho();

    await expect(item.cartBadge).toHaveText('3');
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
  });
});
