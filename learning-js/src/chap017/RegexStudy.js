const input = "As I was going to Saint Ives";
console.log(input.startsWith("As"));
console.log(input.endsWith("Ives"));
console.log(input.startsWith("going",9)); // 9번째 문자부터 뒤짐
console.log(input.endsWith("going",14)) // 14문자열이 끝이라고 생각함
console.log(input.indexOf("going"));

//기본적으로 대소문자를 가리므로..

console.log(input.toLowerCase().startsWith("as"));
console.log(input.replace("going","walking")); // input 이 replace되는 것은 아니고, copy 된 데이터가 return 된 것일뿐.. 자바스크립트에서 string 은 불변객체이다.

const re1= /going/; // 단축형 정규식
const re2 = new RegExp("going"); // re1 하고 같음, 이건 정석적인 생성자를 호출해서 만든 경우.

const re = /\w{3,}/ig;  // 세글자이상인 단어를 찾음.

console.log(input.match(re));
console.log(input.search(re)); // 매치되는 첫번째 단어의 자리를 return
console.log(re.exec(input)); // next 되는  형태
console.log(re.exec(input)); // next 되는 형태
console.log(re.exec(input));
console.log(re.exec(input));
console.log(re.exec(input));
console.log(re.exec(input));
console.log(re.exec(input));
console.log(re.test(input));

const htmlText = '<link rel="stylesheet" href="http://insecure.com/stuff.css">';

const matches = htmlText.match(/(?:https?)?\/\/[a-z][a-z0-9]+/ig);
console.log(matches);


// chapter 017 은 정규식을 다루는 내용이다, 정규식은 이전 정규식 관련 서적도 있고 하므로 가볍게 읽고 넘겼다. 바로 chapter 018 로 넘어간다.

