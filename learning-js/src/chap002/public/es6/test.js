// es6 style on
'use strict';

// es 6 기능 : 객체 분해
const sentences = [
    {subject: 'Javascript', verb: 'is', object: 'great'},
    {subject: 'Elephants', verb: 'are', object: 'large'}
];

// es6 기능: 객체 분해

function say({subject, verb, object}) {
    // es6 기능: 탬플릿 문자열
    // 아래 사용한 것은 따옴표가 아니라 백틱(`), 을 사용

    console.log(`${subject} ${verb} ${object}`);
}

//es6 기능 for..of

for (let s of sentences) {
    say(s);

}

