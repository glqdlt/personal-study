// 간단한 함수를 만듬. 자바스크립트에서는 서브루틴(함수) 라고 표현함. 자바에서는 메서드라고 하고, 엑셀에서는 메크로 라고도 함.


function isCurretYearLeapYear() {
    const year = new Date().getFullYear();
    if (year % 4 !== 0) {

        return false;
    } else if (year % 100 != 0) {
        return true;
    } else if (year % 400 != 0) {
        return false;
    } else {
        return true;
    }
}

const daysInMonth = [isCurretYearLeapYear() ? 29: 28,31,30,31,30,31,31,30,31,30,31];

console.log(daysInMonth);


// 순수 함수에 대한 이야기

const color = ['red', 'orange', 'yellow', 'green'];
let colorIndex = -1;


// 이 함수는 두 가지 잘못이 있음, 입력이 같아도 결과가 항상 다르고, 변수 colorIndex를 바꾸는 부수효과(side effect) 까지 있음.
function getNextRainbowColor(){
    if(++colorIndex >= colors.length){
        colorIndex = 0;
        return colors[colorIndex];
    }
}


// 이 함수를 진정한 캬 함수로 바꾸려면 어케해야하나
// if 문의 블록{} 은 생략한다, 귀찮다.

// 이 함수는 이제 입력에 따라 결과를 예상 할 수 있고, 다른 부수적인 짓거리는 안하므로 순수한 함수라고 볼 수 있다.
function isLeapYear(year){
    if(year %4 !== 0) return false;
    else if(year % 100 != 0) return true;
    else if(year % 400 != 0) return false;
    else return true;
}

// 아직 까진 미완성 함수
const getNextRainbowColor = (function(){
    const colors = ['red','orange','yellow','green'];
    let colorIndex = -1;

    return function(){
        if(++colorIndex >= colors.length) colorIndex =0;
        return colors[colorIndex];
    }

})();

//완벽한 순수 함수, next 라는 메소드를 호출해야지만 colors 가 바뀐다. 또한 다른 곳에서 getRainbow 를 호출하더라도 독립적인 이터레이터가 생성되어 서로 간섭이 일어나질 않는다.
function getRainbowIterator(){
    const colors = ['red','orange','yellow','green'];
    let colorIndex = -1;
    return {
        next(){
            if(++colorIndex >= colors.length) colorIndex =0;
            return {value:colors[colorIndex], done:false };
        }
    }
}