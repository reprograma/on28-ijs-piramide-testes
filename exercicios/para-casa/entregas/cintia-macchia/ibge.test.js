const request = require("supertest");
const api = "https://servicodados.ibge.gov.br/api/v1/localidades";

describe("Testar os endpoints da API de localidades do IBGE", () => {
  test("Deve retornar o nome da cidade por ID", async () => {
    const response = await request(api).get("/regioes-imediatas/350040");
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe("Piracicaba");
  });

  test("Deve retornar o nome do estado por ID", async () => {
    const response = await request(api).get("/estados/35");
    expect(response.status).toBe(200);
    expect(response.body.nome).toEqual("São Paulo");
    expect(response.body).toEqual({
      id: 35,
     sigla: "SP",
      nome: "São Paulo",
      regiao: {
        id: 3,
        sigla: "SE",
        nome: "Sudeste"
      }
    })
  });

  test("Deve retornar a sigla e o nome de uma região por ID", async () => {
    const response = await request(api).get("/regioes/4");
    expect(response.status).toBe(200);
    expect(response.body.sigla).toContain("S");
    expect(response.body.nome).toBe("Sul")
  });


  test("Deve retornar uma mesorregião por ID", async ()=>{
    const response = await request(api).get("/mesorregioes/1102")
    expect(response.status).toBe(200)
    expect(response.body.nome).toContain("Leste Rondoniense")
    expect(response.body).toMatchObject({
      "id": 1102,
      "nome": "Leste Rondoniense",
      "UF": {
        "id": 11,
        "sigla": "RO",
        "nome": "Rondônia",
        "regiao": {
          "id": 1,
          "sigla": "N",
          "nome": "Norte"
        }
      }
    })
  })

test("Deve retornar informações sobre o municipio pelo nome", async () =>{
  const response = await request(api).get("/municipios/gramado")
  expect(response.status).toBe(200)
  expect(response.body.nome).toContain("Gramado")
  expect(response.body.id).toEqual(4309100)
})

  test("Deve retornar erro quando url estiver errada", async () => {
    const response = await request(api).get(
      "estados/33/mesorregiao"
    );
    expect(response.status).toBe(404);
  });

 
});