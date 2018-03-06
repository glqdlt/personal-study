// var i;
// for (i = 5; i >= 0; i--) {
//     setTimeout(function () {
//         console.log(i === 0 ? "go!" : i);
//     }, (5 - i) * 1000);
// }

// -1 -1 -1 -1 뜬다.


function loopBody(i) {
    setTimeout(function () {
        console.log(i === 0 ? "go" : i);
    }, (5 - i) * 1000);
}
var i;
for(i=5;i>=0;i--){
    // loopBody(i);
    (function(x){
        setTimeout(function(){
            console.log(x===0 ? "go!": x);
        }, (5-i)* 1000 );
    })(i);   // 여기에 })(i)  의 i는 익명함수 function(i) 에 값을 넘겨줄 인자 i 즉 밖의 i-- 되는 i의 값을 뜻한다.
}


// let 선언을 이용해서 스코프를 블록 스코프로 바꾸었다.

for(let i=5 ; i>= 0; i--){
    setTimeout(function(){
        console.log(i===0 ? "go!": i);
    }, (5-i) * 1000);
}