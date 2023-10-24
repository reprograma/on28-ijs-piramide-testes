const request = require("supertest");
const api = "https://servicodados.ibge.gov.br/api/v1/localidades";

describe("Testar endpoints da API Localidades do IBGE", () => {
  test("deve retornar o nome do município pelo ID", async () => {
    const response = await request(api).get("/distritos/314730305");
    expect(response.body[0].nome).toBe("Paraisópolis");
    expect(response.status).toBe(200);
  });

  test("deve retornar a sigla da mesorregião pelo ID", async () => {
    const response = await request(api).get("/mesorregioes/3303/microrregioes");
    expect(response.body[1].mesorregiao.UF.sigla).toMatch(/^[A-Z]*J[A-Z]*$/);
    expect(response.status).toBe(200);
  });

  test("deve retornar se o array de municípios de uma região metropolitana contém uma cidade específica", async () => {
    const response = await request(api).get(
      "/estados/29/regioes-metropolitanas"
    );
    expect(
      response.body[2].municipios.map((municipio) => municipio.nome)
    ).toContain("Itaparica");
    expect(response.status).toBe(200);
  });

  test("deve retornar a quantidade de caracteres do nome da microrregião do município", async () => {
    const response = await request(api).get(
      "/regioes-imediatas/310037/distritos"
    );
    expect(response.body[4].municipio.microrregiao.nome).toHaveLength(6);
    expect(response.status).toBe(200);
  });

  test("deve o status de retorno quando é passado um caminho inexistente", async () => {
    const response = await request(api).get("/estados/XX/subsdistritos");
    expect(response.status).toBeGreaterThanOrEqual(400);
  });

  test("deve retornar undefined para um parâmetro que não existe", async () => {
    const response = await request(api).get(
      "/regioes-integradas-de-desenvolvimento?municipio=2611101"
    );
    expect(response.body[0].estado).toBeUndefined();
    expect(response.status).toBe(200);
  });

  test("deve retornar a mensagem de erro ao usar um caminho errado", async () => {
    const response = await request(api).get("/regioes-intermediarias/1102,");
    expect(response.body.message).toEqual("Internal server error");
    expect(response.status).toBe(500);
  });
});
