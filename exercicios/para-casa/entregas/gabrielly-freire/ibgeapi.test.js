const request = require('supertest');
const api = "http://servicodados.ibge.gov.br/api/v1/localidades/";

describe('Testar endpoint da API de localidades (IBGE)', () => {
	// Testes para o endpoint de estado
	test('Deve retornar as informações do estado ao passar um id válido', async () =>{
		const response = await request(api).get('estados/24');
		expect(response.body.sigla).toMatch('RN');
		expect(response.body.nome).toMatch('Rio Grande do Norte');
		expect(response.status).toBe(200);
	});

	test('Deve retornar undefined ao passar um id inválido', async () =>{
		const response = await request(api).get('estados/100');
		expect(response.body.sigla).toBeUndefined();
		expect(response.status).toBe(200);
	});
	
	test('Deve retornar a quantidade correta de municípios do estado do Rio Grande do Norte', async () =>{
		const response = await request(api).get('estados/24/municipios');
		const qtdCidade = response.body.length;
		expect(qtdCidade).toEqual(167);
		expect(response.status).toBe(200);
	});

	test('Deve retornar verdadeiro para a presença de "Agreste Potiguar" no array de mesorregiões do Rio Grande do Norte', async () =>{
		const response = await request(api).get('estados/24/mesorregioes');
		const mesorregioes = response.body; 
		let encontrou = false;

		mesorregioes.forEach(mesorregiao => {
			if (mesorregiao.nome === 'Agreste Potiguar') {
			encontrou = true;
			return; 
		 }
		});

		expect(encontrou).toBeTruthy;
		expect(response.status).toBe(200);
	});

	test('Deve retornar falso para a presença de "Sertão de Quixeramobim" no array de mesorregiões do Rio Grande do Norte', async () =>{
		const response = await request(api).get('estados/24/mesorregioes');
		const mesorregioes = response.body; 
		let encontrou = false;

		mesorregioes.forEach(mesorregiao => {
			if (mesorregiao.nome === 'Sertão de Quixeramobim') {
			encontrou = true;
			return; 
		 }
		});

		expect(encontrou).toBeFalsy();
		expect(response.status).toBe(200);
	});

	// Teste para o endpoint de regiões
	test('Deve retornar a quantidade correta de regiões.', async () =>{
	    const response = await request(api).get('regioes');
		const qtdRegioes = response.body.length;
		expect(qtdRegioes).toEqual(5);
		expect(response.status).toBe(200);
	});

	// Testes para o endpoint de municipios
	test('Deve retornar as informações do municipio ao passar um id válido', async () =>{
	    const response = await request(api).get('municipios/2414001');	
		const municipio = response.body;
		expect(municipio.nome).toMatch('Tangará');
		expect(response.status).toBe(200);
	});

	test('Deve retornar as undefined do municipio ao passar um id inválido', async () =>{
	    const response = await request(api).get('municipios/2000001');	
		const municipio = response.body;
		expect(municipio.nome).toBeUndefined();
		expect(response.status).toBe(200);
	});

	// Teste para o endpoint de regiões metropolitanas
	test('Deve retornar uma lista das regiões metropolianas', async () =>{
	    const response = await request(api).get('regioes-metropolitanas');	
		expect(response.body.length).toBeGreaterThan(0);
		expect(response.status).toBe(200);
	});

});