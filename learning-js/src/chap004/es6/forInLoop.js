'use strict';

const player = {name: 'Thomas', rank: 'Midshipman', age: 25};

for (let prop in player) {

    if (!player.hasOwnProperty(prop)) continue;

    console.log(prop + ':' + player[prop]);

}


const hand = ['s1', 's2', 's3'];


// for of 는 이터러블 객체에 모두 사용 할 수 있는 범용적인 루프 라고 한다.. 이게 머셔?
for(let face of hand)
    console.log(`You rolled ... ${face}!`);

for(let i = 0 ; i < hand.length ; i++){
    console.log(`You rolled.. ${i} : hand == ${hand[i]}`)

}



