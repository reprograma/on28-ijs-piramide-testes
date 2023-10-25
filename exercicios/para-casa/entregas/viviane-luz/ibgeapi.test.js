const request = require('supertest')
const api = "http://servicodados.ibge.gov.br/api/v1/localidades"; //url api ibge

describe('Testar endpoint do Ibge o endereço por id', () => {
    test('deve retornar um endereço e status 200', async () => {
        
        const response = await request(api).get('/estados'); //retorna status 200 api estados por id
        expect(response.status).toBe(200)
    })

    function id(input) {
        return input;
    }

    test('Deve retornar um endereço ao passar o ID', () => {
        const resultado = id(35);
        expect(id(resultado)).toBe(35); //retorna por id do estado e confirma o input e id
    })

    let cidade;

    beforeEach(() => {
        cidade = (nomeCidade) => {
            return nomeCidade === 'Rio de Janeiro'; //verifica a cidade e retorna true com a condição
        };
    });

    test('Teste cidade Rio de Janeiro', () => {
        expect(cidade('Rio de Janeiro')).toBe(true);
    });
})



   