const request = require("supertest");
const api = "https://servicodados.ibge.gov.br/api/v1/localidades";

describe("Testar endpoint da API IBGE", () => {
  test("deve retornar uma Mesorregiao sem problemas", async () => {
    const response = await request(api).get("/mesorregioes/1101");
    expect(response.body.nome).toBe("Madeira-Guaporé");
    expect(response.status).toBe(200);
  });

  test("deve verificar se o objeto mesorregiao corresponde ao padrão", async () => {
    const response = await request(api).get(
      "/regioes-intermediarias/2602"
    );
    const mesorregiaoEsperada = {
      id: 2602,
      nome: "Caruaru",
      UF: {
        id: 26,
        sigla: "PE",
        nome: "Pernambuco",
        regiao: {
          id: 2,
          sigla: "NE",
          nome: "Nordeste",
        },
      },
    };

    expect(response.body).toMatchObject(mesorregiaoEsperada);
    expect(response.status).toBe(200);
  });
});
