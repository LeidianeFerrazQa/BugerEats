describe("Deve receber span informando todos os campos obrigatórios " +
"caso o usuário tente realizar um registro sem preencher esses campos", () => {
    beforeEach(() => {
      cy.visit("https://buger-eats.vercel.app/deliver");
    });
  
    it("O Usuario deve tentar realizar um cadastro sem preencher nenhum campo", () => {   
  
        cy.contains(".button-success", "Cadastre-se para fazer entregas").click();
        
        cy.contains('span', "É necessário informar o nome");
        cy.contains('span', "É necessário informar o CPF");
        cy.contains('span', "É necessário informar o email");
        cy.contains('span', "É necessário informar o CEP");
        cy.contains('span', "É necessário informar o número do endereço");
        cy.contains('span', "Selecione o método de entrega");
        cy.contains('span', "Adicione uma foto da sua CNH");
        
    });
  });