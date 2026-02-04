import { test, expect } from '@playwright/test';
import { userSchema, userListSchema } from './schemas/schemas';

test('Buscar Lista de Usuários com Auth via .env', async ({ request }) => {
  const response = await request.get(`${process.env.GOREST_BASE_URL}/users`, {
    headers: {
      Authorization: `Bearer ${process.env.GOREST_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  const users = userListSchema.parse(responseBody);

  expect(users.length).toBeGreaterThan(0);
});

test('POST - Deve criar um usuário e validar a integridade do payload', async ({ request }) => {
  const response = await request.post(`${process.env.GOREST_BASE_URL}/users`, {
    headers: { Authorization: `Bearer ${process.env.GOREST_TOKEN}` },
    data: {
      name: 'Marcus Machado',
      email: `marcus.${Date.now()}@onfly.com.br`,
      gender: 'male',
      status: 'active',
    },
  });

  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  const userValidado = userSchema.parse(responseBody);

  expect(userValidado.name).toBe('Marcus Machado');
  expect(userValidado.status).toBe('active');
});
