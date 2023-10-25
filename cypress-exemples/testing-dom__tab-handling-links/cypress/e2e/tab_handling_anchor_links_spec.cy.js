// Nesta receita, temos um <nav> com alguns links que queremos
// testar em /examples/tab_handling_anchor_links/index.html
//
// Um dos links tem um atributo target='_blank' que
// deveria abrir em uma nova aba.
//
// Outro link aponta para um domínio externo que
// não corresponde ao nosso domínio sob teste - https://www.google.com

describe('Manipulação de Links com Abas', function () {
  beforeEach(function () {
    cy.visit('/index.html')
  })

  context('testando o link com target="_blank"', function () {
    it('solução #1: verificar o href, sem clicar', function () {
      cy.get('#users') //Get one or more DOM elements by selector or alias.
        .should('have.attr', 'href') // Assertions describe the desired state of your elements, your objects, and your application.
        .and('include', 'users.html') // Assertions 

      cy.get('#users')
        .should('have.prop', 'href')
        .and('equal', 'http://localhost:7078/users.html')
    })

    it('solução #2: clicar para a nova página', function () {
      cy.get('#users').invoke('removeAttr', 'target').click() // Invoca uma função no assunto gerado anteriormente
      cy.url().should('include', 'users.html')
    })

    it('solução #3: visitar sem modificar o <a>', function () {
      cy.get('#users').then(function (alink) {
        const href = alink.prop('href')
        cy.visit(href)
        cy.url().should('include', 'users.html')
      })
    })
  })

  context('testando o link de domínio externo', function () {
    it('solução #1: verificar apenas a propriedade href', function () {
      cy.get('#google').should('have.prop', 'href', 'https://www.google.com/')
    })

    it('solução #2: requisitar o conteúdo', function () {
      cy.get('#google').then(function (alink) {
        const href = alink.prop('href')
        cy.request(href)
          .its('body')
          .should('include', '</html>')
      })
    })
  })
})
