const bruce = {name: 'Bruce'};
const madeline = {name: 'Madeline'};


// call global method

function greet(){
    return `Hello, I'm ${this.name}`;
}

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}

console.log(update.call(bruce,1949,'singer')); // return 이 없어서 void 이니, undefined
console.log(bruce); //{ name: 'Bruce', birthYear: 1949, occupation: 'singer' }


// apply global method

update.apply(bruce,[1955,'actor']);
console.log(bruce); //{ name: 'Bruce', birthYear: 1949, occupation: 'singer' }
update.apply(bruce,[1956,'nurse','what?']); // what은 받을 arg 가 없다보니, 무시됨.
console.log(bruce); //{ name: 'Bruce', birthYear: 1949, occupation: 'singer' }


const arrNumbs = [2,4,-1,-5,15,7];
console.log(Math.min.apply(null,arrNumbs)); // Math.min 함수는 주어진 상황에서 가장 적은 숫자를 반환함, null 을 넘기는 것은 this에 null이 들어와도 동작하기 때문. 노 상관. // -5
console.log(Math.min(1,2,3,4,5,)); // 기본적으로 Math.min, Math.max 함수는 확산 연사자(...args)를 받을 수 있음.


// bind global method

const updateBruce = update.bind(bruce);
//update 펑션이 updateBruce로 전이되면서, 내부의 this 키워드가 bruce 객체만 보게 됨.
updateBruce(2007,"queen");
console.log(bruce);
updateBruce.call(madeline,1261,'king'); // madline 객체에 1261, king을 넣으려고 했으나 madline에 들어가지 않고, bruce에 강제로 적용.
console.log(madeline);
console.log(bruce); // 오히려 madeling 에 했던 것이 bruce에 들어옴


const updateBruce1949 = update.bind(bruce,1949); // update 함수가 updateBruce1949 로 바인드되면서, bruce를 this에 , birhYear 아규먼트에 1949를 강제로 지정, 이제 occupation 만 값을 받아들임

updateBruce1949("happyman");
console.log(bruce);
