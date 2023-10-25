const request = require("supertest");
const app = "https://servicodados.ibge.gov.br/api/v1/localidades";

describe("IBGE Endpoints", () => {
  it("Deve buscar dados de um distrito a partir de seu ID", async () => {
    const response = await request(app).get("/distritos/310020305");
    expect(response.status).toBe(200);
    expect(response.body[0].nome).toBeDefined();
  });

  it("Deve buscar dados de municípos por UF", async () => {
    const response = await request(app).get("/estados/33/municipios");
    expect(response.status).toBe(200);
    expect(response.body[0].nome).toBe("Angra dos Reis");
  });

  it("Deve buscar o total de microregiões", async () => {
    const response = await request(app).get("/microrregioes/35061/distritos");
    expect(response.status).toBe(200);
    expect(response.body.length).toEqual(108);
  });

  it("Deve retornar status 404", async () => {
    const response = await request(app).get("/municipios/RJ/3504198");
    expect(response.status).toBe(404);
  });
});
