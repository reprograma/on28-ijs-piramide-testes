// entrar no index pegar o input de range
// invoquem a função valor e passem um valor 25

describe('Testar range', () => {
    it('Atualizar o valor do range ao mover o slider', () => {
        cy.visit('index.html')

        cy.get('input[type="range"]')
        .invoke('val', 99)
        .trigger('change')

        cy.get('p')
        .should('have.text', '99')
    })
})