- escreva um caso de teste end to end para o git

    ## Pré-condições para todos os casos 
        - ter acesso a internet e navegador atualizado
        - ter uma conta válida
        - estar logado
        - para realizar login:
            digitar email e senha
            clicar em entrar

    ### - criar um repositório
       
        **Passos:** Cenário de Teste - Define o que deve ser testado

       *Acesso à Página Inicial*
            clicar em "repositories"
            clicar em "new" 
            criar o nome de um repositório inédito
            criar uma descrição(opcional)
            clicar em "create repository"
        
        *Critérios de Aceitação:*
            repositório ser criado sem erros

        *Pós-condições:*

    ### - abrir uma issue


    ### - deletar um repositório
        acessar o repositório
        clicar em "settings"
        navegar até o fim da página e clicar em "delete this repository"
        clicar em 'i want to delete this repository'
        clicar em 'i have read and understand these effects'
        copiar o nome do repositório que será deletado no input

        *Pós-condições:*
            repositório não existir mais


    ### - criar uma nova chave SSH