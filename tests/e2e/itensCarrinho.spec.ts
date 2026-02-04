import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ItensPage } from '../../pages/ItensPage';

test.describe('Cenários de adicionar e remover itens no Carrinho', () => {
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

  test('Remover item do carrinho e validar a exclusão', async ({ page }) => {
    const item = new ItensPage(page);

    await item.adicionarBackpackAoCarrinho();
    await item.cartLink.click();

    await expect(item.backpackInCart).toBeVisible();

    await item.removeBackPack();

    await expect(item.backpackInCart).not.toBeAttached();

    await expect(item.cartBadge).toHaveText('2');
  });
});
