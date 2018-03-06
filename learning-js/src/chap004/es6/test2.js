let v, v0;

v = v0 = 9.8;  // 오른쪽에서 왼쪽으로 할당  v0 = 9.8, v= 9.8

const nums = [3, 5, 15, 7, 5];

let n, i = 0;
while ((n = nums[i]) < 10 && i++ < nums.length) {
    console.log(`Number less than 10 : ${n}`);

}

console.log(`Number greater than 10 found : ${n}`);
console.log(`${nums.length - i - 1} numbers remain.`);


const obj = {b: 2, c: 3, d: 4};

let {d, b, c} = obj;

console.log(`${d}, ${b}, ${c} , ${obj}`);

({b, c, d} = obj);


console.log(`${d + b}`);

function getGreeting() {
    return "Hello world";
}

function getGreeting2() {
    console.log("hell josun");
}

console.log(getGreeting());
console.log(getGreeting2());

console.log(getGreeting());
console.log(getGreeting);

const f = getGreeting;

console.log(f());
console.log(f);

const o = {};
//객체안의 함수(o객체 프로포티 f에 함수를 할당했으므로 이는 메서드임)는 메서드라고 불림,
o.f = f;
console.log(o.f());
console.log(o.f);
console.log(o);

const arrObj = [1, 2, 3];
arrObj[1] = f;
console.log(arrObj[1]);
console.log(arrObj); // 2가 없어지고, f의 함수가 배열[1] 에 들어감.
// 자바스크립트에서 ()는 함수의 표현보다는 함수의 호출을 뜻함.


function oooo(target) {
    target.message = "f에서 수정함";


    target = {
        message: "새로운 객체!"
    };
    console.log(`oooo 내부: target.message="${target.message}" (할당 후)`);

}

let target = {
    message: '초기값'
}


console.log(`oooo를 호출하기 전 : target.message =${target.message}`);

oooo(target);
console.log(`oooo를 호출한 다음: target.message="${target.message}`);


function wow(num) {
    return `in num wow = ${num}`;
}

console.log(wow(5));
console.log(wow());


// 확산 매개변수, 확산 연산자
function addPrefix(prefix, ...words) {
    const prefixedWords = [];
    for (let i = 0; i < words.length; i++) {
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}

console.log(addPrefix("con", "verse", "vex")); //["con+verse","con+vex",]


function defaultF(a, b = "default", c = 3) {
    return `${a} , ${b}, ${c}`;
}

console.log(defaultF("a할당"));
console.log(defaultF("a할당", "b에할당"));

// 객체에 메서드(객체 프러퍼티의 함수를 메서드라고 함) 할당

const fffObj = {
    name: 'jhun',
    func: function () {
        return '30 old';
    }
}
const fffObj2 = {
    name: 'jhun',
    func() {
        return '30 old';
    }
}

console.log(fffObj.func());
console.log(fffObj);
console.log(fffObj2.func());
console.log(fffObj2);


// this 선언 , 사실 메서드는 this 키워드를 가지는 내부 함수를 뜻함. 객체지향의 method를 좀 따라하려고 하는듯
const fffObj3 = {
    name: 'jhun',
    func() {
        return `${this.name} 's 30 old`;
    }
}

console.log(fffObj3.func());

const oooooo = {
    name: 'julie',
    greetBackward: function () {
        const self = this;


        function getReverseName() {
            let nameBackward = '';
            for (let i = self.name.length - 1; i >= 0; i--) {
                nameBackward += self.name[i];
            }
            return nameBackward;
        }
        return `${getReverseName()} == ${this.name} == ${self.name}`;

    }

};

console.log(`ㅂㅂㅂㅂ${oooooo.greetBackward()}`);

// page 180 잠시 휴식

// 자바스크립트 싱글 스레드

// 보통은 익명함수를 씀, 내부 함수에 이름을 정하는 경우는 재귀를 돌리거나 gg 객체 안에서 호출하기 위함
const gg = function f(stop) {
    console.log(`ff started`);
    if (stop) {
        console.log('f stopped')
        return;
    };
    f(true);
};

gg(false);


const f1 = function() {return "hello"};
const f2 = () => "hello";
const f3 = name => `hellp ${name}`;
const f4 = (a,b) => a+b;

console.log(f3('iw.jhun'));
console.log(f4(1,2));



// 람다식을 쓰면 this가 내부에서 외부로도 접근이 가능해진다.
const hahaha = {
    name : 'iw.jhun',
    greetBackward : function(){
        const getReverseName = () => {
            let nameBackWards= '';
            for(let i = this.name.length-1; i >=0; i--){
                nameBackWards += this.name[i];
            }
            return nameBackWards;
        };
        return `${getReverseName()} si eman ym, hello`;
    }
};

console.log(hahaha.greetBackward());
