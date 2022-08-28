describe("Deve testar tela de cadastro de ponta a ponta com todos os campos " + 
"preenchidos com dados válidos e retornar tela home.", () => {
  beforeEach(() => {
    cy.visit("https://buger-eats.vercel.app/deliver");
  });

  it("Preencher todos os campos com dados válidos e finalizar o cadastro", () => {

    cy.get('input[name="name"]').type("Paulo Pereira"); 
    cy.get('input[name="cpf"]').type("00681443189");
    cy.get('input[name="email"]').type("teste@teste.com");
    cy.get('input[name="whatsapp"]').type("34998046831");
    cy.get('input[name="postalcode"]').type("72120420");
    cy.get('input[value="Buscar CEP"]').click();
    cy.get('input[name="address-number"]').type("39");
    cy.get('input[name="address-details"]').type("Casa");
    cy.get('img[alt="Bicicleta"]').click();
    cy.get('input[accept="image/*"]').as("fileInput").attachFile("teste_cnh.jpg");
    cy.get(".button-success").click();

    cy.contains(".swal2-html-container", "Recebemos os seus dados.").should('be.visible');
    cy.wait(1500);
    cy.get('.swal2-confirm').click();

  });
});