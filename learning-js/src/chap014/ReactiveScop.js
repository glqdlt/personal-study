function countdown() {
    console.log("Countdown:");
    // let i; 이 때하면 -1 -1 -1 -1 이 나온다, 이유는 callback 은 자기를 호출한 스코프에서 클로져를 찾을 수 있기 때문이다, 이게 무슨 말이냐면 let i 가 블록 스코프를 가지더라도 setTimeout 안의 익명함수 go1 을 찍는 함수의 
    //스코프에는 해당되지 않는다. 그래서 콜백이 마지막에 i 를 찍을 때 이미 for(5 ,4 ,3 ,2 ,1 ) 을 찍고 마지막에 남은 -1 를 호출시점에 찍는 것이다.
    // for 안에서 let i 를 선언하면, i 는 콜백을 호출한 시점의 i 를 알게 되므로, i ??? 안으로 아 ㅅㅂ 헷갈려 멀랑
    for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
            console.log(i === 0 ? "Go1" : i);
        }, (5 - i) * 1000);
    }
    ;
}

countdown();