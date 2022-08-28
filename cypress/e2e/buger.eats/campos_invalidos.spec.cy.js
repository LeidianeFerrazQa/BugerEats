describe("Deve retornar um span para cada campo preenchido" +
"com formato inválido", () => {
    beforeEach(() => {
      cy.visit("https://buger-eats.vercel.app/deliver");
    });

    it("Testar cpf com formato inválido ", () => {   

      cy.get('input[name="cpf"]').type("777");
      cy.contains(".button-success", "Cadastre-se para fazer entregas").click();
      cy.contains('span', "Oops! CPF inválido").should('be.visible');
         
    });

    it("Testar email com formato inválido ", () => {   

      cy.get('input[name="email"]').type("teste@com");
      cy.contains(".button-success", "Cadastre-se para fazer entregas").click();
      cy.contains('span', "Oops! Email com formato inválido.").should('be.visible');
         
    });

    it("Testar whatsapp com formato inválido ", () => {   
      
      cy.get('input[name="whatsapp"]').type("777");
      cy.contains(".button-success", "Cadastre-se para fazer entregas").click();
      cy.contains('span', "Oops! Whatsapp com formato incorreto").should('be.visible');
         
    });
  });