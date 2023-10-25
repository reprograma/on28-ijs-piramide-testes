const request = require('supertest');
const api = "https://servicodados.ibge.gov.br/api/v1/localidades";

describe('Testes para Endpoints da API de Localidades do IBGE', () => {
    it('Deve retornar informações de países com sucesso', async () => {
        const response = await request(api).get('/paises');
        expect(response.status).toBe(200);
        expect(response.body[0].nome).toEqual('Afeganistão'); s
    });

    it('Deve retornar informações da região com sucesso', async () => {
        const response = await request(api).get('/regioes');
        expect(response.status).toBe(200);
        const expectedRegions = [
            { id: 1, sigla: 'N', nome: 'Norte' },
            { id: 2, sigla: 'NE', nome: 'Nordeste' },
            { id: 3, sigla: 'SE', nome: 'Sudeste' },
            { id: 4, sigla: 'S', nome: 'Sul' },
            { id: 5, sigla: 'CO', nome: 'Centro-Oeste' }
        ];
        expect(response.body).toEqual(expectedRegions);
    });

    it('Deve retornar informações das regiões integradas de desenvolvimento com sucesso', async () => {
        const response = await request(api).get('/regioes-integradas-de-desenvolvimento');
        expect(response.status).toBe(200);
        const expectedRegions = [
            { id: '01301', nome: 'Região Integrada de Desenvolvimento da Grande Teresina' },
            { id: '03101', nome: 'Região Administrativa Integrada de Desenvolvimento do Polo Petrolina/PE e Juazeiro/BA' },
            { id: '07801', nome: 'Região Integrada de Desenvolvimento do Distrito Federal e Entorno' }
        ];
        expect(response.body).toEqual(expect.arrayContaining(expectedRegions));
    });

    it('Deve retornar status 404 para rota inexistente', async () => {
        const response = await request(api).get('/nonexistent-route');
        expect(response.status).toBe(404);
    });

    it('Deve retornar status 404 para parâmetros inválidos', async () => {
        const response = await request(api).get('/country/-1');
        expect(response.status).toBe(404);
    });

    it('Deve retornar status 404 para respostas vazias ou inválidas', async () => {
        const response = await request(api).get('/empty-response-route');
        expect(response.status).toBe(404);
        expect(response.body).toEqual({});
    });
});
