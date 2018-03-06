

console.log("before timeout:"+ new Date());

function f(){
    console.log("After timeout:"+ new Date());
}

setTimeout(f, 60*1000); // 1분  f라는 이름 있는 함수를 callback 함수로 줬다, 보통은 익명함수로 많이 씀 setTimeout(function() { ~~~~} , 60 * 1000) ; 이 되것지.
// 그리고 f, 60*1000의 60*1000은 지연 매개변수라고 한다고 함, 보통 대부분 기본적으로 함수의 마지막 인자(arg) 로 받는다고 한다

console.log("1 happen after setime out!");
console.log("Me too");


