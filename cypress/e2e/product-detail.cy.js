describe('상품 상세 페이지', () => {
	// beforeEach(() => {
	// 	cy.visit('/');
	// });

	it('상품 상세 페이지로 진입하면 상품의 이름과 가격이 정상적으로 표시된다.', () => {
		cy.visit('/product/0');

		cy.getByCy('product-image').should('be.visible');
		cy.getByCy('product-name').should('be.visible');
		cy.getByCy('product-price').should('be.visible');
	});
});
