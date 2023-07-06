
describe('Login page', () => {

    beforeEach('Launches website', () => {
        cy.visit('https://www.saucedemo.com/v1/index.html');
    })

    it('Login', () => {
        cy.get('[data-test="username"]').type('standard_user').should('have.value', 'standard_user');
        cy.get('[data-test="password"]').type('secret_sauce').should('have.value', 'secret_sauce');
        cy.get('#login-button').click();
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    })

    it('Login1', () => {
        cy.get('[data-test="username"]').type('locked_out_user').should('have.value', 'locked_out_user');
        cy.get('[data-test="password"]').type('secret_sauce').should('have.value', 'secret_sauce');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('be.visible');
    })

    it('Login2', () => {
        cy.get('[data-test="username"]').type('problem_user').should('have.value', 'problem_user');
        cy.get('[data-test="password"]').type('secret_sauce').should('have.value', 'secret_sauce');
        cy.get('#login-button').click();
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    })

    it('Login3', () => {
        cy.get('[data-test="username"]').type('performance_glitch_user').should('have.value', 'performance_glitch_user');
        cy.get('[data-test="password"]').type('secret_sauce').should('have.value', 'secret_sauce');
        cy.get('#login-button').click();
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    })
})

describe('Products page', () => {

    beforeEach('Load page', () => {
        cy.visit('https://www.saucedemo.com/v1/inventory.html');
    })



    it('Add/remove to/from cart', () => {
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get('.fa-layers-counter').should('be.visible');
        cy.get('.btn_secondary').click();
        cy.get('.fa-layers-counter').should('not.exist');
    })

    it('Shopping cart', () => {
        cy.get('#shopping_cart_container').click();
        cy.url().should('eq', 'https://www.saucedemo.com/v1/cart.html');
    })

    it('Loading Item page', () => {
        cy.get('#item_4_title_link > .inventory_item_name').click();
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory-item.html?id=4');

        cy.get('.btn_primary').click();
        cy.get('.fa-layers-counter').should('contain', '1');

        cy.get('.btn_secondary').click();
        cy.get('.fa-layers-counter').should('not.exist');

        cy.get('.inventory_details_back_button').click({ force: true });
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    })
})

describe('Shopping cart page', () => {

    beforeEach('Load Shopping Cart page', () => {
        cy.visit('https://www.saucedemo.com/v1/cart.html');
    })

    it('Continue Shopping button', () => {
        cy.get('.btn_secondary').click();
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    })

    it('Checkout function', () => {
        cy.get('.btn_action').click().url().should('eq', 'https://www.saucedemo.com/v1/checkout-step-one.html');

        cy.get('[data-test="firstName"]').type('Example Name').should('have.value', 'Example Name');
        cy.get('[data-test="lastName"]').type('Example Last Name').should('have.value', 'Example Last Name');
        cy.get('[data-test="postalCode"]').type(11080).should('have.value', 11080);

        cy.get('.btn_primary').click().url().should('eq', 'https://www.saucedemo.com/v1/checkout-step-two.html');
        cy.get('.btn_action').click().url().should('eq', 'https://www.saucedemo.com/v1/checkout-complete.html');
    })

})