const request = require("supertest");
const api = "https://servicodados.ibge.gov.br/api/v1/localidades"

// distritos -distritos por id -distritos por estados -distritos por região
// testar 4 endpoints

// Cenários tristes para teste: testar nome de estado qu enão existe, id que não tem, retornar status diferentes

describe("IBGE Endpoints", () => {

  test("Deve retornar status 200", async () => {
    const response = await request(api).get("/estados/35/distritos");
    expect(response.status).toBe(400);
  });

  test("Deve retornar status 404", async () => {
    const response = await request(api).get("/municipios/SP/3504107");
    expect(response.status).toBe(404);
  });

  test("Deve retornar o número total da microregião", async () => {
    const response = await request(api).get("/microrregioes/35061/distritos");
    console.log(response.body.length)
    expect(response.status).toBe(200);
    expect(response.body.length).toEqual(108);
  });

  test("Deve retornar dados de um município válido", async () => {
    const response = await request(api).get("/municipios/3550308");
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe('São Paulo');
  });
});