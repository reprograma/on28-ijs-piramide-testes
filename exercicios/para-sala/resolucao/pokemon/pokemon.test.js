const request = require('supertest')
const api = 'https://pokeapi.co/api/v2'

describe('requisições a api pokemon', ()=>{
    test('deveria retornar um personagem ao buscar um pokemon pelo NOME', async()=>{
        const response = await request(api).get('/pokemon/ditto')

        expect(response.body.id).toBe(132)
        expect(response.status).toBe(200)
    });

    test('deveria retornar um personagem ao buscar um pokemon pelo NOME', async()=>{
        const response = await request(api).get('/pokemon/drowzee')

        expect(response.body.id).toBe(96)
        expect(response.status).toBe(200)
    });

    test('deveria retornar o nome de um pokemon ao realizar a busca por ID', async()=>{
        const response = await request(api).get('/pokemon/25');

        expect(response.body.name).toBe('pikachu');
        expect(response.status).toBe(200)
    });

    test('deveria retornar o nome de um pokemon ao realizar a busca por ID', async()=>{
        const response = await request(api).get('/pokemon/226');

        expect(response.body.name).toBe('mantine');
        expect(response.status).toBe(200)
    });

    test('deve retornar um personagem pokemon pela CATEGORIA', async()=>{
        const response = await request(api).get('/contest-type/5/');

        expect(response.body.name).toBe('tough');
    });

    test('deve retornar um personagem pokemon pela CATEGORIA', async()=>{
        const response = await request(api).get('/contest-type/1/');

        expect(response.body.name).toBe('cool');
    });

    test('deve retornar um personagem pokemon pela COMIDA', async()=>{
        const response = await request(api).get('/berry/25');

        expect(response.body.name).toBe('grepa');
    });

    test('deve retornar um personagem pokemon pela COMIDA', async()=>{
        const response = await request(api).get('/berry/25');

        expect(response.body.name).toBe('grepa');
    });

    test('deve retornar um personagem pokemon pela COMIDA', async()=>{
        const response = await request(api).get('/berry/63');

        expect(response.body.name).toBe('jaboca');
    });

})