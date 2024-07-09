// 초기에 항상 방문해서 해야 하는듯 ? it 안에는 새로운 테스트 코드 이기 떄문에 항상 페이지 방문 해야 하는것 같음
describe('카운터 앱', () => {
	// 첫 번째 테스트 시나리오
	it('페이지에 진입하면 카운터 앱이 정상적으로 실행된다. (0이 표시 된다.)', () => {
		cy.visit('http://localhost:3000');
		// html 태그에 data-cy 가 counter 라는걸 가져와서 그 값이 0 인지 확인
		cy.get('[data-cy=counter]').contains(0);
	});

	// 두 번째 테스트 시나리오
	it('플러스 버튼을 누르면 카운터가 1이 증가된다.', () => {
		cy.visit('http://localhost:3000');
		// html 태그에 data-cy 가 add-button 인걸 가져와서 그 부분을 클릭
		cy.get('[data-cy=add-button]').click();
		// 위의 클릭 이벤트가 진행 됐을때 counter 의 Element 값이 1이 증가 됐는지 확인
		cy.get('[data-cy=counter]').contains(1);
	});

	// 세 번쨰 테스트 시나리오
	it('마이너스 버튼을 누르면 1이던 카운트가 -1이 된다.', () => {
		cy.visit('http://localhost:3000');
		// html 태그에 data-cy 가 minus-button 인걸 가져와서 그 부분을 클릭
		cy.get('[data-cy=minus-button]').click();
		// 위의 클릭 이벤트가 진행 됐을때 counter 의 Element 값이 1이 감소 됐는지 확인
		cy.get('[data-cy=counter]').contains(-1);
	});
});
