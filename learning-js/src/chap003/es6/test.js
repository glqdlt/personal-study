'use district';

let currentTempC = 22;

console.log(currentTempC);

currentTempC = 22.5;
console.log(currentTempC);

let targetTemC, room1 = "conference_room_a", room2 = "lobby";

console.log(`${targetTemC} , ${room1} , ${room2}`);


const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;

console.log(`${ROOM_TEMP_C} , ${MAX_TEMP_C}`);

// 리터널 == 프록르ㅐㅁ 내에서 값을 만드는 방법


let testR1 = "room_a";
let testR1_R = testR1;

console.log(`testR1 : ${testR1} , testR1_R : ${testR1_R}`);




let const0 = 10;

const const1 = 0x0000ff;
const const2 = 0o0022;
const const3 = 21.5;
const const4 = 3.0e6;
const const5 = -1.6e-19;
const const7 = Infinity;
const const8 = -Infinity;
const const9 = NaN;

console.log(`const0 : ${const0} , const1 : ${const1}, const2 : ${const2} , const3 : ${const3}, const4 : ${const4}, const5 : ${const5}`);
console.log(`const7 : ${const7}, const8 : ${const8} , const9 : ${const9}`);


//escape..

console.log('hello, \'jhun!\' ');

console.log("hi \n ~ hi");

console.log("window line 1 \r window line2"); // update window line 1 to window line2

console.log("speed:\t60kph"); // tab

console.log("De Morgan's law: \u2310");

console.log("\xc9p\xe9e is fun")

console.log(`color1
color2
    color3
color4`);

console.log('My name is ..'+`${testR1}`);


const iamTrue = "true";

console.log(`${iamTrue}`);


const RED = Symbol("color of a sunset");
const ORANGE = Symbol("color of a sunset");

console.log(RED === ORANGE); // false

