const request = require('supertest');
const api = "http://servicodados.ibge.gov.br/api/v1/localidades";

describe('IBGE API Endpoints', () => {
    test('Given a valid ID of a state should return the name and acronym correctly', async () =>{
        const response = await request(api).get(`/estados/26`);
        expect(response.status).toBe(200);
        expect(response.body.nome).toBe('Pernambuco');
        expect(response.body.sigla).toBe('PE');
    });

    test('Given a invalid ID should return an empty array', async () =>{
        const response = await request(api).get(`/estados/90`);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body).toHaveLength(0);
    });

    test('Given a invalid ID with letters should return an empty array', async () =>{
        const response = await request(api).get(`/estados/26sdytgsjdbc`);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body).toHaveLength(0);
    });

    test('Given a valid ID of a county should return the name correctly', async () =>{
        const response = await request(api).get(`/municipios/2607901`);
        expect(response.status).toBe(200);
        expect(response.body.nome).toBe('Jaboatão dos Guararapes');
    });

    test('Given a valid ID of a county must contain the microregion property', async () =>{
        const response = await request(api).get(`/municipios/2607901`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('microrregiao');
        expect(response.body.microrregiao).toHaveProperty('id');
        expect(response.body.microrregiao).toHaveProperty('nome');
    });

    test('Given a invalid ID should return an empty array', async () =>{
        const response = await request(api).get(`/municipios/90`);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body).toHaveLength(0);
    });

    test('Given a valid ID of a regions should return the acronym correctly', async () =>{
        const response = await request(api).get(`/regioes/2`);
        expect(response.status).toBe(200);
        expect(response.body.sigla).toBe('NE');
    });

    test('Given an endpoint of a states should return an array containing 27 objects', async () =>{
        const response = await request(api).get(`/estados`);
        const states = response.body.length;
		expect(states).toEqual(27);
        expect(response.status).toBe(200);
    });

    test('Given a region the endpoint must return an array containing more than one mesoregion', async () =>{
        const response = await request(api).get(`/regioes/2/mesorregioes`);
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
})

