describe('상품 목록 페이지', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	// 첫 번째 테스트 시나리오
	it('페이지에 진입하면 상품 목록이 표시된다.', () => {
		// product-item 이 화면에 있을거야 라는 가정
		// cy.get('[data-cy=product-item]').should('be.visible');
		cy.getByCy('product-item').should('be.visible');
	});

	// 두 번째 시나리오
	it('네비게이션바의 장바구니 링크를 클릭하면 장바구니 페이지로 이동한다.', () => {
		// prepare - 준비
		// visit
		// action - 인터렉션
		cy.getByCy('cart-link').click();
		// 접속 한 현재 페이지의 url 을 가져와서 뒤의 문자열과 같은 지 비교
		// assertion - 보장
		cy.url().should('include', '/cart');
	});
});
