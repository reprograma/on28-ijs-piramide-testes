const request = require('supertest');
const api = "https://servicodados.ibge.gov.br/api/v1/localidades"; 


describe('Testar 4 endpoints da API de Localidades do IBGE.', () => {
    test('Deve retornar dados de um país pela posição do array.', async () => {
        const response = await request(api).get('/paises?orderBy=nome');
        expect(response.body[528].nome).toMatch("Holanda");
        expect(response.status).toBe(200);
    });

    test('Deve retornar dados de um estado pela sua sigla "UF".', async () => {
        const response = await request(api).get('/estados/29');
        expect(response.body).toEqual(
            {
                "id": 29,
                "sigla": "BA",
                "nome": "Bahia",
                "regiao": {
                    "id": 2,
                    "sigla": "NE",
                    "nome": "Nordeste"
                }
            }
        );
        expect(response.status).toBe(200);
    });

    test('Deve retornar dados de um distrito pelo ID.', async () => {
        const response = await request(api).get('/distritos/231180110');
        expect(response.body).toMatchObject(
            [{
                "id": 231180110,
                "nome": "Bonhu",
                "municipio": {
                    "id": 2311801,
                    "nome": "Russas",
                    "microrregiao": {
                        "id": 23023,
                        "nome": "Baixo Jaguaribe",
                        "mesorregiao": {
                            "id": 2305,
                            "nome": "Jaguaribe",
                            "UF": {
                                "id": 23,
                                "sigla": "CE",
                                "nome": "Ceará",
                                "regiao": {
                                    "id": 2,
                                    "sigla": "NE",
                                    "nome": "Nordeste"
                                }
                            }
                        }
                    }
                }
            }
            ]);

        expect(response.status).toBe(200);
    });

    test('Deve retornar dados de regiões imediatas, por sigla UF. ', async () => {
        const response = await request(api).get('/estados/SP/regioes-imediatas');
        expect(response.body[3501].UF).toBe(
            {
                "id": 350001,
                "nome": "São Paulo",
                "regiao-intermediaria": {
                    "id": 3501,
                    "nome": "São Paulo",
                    "UF": {
                        "id": 35,
                        "sigla": "SP",
                        "nome": "São Paulo",
                        "regiao": {
                            "id": 3,
                            "sigla": "SE",
                            "nome": "Sudeste"
                        }
                    }
                }
            }
        )
    });
});