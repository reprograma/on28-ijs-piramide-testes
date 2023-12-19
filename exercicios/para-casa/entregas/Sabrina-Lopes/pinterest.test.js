const Pinterest = require('./pinterest');

test('Pesquisa por Termo - Retorna resultados correspondentes ao termo pesquisado', () => {
  const searchTerm = 'viagem';
  const results = Pinterest.searchByTerm(searchTerm);

  // Verifica se os resultados não estão vazios
  expect(results.length).toBeGreaterThan(0);

  // Verifica se cada resultado contém o termo pesquisado
  results.forEach(result => {
    expect(result).toContain(searchTerm);
  });
});

test('Criação de Board - Cria um novo board e verifica se está presente no perfil do usuário', () => {
  const newBoard = {
    name: 'Meu Board de Viagens',
    description: 'Destinos incríveis ao redor do mundo.'
  };

  const user = Pinterest.getUser(); // Obtém o usuário atual
  const initialBoardCount = user.boards.length;

  Pinterest.createBoard(newBoard);

  // Verifica se o novo board foi adicionado corretamente
  expect(user.boards.length).toBe(initialBoardCount + 1);
  expect(user.boards.map(board => board.name)).toContain(newBoard.name);
});

test('Upload de Pin - Realiza o upload de um novo pin e verifica se está presente no board escolhido', () => {
  const newPin = {
    image: 'caminho/para/imagem.jpg',
    title: 'Lindo Pôr do Sol',
    description: 'Uma vista deslumbrante do sol se pondo sobre o horizonte.',
    board: 'Meu Board de Viagens'
  };

  const board = Pinterest.getBoardByName(newPin.board); // Obtém o board escolhido
  const initialPinCount = board.pins.length;

  Pinterest.uploadPin(newPin);

  // Verifica se o novo pin foi adicionado corretamente ao board
  expect(board.pins.length).toBe(initialPinCount + 1);
  expect(board.pins.map(pin => pin.title)).toContain(newPin.title);
});