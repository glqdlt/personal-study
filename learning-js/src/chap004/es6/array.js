const arr1 = [1, 2, 3];
arr1[3] = 5;
console.log(arr1);

const arr = ["b", "c", "d"];
// push 는 마지막 배열에 값을 push 하고 return 은 arr.length
console.log(arr.push("e"));
// pop은 마지막 배열의 값을 제거, return은 제거된 값
console.log(arr.pop());
console.log(arr.pop());
// unshift 는 push 의 맨 앞 버전
console.log(arr.unshift("a"));
// pop의 맨 앞 버전
console.log(arr.shift());

// concat은 대상 배열의 끝에 여러 요소를 추가한 '사본' 을 return 함

console.log(arr1.concat(arr));  // [1,2,3,5,"b","c"]
console.log(arr1); // [1,2,3,5]
console.log(arr1.concat(5, 6, 67)) // [1,2,3,5,5,6,67]

// slice는 배열 대상의 위치 값 뒤의 값들만 return , 양수는 왼쪽에서 오른쪽으로 , 음수는 오른쪽에서 왼쪽으로 자름
const arr4 = [1, 2, 3, 4, 5];
console.log(arr4.slice(3)); //[4,5] arr4는 그대로

// splice 는 배열을 자유롭게 수정

const arr6 = [1, 5, 6];
console.log(arr6.splice(arr6.length, 0, 1, 5, 6, 7, 8)); // arr6의 lenth 끝부터 start 시작한다, '0' 은 start한 위치부터 삭제할 대상들의 갯수 없으면 0 으로 함, 1,5,6,7,8 은 add할 값들
console.log(arr6);

//copyWithin 은 es6에서 생김,  이건 좀 어렵다 나중에 찾아봐야겠음

// fill도 es6 에서 생김, 이건 배열에 해당 값으로 가득 채움

const arr7 = new Array(5).fill(1);
console.log(arr7);
console.log(arr7.fill("b")); // [b,b,b,b,b]
console.log(arr7.fill("c", 1)); // [b,c,c,c,c]

// reverse는 말 그대로 배열 뒤집기
console.log(arr7.reverse());
console.log(arr7);

//sort는 정렬
console.log(arr7.sort());

// sort를 이용한 객체 정렬하기, 노하우

const arr8 = [{name: 'suzan'}, {name: 'jim'}, {name: 'trevor'}];

arr8.sort(); // 정렬 안됨
console.log(arr8);

arr8.sort((a, b) => a.name > b.name); // 각 배열의 name 프로퍼티의 첫글자 알파벳 순서대로 정렬
console.log(arr8); // wow 정렬됨
arr8.sort((a, b) => a.name[1] > b.name[1]); // 각 배열의 name 프로퍼티의 두번째 알파벳 순서대로 정렬
console.log(arr8); //wow

const o1 = {name: "jerry"};
const arr9 = [1, 5, "a", o1, true, 5];
console.log(arr9.indexOf(o1)); // 3
console.log(arr9.indexOf(1)); //0
console.log(arr9.indexOf(true, 4)) // 4번쨰 순서 부터 찾기 시작해라는 것 // 4

console.log(arr9.findIndex(f => f.name === 'jerry')); // 더 detail 한 find를 할 수 있음,

console.log(arr9.find(f => f.name === 'jerry')); // find는 위치가 아니라 대상의 값을 return; // o1

class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}

Person.nextId = 0;

const jamie = new Person("Jamie"), juliet = new Person("Juliet"), peter = new Person("Peter");

console.log(`jamie: ${jamie.id}, juliet : ${juliet.id} , peter : ${peter.id}`);

//class 와 find 를 이용한 객체 비교
const arr10 = [juliet, jamie, peter];

console.log(arr10.find(p => p.id === juliet.id));
console.log(arr10.findIndex(p => p.id === juliet.id));


//some 은 조건에 맞으면 true를 반환 조건을 못찾으면 false를 반환

const arr11 = [5, 7, 12, 15];
console.log(arr11.some(x => x % 2 === 0)); // true; 짝수를 찾는 것 2로 나누어서 0이 되는게 있나 ? 없나? //12

// every 는 some과 같지만, 배열의 모든 내용이 true여야함

console.log(arr11.every(x => x % 2 === 0)); // false

const arr12 = [2, 4, 6];
console.log(arr12.every(x => x % 2 === 0)); //true


//page 214 휴식