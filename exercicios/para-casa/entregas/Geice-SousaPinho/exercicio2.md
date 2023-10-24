<!-- Exercício 2 - Cenários e casos de teste:
Escreva os cenários de teste para o [habitica](https://habitica.com/static/home), considere pelo menos duas funcionalidades descritas no [Step 1 da Wiki do Habitica](https://habitica.fandom.com/wiki/Habitica_Wiki). Os cenários de teste não precisam ser completos, mas devem contemplar as principais fluxos da funcionalidade. -->

**Caso de Teste de Ponta a Ponta para o Habitica**

**Título:** Acompanhamento dos afazeres e atividades diárias e funcionamento do sistema de recompensas através do Habitica

**Objetivo:** Verificar a navegação no site, assim como o funcionamento adequado do gerenciamento de atividades e sistema de recompensas do site Habitica.

**Pré-condições:**
1. Possuir conexão estável com a internet.
2. O navegador web deve estar atualizado para a versão mais recente.
3. A pessoa usuária deve possuir uma conta válida no Habitica.

**Passos:**

1. **Login na Conta:**
   - Acesse o site Habitica (https://habitica.com/static/home).
   - Efetue o login na sua conta usando credenciais (email ou nome de usuári@ e senha) válidas.
   - Verifique se o login é realizado com sucesso e se a pessoa usuária é redirecionada para a página inicial.

2. **Adição de hábitos, afazeres, tarefas diárias ou recompensas:**
   - No input da primeira coluna digite um hábito atividade e pressione Enter.
   - No input da segunda coluna digite a atividade diária e pressione Enter.
   - No input da terceira coluna digite o afazer e pressione Enter.
   - No input da quarta coluna digite a recompensa e pressione Enter.
   - Ao escolher uma opção na coluna de hábitos e clicar no "+" adiciona pontos e uma estrela.
   - Ao escolher uma opção na coluna de hábitos e clicar no "-" retira pontos e uma estrela.
   - Ao selecionar como feita uma opção na coluna de atividades diárias ganha pontos e uma estrela.
   - Ao marcar uma opção na coluna de afazeres automaticamente o item selecionado some e ganha pontos e uma estrela.
   - Ao clicar numa opção na coluna de afazeres um modal que possibilita a edição dao afazer é aberto.
   - Ao clicar na moeda da coluna de recompensas perde-se moedas de acordo com o "valor" da opção selecionada
   - Ao clicar numa opção na coluna de recompensas um modal que possibilita a edição da recompensa a ser recebida é aberto.
   - Na seção recompensas, clicar em um dos cards para comprar acessórios para o avatar, cicar em comprar agora

   *Outra forma de inserir tarefa:*
      - Clicar em "+ Adicionar tarefa", seleconar um hábito/diária/afazer/recompensa, preencher o modal aberto e clicar em criar

   *Visualização das tarefas por status:*
      - Ao lado do título de cada coluna clicar na opção desejada para visualião de acordo com o status do hábito/tarefa diária/afazeres/recompensa.


3. **Processo de Compra:**
   - Vá para o carrinho de compras e clique em "Finalizar Compra".
   - Insira ou confirme os detalhes de entrega, como endereço e método de envio.
   - Escolha um método de pagamento, como cartão de crédito, boleto bancário ou PayPal.
   - Preencha os dados necessários para o pagamento, como número do cartão, data de validade e código de segurança.
   - Confirme a compra e verifique se uma confirmação de pedido é exibida na tela.

4. **Pós-Compra:**
   - Após a conclusão da compra, acesse a seção "Minhas Compras" na conta do Mercado Livre.
   - Verifique se o pedido recém-realizado está listado corretamente com os detalhes corretos.
   - Confira se um e-mail de confirmação é recebido na caixa de entrada do e-mail registrado na conta.

**Pós-condições:**
1. O usuário efetuou com sucesso a compra de um produto no Mercado Livre.
2. O produto adquirido está corretamente listado nas compras do usuário.
3. Um e-mail de confirmação é enviado para o endereço de e-mail do usuário.
4. O carrinho de compras está vazio após a conclusão bem-sucedida da compra.

**Critérios de Aceitação:**
- Todos os passos são executados sem encontrar erros ou interrupções significativas.
- O processo de compra é concluído com sucesso, incluindo a confirmação do pagamento.
- Os detalhes do produto e do pedido são precisos e correspondem às seleções feitas pelo usuário.
- O e-mail de confirmação é recebido na caixa de entrada do usuário após a compra ser confirmada.
- Não há mensagens de erro ou problemas de carregamento durante a execução dos passos do teste.