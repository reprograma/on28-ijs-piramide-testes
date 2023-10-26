const request = require('supertest')
const app = "https://servicodados.ibge.gov.br/api/v1/localidades"

describe('Teste de endpoints da API do IBGE', () =>{
    it('Testa se o id retorna o nome do municipio de Porto Velho sem erros', async () =>{
        const response = await request(app).get('/municipios/1100205')
        expect(response.body.nome).toBe('Porto Velho')
        expect(response.status).toEqual(200)
    })

    it('Testa se o id retorna parte do nome do Estado de Rondônia', async () =>{
        const response = await request(app).get('/estados/11')
        expect(response.body.nome).toContain('Ro')
        
    })

    it('Testa de o id retorna o Objeto Estado de São Paulo', async () =>{
        const response = await request(app).get('/mesorregioes/3505')
        expect(response.body.UF).toEqual({
            "id": 35,
            "sigla": "SP",
            "nome": "São Paulo",
            "regiao": {
                "id": 3,
                "sigla": "SE",
                "nome": "Sudeste"
            }
        })
    })

    it('Testa se o id retorna parte do nome da mesorregião Leste de Rondônia', async () =>{
        const response = await request(app).get('/mesorregioes/1102')
        expect(response.body.nome).toContain("este")
    })
})