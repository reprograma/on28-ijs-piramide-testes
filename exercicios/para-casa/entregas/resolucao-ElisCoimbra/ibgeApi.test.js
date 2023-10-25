const request = require('supertest')
const api = "https://servicodados.ibge.gov.br/api/v1/localidades"

 describe("Testar retorno da API do IBGE", () =>{
   test("Testando retorno do endpoint distrito por microrregião", async () =>{
        const response =  await request(api).get("/microrregioes/35025");
       expect(response.body.mesorregiao.nome).toBe("Araraquara")
    })
    
    test("Testando retorno do endpoint região por identificador", async () =>{
      const response =  await request(api).get("/regioes/3");
     expect(response.body).toEqual(
      {"id":3,"sigla":"SE","nome":"Sudeste"})
    })

     test("Testando retorno do endpoint regiões por identificador", async () =>{
      const response = await request(api).get("/regioes/3/estados")
      expect(response.body[0].nome).toContain("Gerais")
     })

     test("Testando retorno do endpoint países por identificador", async () =>{
      const response = await request(api).get("/paises/32")
      expect(response.body[1].nome).toBe("Argentina")
     })
  
  })


   


 
