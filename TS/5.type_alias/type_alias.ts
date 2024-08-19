/*
    타입 앨리어스 :
    - 커스텀 타입을 지정하는 방법 (타입의 별칭 지정)
    - type 키워드를 사용
*/
// let day: '일' | '월' | '화' | '수';

type WEEK = '일' | '월' | '화' | '수';
let day: WEEK = '일';

type BoardContents = string;
let contents: BoardContents = '내용';

// 객체의 타입 지정 방법
// 1. interface 이용
interface Human1 {
    name: string;
    age: number;
    address: string;
}
const human1: Human1 = {
    name: '홍길동',
    age: 23,
    address: '부산시'
}

// 2. type 이용
type Human2 = {
    name: string,
    age: number
}
const human2: Human2 = {
    name: '홍길동',
    age: 23
}

// 3. class 이용
class CHuman {
    name: string = '';
    age: number = 0;
}
const human3: CHuman = {
    name: '홍길동',
    age: 23
}

const human: Human1 = { ...human2 , address : '부산시' };

console.log('==================================================');