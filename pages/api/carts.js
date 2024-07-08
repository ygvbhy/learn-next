import { removeCartsItem } from '@/api';

// send 로 반환 데이터 전송
// 직접 db 에 접근 해서 데이터 조작이 가능함
// 이건 더 알아봐야 할듯 ?
export default async function handler(req, res) {
	const id = req.body.id;
	const { data } = await removeCartsItem(id);
	res.status(200).send(`${data.name} 삭제가 되었습니다.`);
}
