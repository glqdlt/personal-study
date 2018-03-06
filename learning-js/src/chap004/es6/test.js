'use strict';

for (let temp, i = 0, j = 1; j < 30; temp = i, i = j, j = i + temp) console.log(j);


// for(;;) console.log('i will repeat forever!'); // infinity loop


let s = '3';
for (; s.length < 10; s = ' ' + s) ;

console.log(s);

for (let x = 0.2; x < 3.0; x += 0.2) console.log(x);

// for(; !player.isBroke();) console.log("still playing!");

// for 안의 let 변수는 for 안에만 존재함, while 문 과의 유일한 차이, 자바랑 비슷


let x, y;
x = y = 3 * 5;

console.log(`${x}, ${y}`);

const s1 = "5";
const s2 = 3 + +s1;
console.log(s2);

let x1 = 2;
const r1 = x1++ + x1++;
const r2 = ++x1 + ++x1;

console.log(`r1 : ${r1} , r2 : ${r2}`);

// 2++ , ++2 의 차이 2++ 는 2를 현재 식의 후에 증가,  ++2 는 2를 먼저 3으로 증가시키고 식을 사용


console.log("33" == 33); // true
console.log("33" === 33) //false


const a = {name: "an object"};
const b = {name: "an object"};

console.log(a == b);  //false
console.log(a === b); // false

console.log(a.name == b.name); // true
console.log(a.name === b.name); // true


// let n = 0;
// while (true) {
//     n += 0.1;
//     console.log(`n: ${n}`);
//     if (n === 0.3) break;
// }
// console.log(`Stopped at ${n}`);
//
// // ㅡㅡ;; 무한루프돈다, 0.3 이라고 생각하지만 0.300000000000004 라고 함,


console.log(3 + 5 + "8") // "88" ㅇㅋ
console.log("3" + 5 + 8) // "358" ㅋㅋㅋㅋ

// undefined , null , false, 0 , NaN , ''  은 모두 거짓같은 값, 이거 외에는 모두 참 같은 값.  놀라운 것은 문자는 "false" 참이다 ㅡㅡ;

console.log("false" ? true : false); // true ㅡㅡ; ㅋㅋㅋㅋㅋㅋㅋ

let nullObj = null;

console.log(typeof nullObj); // object ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ  ㅅㅂ


const arrObj = [1, 2, 3, 4, 5];

let [rr1, rr2, ...rest] = arrObj;

console.log(`rr1 : ${rr1}, rr2 : ${rr2}, rest : ${rest}`);