import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

import usuarios from '../../data/users.json';

test.describe('Cenários de Login - Swag Labs', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.acessarPagina();
  });

  for (const usuario of usuarios.valid_users) {
    test(`Deve realizar login com sucesso para o perfil: ${usuario}`, async ({ page }) => {
      await loginPage.realizarLogin(usuario, usuarios.default_password);
      await expect(page).toHaveURL(/.*inventory.html/);
    });
  }

  test('Deve exibir erro para usuário bloqueado', async () => {
    await loginPage.realizarLogin(usuarios.locked_user, usuarios.default_password);
    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out.');
  });
});
