const request = require('supertest');
const api = "https://servicodados.ibge.gov.br/api/v1/localidades/";

describe('Testar endpoint da dndApi', ()=> {

  test('Obtém todos os destritos',  async ()=> {
    const response = await request(api).get('distritos');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(10670)
  });

  test('Não deve obter todos destritos, pois foi passado rota errada',  async ()=> {
    const response = await request(api).get('distritossssssss');
    expect(response.status).toBe(404);
  });

  test('Obtém os dados referentes ao distrito de Fazendinha/AP ', async () => {
    const response = await request(api).get('distritos/160030312');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body).toEqual([
      {
        "id": 160030312,
        "municipio": {
          "id": 1600303,
          "microrregiao": {
            "id": 16003,
            "mesorregiao": {
              "UF": {
                "id": 16,
                "nome": "Amapá",
                "regiao": {
                  "id": 1,
                  "nome": "Norte",
                  "sigla": "N"
                },
                "sigla": "AP"
              },
              "id": 1602,
              "nome": "Sul do Amapá"
            },
            "nome": "Macapá"
          },
          "nome": "Macapá",
          "regiao-imediata": {
            "id": 160001,
            "nome": "Macapá",
            "regiao-intermediaria": {
              "UF": {
                "id": 16,
                "nome": "Amapá",
                "regiao": {
                  "id": 1,
                  "nome": "Norte",
                  "sigla": "N"
                },
                "sigla": "AP"
              },
              "id": 1601,
              "nome": "Macapá"
            }
          }
        },
        "nome": "Fazendinha"
      }
    ]
    );
  });

  test('Obtém os países ordenados alfabeticamente pelo nome.', async () => {
    const response = await request(api).get('paises?orderBy=nome');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(193);
    expect(response.body[0].nome).toEqual('Afeganistão')
    expect(response.body[192].nome).toEqual('Zimbábue')
  })

  test('Obtém os distritros por municípios de São Paulo', async () =>{
    const response = await request(api).get('municipios/3550308/distritos');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(96);
    expect(response.body[17].id).toEqual(355030818);
    expect(response.body[17].nome).toEqual('Cangaiba');
    expect(response.body[17].municipio).toEqual({
      "id": 3550308, 
      "microrregiao": {
        "id": 35061, 
        "mesorregiao": {
          "UF": {
            "id": 35, 
            "nome": 
            "São Paulo", 
            "regiao": {
              "id": 3, 
              "nome": "Sudeste",
               "sigla": "SE"
              },
               "sigla": "SP"
              }, 
              "id": 3515,
              "nome": "Metropolitana de São Paulo"
            }, 
            "nome": "São Paulo"
          },
           "nome": "São Paulo", 
           "regiao-imediata": {
            "id": 350001, 
            "nome": "São Paulo", 
            "regiao-intermediaria": {
              "UF": {
                "id": 35,
                "nome": "São Paulo", 
                "regiao": {
                  "id": 3, 
                  "nome": "Sudeste", 
                  "sigla": "SE"
                }, "sigla": "SP"
              }, 
              "id": 3501, 
              "nome": "São Paulo"
            }
          }
        }
    );
  })

  test('Obtém o conjunto de Unidades da federação do Brasil', async ()=> {
    const response = await request(api).get('estados?orderBy=nome');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(27);
    expect(response.body).toEqual(
      [
        {
          id: 12,
          sigla: 'AC',
          nome: 'Acre',
          regiao: { id: 1, sigla: 'N', nome: 'Norte' }
        },
        {
          id: 27,
          sigla: 'AL',
          nome: 'Alagoas',
          regiao: { id: 2, sigla: 'NE', nome: 'Nordeste' }
        },
        {
          id: 16,
          sigla: 'AP',
          nome: 'Amapá',
          regiao: { id: 1, sigla: 'N', nome: 'Norte' }
        },
        {
          id: 13,
          sigla: 'AM',
          nome: 'Amazonas',
          regiao: { id: 1, sigla: 'N', nome: 'Norte' }
        },
        {
          id: 29,
          sigla: 'BA',
          nome: 'Bahia',
          regiao: { id: 2, sigla: 'NE', nome: 'Nordeste' }
        },
        {
          id: 23,
          sigla: 'CE',
          nome: 'Ceará',
          regiao: { id: 2, sigla: 'NE', nome: 'Nordeste' }
        },
        {
          id: 53,
          sigla: 'DF',
          nome: 'Distrito Federal',
          regiao: { id: 5, sigla: 'CO', nome: 'Centro-Oeste' }
        },
        {
          id: 32,
          sigla: 'ES',
          nome: 'Espírito Santo',
          regiao: { id: 3, sigla: 'SE', nome: 'Sudeste' }
        },
        {
          id: 52,
          sigla: 'GO',
          nome: 'Goiás',
          regiao: { id: 5, sigla: 'CO', nome: 'Centro-Oeste' }
        },
        {
          id: 21,
          sigla: 'MA',
          nome: 'Maranhão',
          regiao: { id: 2, sigla: 'NE', nome: 'Nordeste' }
        },
        {
          id: 51,
          sigla: 'MT',
          nome: 'Mato Grosso',
          regiao: { id: 5, sigla: 'CO', nome: 'Centro-Oeste' }
        },
        {
          id: 50,
          sigla: 'MS',
          nome: 'Mato Grosso do Sul',
          regiao: { id: 5, sigla: 'CO', nome: 'Centro-Oeste' }
        },
        {
          id: 31,
          sigla: 'MG',
          nome: 'Minas Gerais',
          regiao: { id: 3, sigla: 'SE', nome: 'Sudeste' }
        },
        {
          id: 15,
          sigla: 'PA',
          nome: 'Pará',
          regiao: { id: 1, sigla: 'N', nome: 'Norte' }
        },
        {
          id: 25,
          sigla: 'PB',
          nome: 'Paraíba',
          regiao: { id: 2, sigla: 'NE', nome: 'Nordeste' }
        },
        {
          id: 41,
          sigla: 'PR',
          nome: 'Paraná',
          regiao: { id: 4, sigla: 'S', nome: 'Sul' }
        },
        {
          id: 26,
          sigla: 'PE',
          nome: 'Pernambuco',
          regiao: { id: 2, sigla: 'NE', nome: 'Nordeste' }
        },
        {
          id: 22,
          sigla: 'PI',
          nome: 'Piauí',
          regiao: { id: 2, sigla: 'NE', nome: 'Nordeste' }
        },
        {
          id: 33,
          sigla: 'RJ',
          nome: 'Rio de Janeiro',
          regiao: { id: 3, sigla: 'SE', nome: 'Sudeste' }
        },
        {
          id: 24,
          sigla: 'RN',
          nome: 'Rio Grande do Norte',
          regiao: { id: 2, sigla: 'NE', nome: 'Nordeste' }
        },
        {
          id: 43,
          sigla: 'RS',
          nome: 'Rio Grande do Sul',
          regiao: { id: 4, sigla: 'S', nome: 'Sul' }
        },
        {
          id: 11,
          sigla: 'RO',
          nome: 'Rondônia',
          regiao: { id: 1, sigla: 'N', nome: 'Norte' }
        },
        {
          id: 14,
          sigla: 'RR',
          nome: 'Roraima',
          regiao: { id: 1, sigla: 'N', nome: 'Norte' }
        },
        {
          id: 42,
          sigla: 'SC',
          nome: 'Santa Catarina',
          regiao: { id: 4, sigla: 'S', nome: 'Sul' }
        },
        {
          id: 35,
          sigla: 'SP',
          nome: 'São Paulo',
          regiao: { id: 3, sigla: 'SE', nome: 'Sudeste' }
        },
        {
          id: 28,
          sigla: 'SE',
          nome: 'Sergipe',
          regiao: { id: 2, sigla: 'NE', nome: 'Nordeste' }
        },
        {
          id: 17,
          sigla: 'TO',
          nome: 'Tocantins',
          regiao: { id: 1, sigla: 'N', nome: 'Norte' }
        }
      ]
    )
  })

  test('Obtém o conjunto de Unidades do Rio de Janeiro a partir dos seu identificador', async ()=> {
    const response = await request(api).get('estados/35');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      {
        "id": 35, 
        "nome": "São Paulo", 
        "regiao": {
          "id": 3, 
          "nome": "Sudeste", 
          "sigla": "SE"
        }, 
        "sigla": "SP"
      }
    )
  })

  test('Obtém o conjunto de Unidades de São Paulo a partir dos seu identificador', async ()=> {
    const response = await request(api).get('estados/33');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      {
        "id": 33, 
        "nome": "Rio de Janeiro", 
        "regiao": {
          "id": 3, 
          "nome": "Sudeste", 
          "sigla": "SE"
        }, 
        "sigla": "RJ"
      }
    )
  })

  test('Não deve obter o conjunto de Unidades a partir dos seu identificador, pois identificador não existe', async ()=> {
    const response = await request(api).get('estados/33333333');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([])
  })
})