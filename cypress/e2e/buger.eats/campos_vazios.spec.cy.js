describe("Deve receber span informando todos os campos obrigatórios " +
"caso o usuário tente realizar um registro sem preencher esses campos", () => {
    beforeEach(() => {
      cy.visit("https://buger-eats.vercel.app/deliver");
    });
  
    it("O Usuario deve tentar realizar um cadastro sem preencher nenhum campo", () => {   
  
        cy.contains(".button-success", "Cadastre-se para fazer entregas").click();
        
        cy.contains('span', "É necessário informar o nome").should('be.visible');
        cy.contains('span', "É necessário informar o CPF").should('be.visible');
        cy.contains('span', "É necessário informar o email").should('be.visible');
        cy.contains('span', "É necessário informar o CEP").should('be.visible');
        cy.contains('span', "É necessário informar o número do endereço").should('be.visible');
        cy.contains('span', "Selecione o método de entrega").should('be.visible');
        cy.contains('span', "Adicione uma foto da sua CNH").should('be.visible');
        
    });
  });