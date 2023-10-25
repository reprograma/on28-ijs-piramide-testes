const request = require('supertest');
const api = "https://servicodados.ibge.gov.br/api/v1/localidades/";

describe("Testar endpoint Distritos da API do IBGE", () => {
  it("deve retornar informações de DISTRITOS por ID de Angra dos Reis sem problemas", async () => {
    const response = await request(api).get("distritos/330010005");
    expect(response.body[0].nome).toBe("Angra dos Reis");
    expect(response.body[0].id).toBeTruthy();
  });
});

describe("Testar endpoint Mesorregioes da API do IBGE", () => {
  it("deve retornar informações de MESORREGIOES por UF do Rio de Janeiro sem problemas", async () => {
    const response = await request(api).get("/estados/33/mesorregioes");
    expect(response.body[0].UF).toBeDefined();
    expect(response.body[0].UF.id).toBeLessThan(35);
  });
});

describe("Testar endpoint Países da API do IBGE", () => {
  it("deve retornar informações de PAISES sem problemas", async () => {
    const response = await request(api).get("/paises");
    expect(response.body[0].nome).toBe("Afeganistão");
    expect(response.body[0]["regiao-intermediaria"]).toBeFalsy();
  })
})

describe("Testar endpoint Regioes Imediatas da API do IBGE", () => {
  it("deve retornar informações de REGIOESIMEDIATAS por região, neste caso a Norte, sem problemas", async () => {
    const response = await request(api).get("/regioes/1/regioes-imediatas");
    expect(response.body[0].id).toBe(110001);
    expect(response.body[0].nome).toStrictEqual("Porto Velho");
  });
})