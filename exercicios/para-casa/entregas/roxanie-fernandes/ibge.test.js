const request = require('supertest');
const api = "https://servicodados.ibge.gov.br/api/v1/localidades" 

describe('Testar endpoint da API IBGE', () => {
    test('deve retornar um Distrito sem problemas', async() => {
        const response = await request(api).get('/mesorregioes/1101');
        expect (response.body.nome).toBe("Madeira-Guaporé")
        expect(response.status).toBe(200)
    })
})
