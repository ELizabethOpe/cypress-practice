/// <reference types="cypress" />
  it('google test', () => {
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Automation Step by Step{enter}')
    // cy.get('.dmenKe > .cIkxbf > .usJj9c > h3 > .l').click()
    cy.wait(4000)
    cy.contains('Videos').click()
  })

  it.only('login test', () => {
    cy.visit('https://app.dotpay.africa/login')
    cy.get('.Button__ButtonStyle-sc-171jhno-2').click()
  }) 