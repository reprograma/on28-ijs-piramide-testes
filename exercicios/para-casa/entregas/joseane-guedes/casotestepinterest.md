Contexto comum a todas as funcionalidades:
Dado que o usuário tem um dispositivo com acesso à internet
E o navegador está atualizado
E o usuário possui uma conta no Pinterest e está logado
E o usuário está na página inicial do Pinterest

Funcionalidade: Pesquisa por Termo no Pinterest
Cenário: Pesquisa por termo existente
Caso de teste:
Quando o usuário insere o termo de pesquisa "praias"
E o usuário pressiona a tecla "Enter" no teclado
Então o Pinterest exibe resultados relacionados ao termo "praias"

Cenário: Pesquisa por termo inexistente
Caso de teste:
Quando o usuário insere o termo de pesquisa "xyzz123"
E o usuário pressiona a tecla "Enter" no teclado
Então o Pinterest exibe uma mensagem indicando que não há resultados para o termo pesquisado

Funcionalidade: Criação de board do Pinterest

Cenário: Criação de Board Público
Caso de teste:
Quando o usuário clica no ícone do seu perfil
E clica no ícone de "+" (adicionar)
E seleciona a opção "Pasta" para criar um novo board
E preenche o nome do board e escolhe a visibilidade como "Pública"
E clica no botão "Criar"
Então o sistema deve criar o novo board com sucesso exibindo as informações do board com visibilidade "Pública"

Cenário: Criação de Board Secreto
Caso de teste:
Quando o usuário clica no ícone do seu perfil
E clica no ícone de "+" (adicionar)
E seleciona a opção "Pasta" para criar um novo board
E preenche o nome do board e escolhe a visibilidade como "Secreta"
E clica no botão "Criar"
Então o sistema deve criar o novo board com sucesso exibindo as informações do board criado corretamente com a visibilidade "Secreta"

Funcionalidade: Upload de Pin no Pinterest

Cenário: Fazer Upload de um Pin
Caso de teste:
Quando o usuário clica no ícone do seu perfil
E clica no ícone de "+" (adicionar)
E seleciona a opção "Pin" para fazer upload de um pin
E preenche o título, descrição e faz o upload da imagem do pin,
E clica no botão "Salvar"
Então o sistema deve salvar o pin com sucesso
