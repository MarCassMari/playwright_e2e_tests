import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Acesso Inicial', () => {
  test('Deve carregar a página de login com sucesso', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await expect(loginPage.loginButton).toBeVisible();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
});
