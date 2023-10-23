const request = require('supertest');
const api = "https://servicodados.ibge.gov.br/api/v1/localidades" 

describe ('Testar endpoints da API de localidades do IBGE', () => {
  test('deve retornar informações de um estado pelo código sem problemas', async () => {
    const estadoCodigo = 23;
    const response = await request(api).get(`/estados/${estadoCodigo}`);
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe('Ceará');
    expect(response.body.sigla).toBe('CE');
  })

  test('Deve obter informações de uma região pelo código', async () => {
    const regiaoCodigo = 2;
    const response = await request(api).get(`/regioes/${regiaoCodigo}`);
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe('Nordeste');
  })

  test('Deve obter a lista de municípios de um estado', async () => {
    const estadoCodigo = 23;
    const response = await request(api).get(`/estados/${estadoCodigo}/municipios`);
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  })

  test('Deve obter a lista de regiões geográficas imediatas do Brasil', async () => {
    const response = await request(api).get(`/regioes-imediatas`);
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  })
    
})


