/*
    타입선언 : 
    - 변수 및 함수에 타입을 지정하여 타입에 대한 제한을 추가할 수 있음
*/
let variable: string;
variable = '문자열';
// variable = 1234;

function func (arg1: string, arg2: number): string {
    return '문자열';
}

const arrowFunc = (arg1: string, arg2: number): string => {
    return '문자열';
}

/*
    typescript의 타입
    - string: 문자열
    - number: 숫자
    - boolean: 논리
    - null: null
    - undefined: 정의되지 않음
    - object: 객체
    - array: 배열
    - enum: 열거형
    - void: 함수에서 반환값이 없음
    - any: 모든 타입
*/
const numbers1: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];

let string1: string = '';
let string2: String = '';
string2 = string1;
// string1 = string2; 

enum Color {
    RED = '#ff0000', GREEN = '#00ff00', BLUE = '#0000ff'
}
const color: Color = Color.RED;
console.log(color);

let anyType: any = 10;
anyType: '10';

const voidFunc = (): void => {
    return;
}

const func2 = (arg: string): string => {
    return '';
}

let funcType: (arg: string) => string;
funcType = func2;
// funcType = voidFunc;

/*
    타입추론 :
    - 
*/



/*
    타입 변환 :
    - 
*/



/*
    유니온 타입
    - 
*/



/*
    리터럴 타입
    - 
*/

