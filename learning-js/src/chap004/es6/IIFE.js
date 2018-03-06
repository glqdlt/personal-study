//IIFE 즉시 실행 함수
const message = (function () {
    const secret = "i'm a secret";
    return `The secret is ${secret.length} characters long`;
})();

let closers;

const f = (function () {
    let count = 0;
    return function () {
        return `i have been called ${++count} times`;
    }

})();

console.log(f());
console.log(f());
