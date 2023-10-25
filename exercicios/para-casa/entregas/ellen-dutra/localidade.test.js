const request = require('supertest');
const app = 'https://servicodados.ibge.gov.br/api/v1/localidades';

describe('API de Localidades (IBGE) Endpoints', () => {
  it('deve retornar dados dos distritos sem problemas', async () => {
    const response = await request(app).get('/distritos');
    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('municipio');
    expect(response.body.map((item) => item.id)).toContain(230010105);
    expect(response.body[0].bairro).not.toBeDefined();
  }); 

  it('deve retornar dados dos estados sem problemas', async () => {
    const response = await request(app).get('/estados');
    expect(response.body[0].sigla).toEqual('RO');
    expect(response.body[26].id).toBe(53);
    expect(response.body[3]).not.toHaveProperty('nome', 'São Paulo');
  });

  it('deve retornar dados do estado de São Paulo sem problemas', async () => {
    const response = await request(app).get('/estados/35');
    expect(response.body.regiao.nome).toEqual('Sudeste');
    expect(response.body.id).toBeGreaterThanOrEqual(30);
    expect(response.body.regiao.sigla).not.toEqual('RJ');
  });

  it('deve retornar dados das regiões sem problemas', async () => {
    const response = await request(app).get('/regioes');
    expect(response.body).toEqual(
      expect.arrayContaining([
        { id: 1, sigla: 'N', nome: 'Norte' },
        { id: 2, sigla: 'NE', nome: 'Nordeste' },
        { id: 3, sigla: 'SE', nome: 'Sudeste' },
        { id: 4, sigla: 'S', nome: 'Sul' },
        { id: 5, sigla: 'CO', nome: 'Centro-Oeste' },
      ]),
    );
    expect(response.body).toHaveLength(5);
    expect(response.body.map((regiao) => regiao.sigla)).toEqual(['N', 'NE', 'SE', 'S', 'CO']);
    expect(response.body[1].id).not.toEqual(1);
  });
});
