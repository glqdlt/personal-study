const x = 19.51;
console.log(x.toFixed(3));
console.log(x.toFixed(2));
console.log(x.toFixed(1));
console.log(x.toFixed(0)); // 반올림 개념

console.log(Math.PI);


console.log(Math.pow(2, 3)); // 8  2의 3제곱근
console.log(Math.sqrt(16)); // 4 제곱근
console.log(Math.cbrt(27)); //3 세제곱근
console.log(Math.cbrt(8)); //2;


console.log(Math.abs(55.5)); //55.5 절대값구하는것
console.log(Math.abs(-55.5)); //55.5 절대값

console.log(Math.sign(-10.5)) // 음수인지 양수인지 판단, 음수 = -1 , 양수 = 1 , 0 = 0; // -1;
console.log(Math.trunc(7.7)); // 7  소수점 버리기 반올림 안하고
console.log(Math.trunc(-5.8)); // -5;  소수점 버리기 반올림안하고

console.log(Math.round(7.2)); // 반올림 하기
console.log(Math.round(-7.7)) ;

console.log(Math.min(1,2,3,4,5,6)); // 아규먼트중에 가장 작은 값 
console.log(Math.max(1,2,3,4,5,6)); // 아규먼트중에 가장 큰 값

console.log(Math.random()); // 0이상 1미만
