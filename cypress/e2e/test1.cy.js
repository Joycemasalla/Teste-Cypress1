/// <reference types='cypress' />
context('RPVfinance Controls', () => {
    //hooks (gatilho-ganchos)
    //trechos q executam antes e depois do teste
    //before -> antes de todos os testes
    //beforeEach -> antes de cada teste
    //after -> depois de todos os testes
    //afterEach -> depois de cada teste

    beforeEach(() => {
        cy.visit('https://dev-finance.netlify.app/') // acessar a url 
    })




    it('cadastrar entradas', () => {
        // fluxo manual -> enter
        // mapear/identificar os elementos que vamos interagir
        //descrever as interações com o cypress
        //adicionar as asserções(analises-tipo de informação) que vamos precisar
        //cy.get --> mapear um elemento


        cy.get('#transaction .button ').click();// pegou pelo id + class
        cy.get('#description').type('Presente Dia dos Pais');
        cy.get('[name=amount]').type('250'); // pegou pelo atributo name
        cy.get('[type=date]').type('2024-03-09') //pegou pelo atributo type
        cy.get('button').contains('Salvar').click();  //botao que tem escrito 'salvar'

        cy.get('#date-table tbody tr').should('have.length', 1)

    })

    it('cadastrar Saídas', () => {

        cy.get('#transaction .button ').click();// pegou pelo id + class
        cy.get('#description').type('Presente Dia dos Pais');
        cy.get('[name=amount]').type('250'); // pegou pelo atributo name
        cy.get('[type=date]').type('2024-03-09') //pegou pelo atributo type
        cy.get('button').contains('Salvar').click();  //botao que tem escrito 'salvar'

        cy.get('#date-table tbody tr').should('have.length', 1)

    })

    it('remover lançamento', () => {
        // Adicionar um lançamento para depois remover
        cy.get('#transaction .button').click(); // pegou pelo id + class
        cy.get('#description').type('Compra de teste');
        cy.get('[name=amount]').type('100'); // pegou pelo atributo name
        cy.get('[type=date]').type('2024-03-09') // pegou pelo atributo type
        cy.get('button').contains('Salvar').click();  // botao que tem escrito 'salvar'


        // Remover o lançamento
        cy.get('#data-table tbody tr').first().find('.remove-button').click(); // Assumindo que o botão de remover tenha a classe 'remove-button'

    })

});


