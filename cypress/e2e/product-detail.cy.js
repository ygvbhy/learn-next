describe('상품 상세 페이지', () => {
	beforeEach(() => {
		cy.visit('/product/0');
	});

	// 첫 번째 테스트 시나리오
	it('상품 상세 페이지로 진입하면 상품의 이름과 가격이 정상적으로 표시된다.', () => {
		cy.getByCy('product-image').should('be.visible');
		cy.getByCy('product-name').should('be.visible');
		cy.getByCy('product-price').should('be.visible');
	});

	// 두 번째 테스트 시나리오
	it('장바구니에 담기 버튼을 클릭하면 "장바구니에 추가되었습니다."이 표시됨', () => {
		// const stub = cy.stub();
		// cy.on('window:alert', stub);
		// cy.get('[data-cy=cart-button]')
		// 	.click()
		// 	.then(() => {
		// 		expect(stub.getCall(0)).to.be.calledWith('hi');
		// 		expect(stub.getCall(1)).to.be.calledWith('there');
		// 		expect(stub.getCall(2)).to.be.calledWith('friend');
		// 	});

		const stub = cy.stub();
		cy.on('window:alert', stub);
		cy.getByCy('cart-button')
			.click()
			.then(() => {
				expect(stub.getCall(0)).to.be.calledWith('장바구니에 추가되었습니다.');
			});
	});
});
