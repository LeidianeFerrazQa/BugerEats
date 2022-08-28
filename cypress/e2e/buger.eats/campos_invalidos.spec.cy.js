describe("Deve retornar um span para cada campo preenchido" +
"com formato inválido", () => {
    beforeEach(() => {
      cy.visit("https://buger-eats.vercel.app/deliver");
    });
    
    it("Testar campos com formatos inválidos ", () => {   

      cy.get('input[name="cpf"]').type("777");
      cy.contains(".button-success", "Cadastre-se para fazer entregas").click();
      cy.contains('span', "Oops! CPF inválido");
      cy.get('input[name="cpf"]').clear();
      cy.get('input[name="cpf"]').type("00681443188");
      
      cy.get('input[name="email"]').type("teste@com");
      cy.contains(".button-success", "Cadastre-se para fazer entregas").click();
      cy.contains('span', "Oops! Email com formato inválido.");
      cy.get('input[name="email"]').clear();
      cy.get('input[name="email"]').type("teste@teste.com");
      
      cy.get('input[name="whatsapp"]').type("777");
      cy.contains(".button-success", "Cadastre-se para fazer entregas").click();
      cy.contains('span', "Oops! Whatsapp com formato incorreto");
      cy.get('input[name="whatsapp"]').clear();
      cy.get('input[name="whatsapp"]').type("34998046831");

      cy.contains(".button-success", "Cadastre-se para fazer entregas").click();
         
    });
  });