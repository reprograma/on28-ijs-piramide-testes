describe('Logging In - Basic Auth',  () => {
    it('quando não passar 401', () => {
        cy.request({
            url: '/',
            failOnStatusCode: false
        }).its('status').should('equal', 401)
    })
})
