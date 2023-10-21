const request = require('supertest');
const http = 'https://swapi.dev/api/';

describe('verifica o funcionamento das requisições realizadas na api Star Wars', ()=>{

    test('deveria retornar um PERSONGEM de acordo com o id', async ()=>{
        const response = (await request(http).get('people/1')).body;

        expect(response.name).toBe('Luke Skywalker');
        expect(response.gender).toBe('male');
        expect(response.hair_color).toBe('blond')
        expect(response.eye_color).toBe('blue')
        expect(response.skin_color).toBe('fair')
        expect(response.height).toBe('172')
    });


    test('deveria retornar um FILME de acordo com o id', async ()=>{
        const response = await request(http).get('films/1');

        expect(response.body.director).toBe('George Lucas')
        expect(response.body.producer).toBe('Gary Kurtz, Rick McCallum')
        expect(response.body.release_date).toBe('1977-05-25')
        expect(response.body.title).toBe('A New Hope')
    });

    test('deveria retornar uma NAVE ESTRELAR de acordo com o id', async ()=>{
        const response = await request(http).get('starships/9');

        expect(response.body.MGLT).toBe('10')
        expect(response.body.consumables).toBe('3 years')
        expect(response.body.crew).toBe('342,953')
        expect(response.body.model).toBe('DS-1 Orbital Battle Station')
        expect(response.body.name).toBe('Death Star')
        expect(response.body.passengers).toBe('843,342')
    });

    test('deveria retornar uma NAVE ESTRELAR de acordo com o id', async ()=>{
        const response = await request(http).get('starships/5');

        expect(response.body.MGLT).toBe('70')
        expect(response.body.consumables).toBe('1 month')
        expect(response.body.crew).toBe('5')
        expect(response.body.model).toBe('Sentinel-class landing craft')
        expect(response.body.name).toBe('Sentinel-class landing craft')
        expect(response.body.passengers).toBe('75')
    });

    

    test('deveria retornar um VEICULO e suas informações de acordo com o', async ()=>{
        const response = (await request(http).get('vehicles/4')).body;

        expect(response.cargo_capacity).toBe('50000');
        expect(response.consumables).toBe('2 months');
        expect(response.cost_in_credits).toBe('150000');
        expect(response.crew).toBe('46');
        expect(response.manufacturer).toBe('Corellia Mining Corporation');
        expect(response.name).toBe('Sand Crawler');
        expect(response.passengers).toBe('30');
    });

    test('deveria retornar um personagem de acordo sua ESPECIE', async ()=>{
        const response = (await request(http).get('species/3')).body

        expect(response.average_height).toBe('210')
        expect(response.average_lifespan).toBe('400')
        expect(response.classification).toBe('mammal')
        expect(response.created).toBe('2014-12-10T16:44:31.486000Z')
        expect(response.designation).toBe('sentient')
        expect(response.edited).toBe('2014-12-20T21:36:42.142000Z')
        expect(response.eye_colors).toBe('blue, green, yellow, brown, golden, red')
        expect(response.hair_colors).toBe('black, brown')
        expect(response.language).toBe('Shyriiwook')
        expect(response.name).toBe('Wookie')
    });

    test('deveria retornar um PLANETA e suas informações de acordo com o id', async ()=>{
        const response = await request(http).get('planets/1')

        expect(response.body.climate).toBe('arid')
        expect(response.body.diameter).toBe('10465')
        expect(response.body.rotation_period).toBe('23')
        expect(response.body.surface_water).toBe('1')
        expect(response.body.terrain).toBe('desert')
    });
})