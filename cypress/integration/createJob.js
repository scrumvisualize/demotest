
context('Actions-Test to create a ne Job',()=>{

    before(()=>{

    cy.loginTointelliHr();

    })

    beforeEach(()=>{

    })

    it('Create a Job in the intelliHr',()=>{
        cy.viewport(1600, 1000);
        cy.createPerson();
        cy.createJob();
    })
})