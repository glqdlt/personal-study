const moment = require('moment-timezone');


const before = {d: new Date()};
console.log(before.d instanceof Date); //
// TODO page 324 에 date 라고 되어있는 오타있음.

const json = JSON.stringify(before);
const after = JSON.parse(json);
console.log(after.d instanceof Date);
console.log(typeof after.d);

after.d = new Date(after.d);
console.log(after.d instanceof Date);


const dd = new Date(Date.UTC(1930, 4, 10));
console.log(dd.toLocaleDateString());
// console.log(dd.toLocaleFormat());  //TODO 없는 펑션
console.log(dd.toLocaleTimeString());

console.log(moment(dd).format("YYYY-MM-DD"));


const d1 = new Date(1996, 2, 1);
const d2 = new Date(2009, 4, 26);

console.log(d1 > d2);

const msDiff = d2 - d1;
const daysDiff = msDiff / 1000 / 60 / 60 / 24;
console.log(`dayDiff: ${daysDiff}`);


let m = moment()
    .add(10, 'hours')
    .subtract(3, 'days')
    .endOf('month');
console.log(`m: ${m}`);
console.log(`fromNow: ${m.fromNow()}`);