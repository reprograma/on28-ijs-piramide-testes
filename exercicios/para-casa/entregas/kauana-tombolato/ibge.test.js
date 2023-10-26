const request = require('supertest');
const app = "https://servicodados.ibge.gov.br/api/v1/localidades" 

describe('IBGE Endpoints', () => {
  it('should fetch a region with id 3', async () => {
    const response = await request(app).get('/regioes/3');
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe('Sudeste');
  });

  it('should fetch a state with id 14', async () => {
    const response = await request(app).get('/estados/14');
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe('Roraima');
  });

  it('should not found a country with id 1', async () => {
    const response = await request(app).get('/municipios/1');
    expect(response.body.nome).toBeFalsy();
  });

  it('should check if was defined an intermedia region with id 3501', async () => {
    const response = await request(app).get('/regioes-intermediarias/3501');
    expect(response.status).toBe(200);
    expect(response.body.nome).toBeDefined();
  });
})