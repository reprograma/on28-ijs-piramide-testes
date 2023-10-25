const request = require("supertest");
const ibge = "https://servicodados.ibge.gov.br/api/v1/localidades";

describe("Testar endpoints da API Localidades do IBGE", () => {
  test("deve retornar o nome de uma cidade pelo ID", async () => {
    const response = await request(ibge).get("/regioes/3/municipios");
    expect(response.body[0].nome).toBe("Abadia dos Dourados");
    expect(response.status).toBe(200);
  });

  
  test("Deve retornar o número total de bairros do município de São Paulo", async () => {
    const response = await request(ibge).get("/municipios/3550308/distritos");
    console.log(response.body.length)
    expect(response.status).toBe(200);
    expect(response.body.length).toEqual(96);
  });

  test("Deve retornar dados de um município válido", async () => {
    const response = await request(ibge).get("/municipios/1100015");
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe("Alta Floresta D'Oeste");
  });

  test("Deve retornar quantidade de caracteres retornados da cidade buscada", async () => {
    const response = await request(ibge).get("/municipios/1100015");
    expect(response.status).toBe(200);
    expect(response.body.nome.length).toBe(21);
  });

  test("Deve retornar a Sigla do estado da mesorregiao buscada", async () => {
    const response = await request(ibge).get("/mesorregioes/3501/microrregioes");
    expect(response.status).toBe(200);
    expect(response.body[1].mesorregiao.UF.sigla).toBe("SP");;
  });

  test("deve retornar a mensagem de erro ao usar um caminho errado", async () => {
    const response = await request(ibge).get("/regioes-intermediarias/_3102");
    expect(response.body.message).toEqual("Internal server error");
    expect(response.status).toBe(500);
  });
});
