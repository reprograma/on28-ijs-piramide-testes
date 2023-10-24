// - Exercício 1 - API de localidades (IBGE): 
// Teste pelo menos 4 endpoints da [API de localidades do IBGE](https://servicodados.ibge.gov.br/api/docs/localidades), cobrindo caminhos felizes e infelizes. Exercite sua autonomia no aprendizado e fique a vontade para usar diferentes matchers do jest e acessar diferentes respostas com o supertest.

const request = require('supertest');
const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/'

describe('API IBGE', ()=>{
    test('deveria retornar uma região de acordo com o id', async ()=>{
        const response1 = await request(url).get('regioes/1')
        const response2 = await request(url).get('regioes/2')
        const response3 = await request(url).get('regioes/3')
        const response4 = await request(url).get('regioes/4')
        const response5 = await request(url).get('regioes/5')
    
        expect(response1.body.nome).toBe('Norte')
        expect(response1.body.sigla).toBe('N')
        expect(response2.body.nome).toBe('Nordeste')
        expect(response2.body.sigla).toBe('NE')
        expect(response3.body.nome).toBe('Sudeste')
        expect(response3.body.sigla).toBe('SE')
        expect(response4.body.nome).toBe('Sul')
        expect(response4.body.sigla).toBe('S')
        expect(response5.body.nome).toBe('Centro-Oeste')
        expect(response5.body.sigla).toBe('CO')
    });

    test('deveria retorna um estado de acordo com o id', ()=>{
        const response = request(url).get('estados/33')
        const responseBahia = request(url).get('estados/29')

        expect(response.body.nome).toEqual('Rio de Janeiro')
        expect(response.nome).toBeTruthy()
        // expect(responseBahia.body.nome).toBe('Bahia')
    });
})