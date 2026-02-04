import { test, expect } from '@playwright/test';
import { commentSchema, commentListSchema } from './schemas/commentsSchema';

test.describe('API GoRest - Comentários', () => {
  const baseUrl = process.env.GOREST_BASE_URL; //
  const headers = {
    Authorization: `Bearer ${process.env.GOREST_TOKEN}`, //
    'Content-Type': 'application/json',
  };

  test('GET - Cenário de sucesso - Deve validar o status code da resposta', async ({ request }) => {
    const response = await request.get(`${baseUrl}/comments`, { headers });
    console.log('Base URL carregada:', process.env.GOREST_BASE_URL ? 'Sim' : 'Não');
    console.log('Token carregado:', process.env.GOREST_TOKEN ? 'Sim' : 'Não');

    expect(response.status()).toBe(200);
  });

  test('POST - Cenário de erro - Deve retornar erro 422 ao tentar comentar em um post inexistente', async ({
    request,
  }) => {
    const invalidPostId = 0;
    const response = await request.post(`${baseUrl}/posts/${invalidPostId}/comments`, {
      headers: {
        Authorization: `Bearer ${process.env.GOREST_TOKEN}`, //
        'Content-Type': 'application/json',
      },
      data: {
        name: 'Usuário Teste',
        email: 'teste@erro.com',
        body: 'Tentativa de comentário em post inválido',
      },
    });

    expect(response.status()).toBe(422);

    const body = await response.json();

    expect(body[0]).toMatchObject({
      field: 'post',
      message: 'must exist',
    });
  });
});
