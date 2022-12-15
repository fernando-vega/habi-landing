describe('The Home Page', () => {
	it('successfully loads', () => {
		cy.visit('/');
		cy.findByRole('heading', { name: /🌱⚛️ Habi React App/i }).should('exist');
	});
});
