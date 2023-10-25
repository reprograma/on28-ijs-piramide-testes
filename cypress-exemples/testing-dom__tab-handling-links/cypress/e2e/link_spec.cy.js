describe("Testando links do menu", () => {
    beforeEach(() => {
        cy.visit('/index.html')
    })

    it("1 - verificar se o btn de usuário menu está correto - testando o link sem clicar", () => {
        cy.get('#users') // Get one or more DOM elements by selector or alias. is similar to how $(...) works in jQuery.
        .should('have.attr', 'href').and('include', 'users.html') //asserções
    })

    it('2 - verificar se o btn de usuário menu está correto', () => {
        cy.get('#users')
        .should('have.prop', 'href')
        .and('equal', 'http://localhost:7078/users.html') //
    })

    it('3 - requisitar uma página', () => {
        cy.get('#google').then(alink => {
            const href = alink.prop('href') //recupera o value da prop href === https://www.google.com/

            cy.request(href)
            .its('body') //
            .should('include', '</html>')
        })
    })
})