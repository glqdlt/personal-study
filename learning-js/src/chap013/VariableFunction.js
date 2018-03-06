function addThreeSquareAddFiveTakeSquareRoot(x) {

    return Math.sqrt(Math.pow(x + 3, 2) + 5);
}

// 별명을 쓰기 전
const answer = (addThreeSquareAddFiveTakeSquareRoot(5) + addThreeSquareAddFiveTakeSquareRoot(2)) / addThreeSquareAddFiveTakeSquareRoot(7);


// 별명을 쓰면 이렇게 됨.

const f = addThreeSquareAddFiveTakeSquareRoot;
// addThreeSquareAddFiveTakeSquareRoot() 괄호를 붙이면 함수를 호출하는 것이 되어서, 함수의 결과를 저장하게 됨.

const answer2 = (f(5) + f(2)) / f(7);

console.log(answer2);


// 배열 안의 함수

const sin = Math.sin;
const cos = Math.cos;
const theta = Math.PI / 4;
const zoom = 2;
const offset = [1, -3];

const pipeline = [
    function rotate(p) {
        return {
            x: p.x * cos(theta) - p.y * sin(theta),
            y: p.x * sin(theta) - p.y * cos(theta)
        };
    }, function scale(p) {
        return {x: p.x * zoom, y: p.y * zoom};
    }, function translate(p) {
        return {x: p.x + offset[0], y: p.y + offset[1]};
    }
]

const p = {x: 1, y: 1};

let p2 = p;
for (let i = 0; i < pipeline.length; i++) {
    p2 = pipeline[i](p2);
    console.log(p2);
    console.log(p);
}

// 함수를 배열에 선언해서 워킹set 같은 것을 만들고, 객체를 한꺼번에 각 function 에 의해 처리되게 할 수 있따. 올ㅋ


//함수 에 함수를 전달하는 개념
// sum 이라는 함수를 만들었다고 치자, 그런데 숫자의 제곱을 sum에서 반환해야하는 함수가 필요하다면? 함수를 또 만들면 된다. 그런데, 세제곱을 합해서 반환하는 함수도 필요하다면 꼬리에 꼬리를 문다면


function sum(arr, f) {
    if (typeof f != 'function') {
        f = x => x
    }
    ;
    return arr.reduce((a, x) => a += f(x), 0);
}

console.log(sum([1, 2, 3]));
console.log(sum([1, 2, 3], x => x * x));
console.log(sum([1, 2, 3], x => Math.pow(x, 3)));

//우앙 ㅋ굳ㅋ 쩐당


// 함수를 반환하는 함수

function newSummer(f){
    return arr => sum(arr,f);
}

const sumOfSquares = newSummer(x => x*x);
const sumOfCubes = newSummer(x => Math.pow(x,3));
console.log(sumOfSquares([1,2,3])); // 위에  console.log(sum([1, 2, 3], x => x * x)); 햇던 익명함수와 똑같은 결과
console.log(sumOfCubes([1,2,3])); // 위에 console.log(sum([1, 2, 3], x => Math.pow(x, 3))); 똑같은 결과

// 이것처럼 매개변수 여러 개를 받는 함수를 매개변수 하나로만 받는 함수로 바꾸는 것을 '커링' 이라고 부른다, 어원은 하스켈 커리의 이름을 딴 것.



// 재귀 함수

function findNeedle(haystack){
    if(haystack.length ===0) return "no haystack here";
    if(haystack.shift() === 'needle') return "found it!";
    return findNeedle(haystack);
}
console.log(findNeedle(['hay','hay','ay','needle','hay']));


// 재귀 함수에는 언제나 exit 구문이 있다, 여기서는 n 을 계속 -1 하면서 n ===1 될 때 return 1로 탈출 하는 데, 마지막 return은  if(n ===1)이 됨에 따라 단순하게, return n * 1 ; 이 되어버리면서 종료된다.
function fact(n){
    if(n ===1 )return 1;
    return n * fact(n-1);
}

console.log(fact(4));