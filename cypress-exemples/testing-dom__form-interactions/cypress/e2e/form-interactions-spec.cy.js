// This recipe shows how to interact with a range input (slider)

describe('Form Interactions', function () {
  beforeEach(function () {
    cy.viewport(400, 300)
    cy.visit('/index.html')
  })

  it('updates range value when moving slider', function () {
    cy.get('input[type=range]').as('range') //@range alias/apelido
    .invoke('val', 25)    // Here, we invoke jQuery's val() method to set the value
    .trigger('change')

    cy.get('fieldset p') 
    .should('have.text', '25')
  })
})
