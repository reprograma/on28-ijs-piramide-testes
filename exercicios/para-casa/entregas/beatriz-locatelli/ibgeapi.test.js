const request = require('supertest');
const app = "https://servicodados.ibge.gov.br/api/v1"

describe("IBGE endpoints", () => {
    it("Pega um distrito pelo id", async () => {
        const response = await request(app).get('/localidades/distritos/160030310');
        expect(response.status).toBe(200);
        expect(response.body[0].nome).toBe('Bailique');
        expect(response.body).toHaveLength(1);
    })
    it("Pega os dados referentes aos municípios da mesorregião pelo id", async () => {
        const response = await request(app).get('/localidades/mesorregioes/3502/municipios');
        expect(response.status).toBe(200);
        expect(response.body[2].nome).toBe('Barretos'); //3502 é a mesorregião Ribeirão Preto e o município 2 é Barretos
        expect(response.body[2]).toHaveProperty('microrregiao.mesorregiao');
    })
    it("Retornar array vazio caso o id do Estado seja inexistente", async () => {
        const response = await request(app).get('/localidades/estados/1000000');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    })
    it("Pegar região integrada de desenvolvimento que um determinado município pertence passando o id do município", async () => {
        const response = await request(app).get('/localidades/regioes-integradas-de-desenvolvimento?municipio=2609808');
        expect(response.status).toBe(200);
        expect(response.body[0].nome).toBe("Região Administrativa Integrada de Desenvolvimento do Polo Petrolina/PE e Juazeiro/BA");
        expect(response.body[0].id).toBe("03101");
    })
})


