const request = require('supertest');
const app = 'https://servicodados.ibge.gov.br/api/v1/localidades';

describe('API IBGE de Localidades', () => {

  it('Deve retornar dados do distrito corretos', async () => {
    const response = await request(app).get('/distritos/520005005');
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe('Abadia de Goiás');
  }); 

  it("Deve retornar do endpoint o distrito correto por microrregião", async () =>{
    const response =  await request(api).get("/mesorregioes/1101");
   expect(response.body.microrregiao.nome).toBe("Rondônia")
})


it("Deve retornar do endpoint a sigla correta", async () =>{
  const response =  await request(api).get("/estados/24");
 expect(response.body.microrregiao.sigla).toBe("RN")
})

it('Deve retornar status do erro correto ', async () => {
  const response = await request(app).get('/mesorregioes/central/municipios');
  expect(response.status).toBe(500);
});


 
});