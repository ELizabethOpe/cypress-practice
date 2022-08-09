it('login test', () => {
    cy.visit('https://app.dev.dotpay.africa')
    cy.get('#username').type('032441417')
    cy.get('#password').type('Kanyinsolaa')
    cy.get('.Button__ButtonStyle-sc-171jhno-2').click()

    // Dashboard
    // weekly transaction volume
    cy.get('.AgentGraph__GraphHeader-sc-154811f-0 > :nth-child(1) > :nth-child(2)').click()
      cy.get('#radix-2 > .Button__ButtonStyle-sc-171jhno-2').click()
      cy.contains('WEEKLY').click({force:true})
      // monthly transaction volume
      cy.get('#radix-2 > .Button__ButtonStyle-sc-171jhno-2').click()
      cy.contains('MONTHLY').click({force:true})
      // yearly transaction volume
      cy.get('#radix-2 > .Button__ButtonStyle-sc-171jhno-2').click()
      cy.contains('YEARLY').click({force:true})
    // Logout Test
    // cy.get('.dropdown_toggle > path').click()
    // cy.get(".sc-dlnjwi.dJXsSm").click()

    
})