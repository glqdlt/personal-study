'use strict'

const obj = {};

obj.color = "yeallo";

const SIZE = Symbol();

obj["not an identifier"] = 3;

obj[SIZE] = 8;
console.log(obj[SIZE] + `${obj.color}` + `${obj["not an identifier"]}`+ `${obj[SIZE]}`);


const sam3 ={};
sam3.speak = function(){
    return "Meow!";
};

console.log(`${sam3.speak()}`);

delete sam3.speak;



const a1 = [1,2,3,4];
const a2 = [1,'two',3,null];
const a3 = [{"name":"ruby"},{"name":"kim","hobby":"study"}];
const a4 = [[1,2,3,],[4,5,6]];

console.log(`${a1} , ${a2} , ${a3}, ${a4}`);

console.log(a3.length);
console.log(a3[0]);


const today = new Date(2017,10,22); // 2017-11-21
console.log(today);

const dateObj = new Date();
console.log(dateObj.getDay()); // 이건 동적이다, 오늘은 목요일 == 4라고 나온다. 금요일은 5 토요일은 6 일요일은 0


const numStr = "33.3";
console.log(numStr === "33.3"); //true
const num = Number(numStr);
console.log(num === "33.3"); //false


const parse1 = parseInt("16 volt",10); // volt 란 string 은 무시되고, 10진수의 '기수'를 넘겼으므로 16이 나옴
console.log(parse1); //16
const parse2 = parseFloat("15.5 kph");
console.log(parse2);

const b = false;
const n = b ? 1: 0;
console.log(n);

const stringDate = new Date();
console.log(stringDate);
console.log(stringDate.toString());

const b1 = !!0;
console.log(!!0);


function change(a){
    a = 5;
}

const a= 3;
change(a);
console.log(a);


function change_object(o){
    o.b=999;
}

let x = {a:1};

console.log(x.a);
console.log(x.b);

change_object(x);
console.log(x.a);
console.log(x.b);
