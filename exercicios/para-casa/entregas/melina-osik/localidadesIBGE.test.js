const request = require('supertest');
const api = "https://servicodados.ibge.gov.br/api/v1/localidades"

describe('endpoints de localidades da API IGBE', () => {
  test('deve retornar a quantidade de municípios por UF', async () => {
    const response = await request(api).get('/estados/32/distritos');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(278);
  });

  test('deve retornar dados dos estados por id', async () => {
    const response = await request(api).get('/estados/32');
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe('Espírito Santo');
    expect(response.body.sigla).toBe('ES');
  });

  test('deve retornar os dados da região pelo id', async () => {
    const response = await request(api).get('/regioes/3');
    expect(response.status).toBe(200);
    expect(response.body.nome).toMatch('Sudeste');
    expect(response.body.sigla).toMatch('SE');
  });

  test('deve retornar dados dos países por id', async () => {
    const response = await request(api).get('/paises/32');
    console.log(response)
    expect(response.status).toBe(200);
    expect(response.body[0].nome).toBe('Argentina');
  });

  test('deve retornar uma lista de países', async () => {
    const response = await request(api).get('/paises');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
})