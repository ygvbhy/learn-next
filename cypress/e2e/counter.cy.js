describe('카운터 앱', () => {
	// 첫 번째 테스트 시나리오
	it('페이지에 진입하면 카운터 앱이 정상적으로 실행된다. (0이 표시 된다.)', () => {
		cy.visit('http://localhost:3000');
		// html 태그에 data-cy 가 counter 라는걸 가져와서 그 값이 0 인지 확인
		cy.get('[data-cy=counter]').contains(0);
	});
});
