// Estrutura básica para representar um usuário
class User {
  constructor(username) {
    this.username = username;
    this.boards = [];
  }
}

// Estrutura básica para representar um board
class Board {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.pins = [];
  }
}

// Estrutura básica para representar um pin
class Pin {
  constructor(image, title, description) {
    this.image = image;
    this.title = title;
    this.description = description;
  }
}

// Mock de dados para testes
const mockUser = new User('usuario_teste');
const mockBoard = new Board('Meu Board de Viagens', 'Destinos incríveis ao redor do mundo.');
const mockPin = new Pin('caminho/para/imagem.jpg', 'Lindo Pôr do Sol', 'Uma vista deslumbrante do sol se pondo sobre o horizonte.');

// Função para pesquisa por termo
function searchByTerm(term) {
  // Lógica de pesquisa por termo
  // Retorna uma lista de resultados simulados
  return ['viagem', 'viagem incrível', 'destino de viagem'].filter(result => result.includes(term));
}

// Função para criar um novo board
function createBoard({ name, description }) {
  const newBoard = new Board(name, description);
  mockUser.boards.push(newBoard);
}

// Função para realizar o upload de um novo pin
function uploadPin({ image, title, description, board }) {
  const selectedBoard = getBoardByName(board);
  const newPin = new Pin(image, title, description);
  selectedBoard.pins.push(newPin);
}

// Função para obter o usuário (apenas para fins de exemplo)
function getUser() {
  return mockUser;
}

// Função para obter um board pelo nome (apenas para fins de exemplo)
function getBoardByName(name) {
  return mockUser.boards.find(board => board.name === name);
}

// Exporta as funções e classes necessárias
module.exports = {
  searchByTerm,
  createBoard,
  uploadPin,
  getUser,
  getBoardByName,
};