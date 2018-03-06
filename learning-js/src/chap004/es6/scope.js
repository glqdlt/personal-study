
// jhun 은 전역 스코프
let jhun = {
    name: "jhun",
    age: 30
}




// block1 , block2 는 블록 스코프
{
    //block 1

    const x = 'blue';
    console.log(x);

}

// console.log(x); // x is not defined

{
    //block 2
    const x = 3;
    console.log(x);
}

// 중첩 블록 그리고, 변수 숨김 (variable masking)

{
    const x = 3;
    console.log(`첫번째 ${x}`);
    {
        const x = '하하';
        console.log(`내부 블록 ${x}`);
    }
    console.log(`다시 첫번쨰 ${x}`);
}


//194 page 휴식

{
    // external block
    let x = {color:"blue"};
    let y = x;
    let z = 3;
    {
        // inner block
        let x = 5;
        console.log(x); // inner x
        console.log(y.color); // external x
        y.color="red";
        console.log(z);
    }
    console.log(x.color);
    console.log(y.color);
    console.log(z);
}

// 클로져

let globalFunc;


// globalFunc 와  blockVar 가 선언된 inner block 은 완전 다른 차원의 존재인데, inner block 에서 globalFunc에 붙게 되면서 접근을 할 수 있음,
// 블록 스코프 안에서 글로벌 함수 또는 외부 함수를 정의하면 해당 스코프의 관계는 좁아(클로징) 된다고 해서 클로져임


{
    let blockVar = 'inner var';
    globalFunc = function(){
        return blockVar;
    }
}

console.log(globalFunc());


let fff;

{
    let o = {note: 'safe'};
    fff = function(){
        return o;
    }

}



console.log(fff().note);
let oRef = fff();

oRef.note = 'not safe';

console.log(oRef);