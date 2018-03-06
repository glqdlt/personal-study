//ES5 에서 Class 생성

function Car(make, model) {
    this.make = make;
    this.model = model;
    this._userGears = ['P', 'N', 'R', 'D'];
    this._userGear = this.userGears[0];
};


// es5 와 es6 의 차이, 생성자는 일부러 생략 , page 232 에 오탈자 있음. function Es5Car {} 라 되어있는데 function Es5Car(){} 라 해야함.
class Es6Car {
};

function Es5Car() {
};

// 프로토타입과 동적 디스패치 에 대해 이해해야한다.


class SuperCar {


    //정적 메서드, id값 자동으로 할당해주는것
    static getNextVin(){
        return this.nextVin++;
    }

    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._userGears = ['P', 'N', 'R', 'D'];
        this._userGear = this._userGears[0];
        this.vin = SuperCar.getNextVin();

    }


    // arg 로 받는 car1, car2 객체의 model와 make가 같은지 체크하는 것
    static areSimilar(car1, car2){
        return car1.make === car2.make && car1.model === car2.model;
    }

    // vin 이라는 고유의 id값이 같은지 체크하는 정적메서드.
    static areSame(car1, car2){
        return car1.vin === car2.vin;
    }


    get userGear() {
        return this._userGear
    };

    set userGear(val) {
        if (this._userGears.indexOf(val) < 0) {
            throw new Error(`Invalid gear: ${val}`);
        }
        this._userGear = val;
    }

    //shift 메서드는 SuperCar 안에서 쓸수있는 '프로토타입 메서드' 라고 말한다.
    shift(gear) {
        this.userGear = gear;
    }
}


const car1 = new SuperCar("Kia","k5");
const car2 = new SuperCar("hyundai","avante");
car1.shift('N'); // Car.prototype.shift; 와 같은 말이다. 실제로 car1 안의 method 중에 shift라는 메서드는 없다. 하지만 car1 은 SuperCar의 객체이므로, SupserCar의 메서드 중에서 shift를 검색해서 사용가능하게 하는 것. 이것이 동적 디스패치 라고 한다.
console.log(car1.userGear);

car1.shift = function(x){return `${x}Wahahaha`};

console.log(car1.shift('qweqwe'));  // car1.shift 라는 메서드(return wahahaha 해주는거)를 새로 정의했으므로, 이제 Supercar의 프로토타입 메서드에 접근을 할수가없다.
console.log(car1.userGear);

console.log( car1.shift === car2.shift);
console.log(car2.shift === SuperCar.prototype.shift);


car2.shift('R');

console.log(car1.userGear);
console.log(car2.userGear);

// TODO car1.shift 를 원래 SuperCar().prototype.shift 로 되돌리려면 어떻게 해야할까?

// 지금까지 본 것은 인스턴스 메서드라고 한다, 이제부터 클래스메서드 (정적 메서드) 에 대해서 알아보자.

SuperCar.nextVin = 0;

const superCar1 = new SuperCar("Tesla","S");
const superCar2 = new SuperCar("Tesla","3");
const superCar3 = new SuperCar("Tesla","3");

console.log(superCar1.vin);
console.log(superCar2.vin);
console.log(superCar3.vin);

const superCar4 = new SuperCar("Tesla","4");
console.log(superCar4.vin);

console.log(SuperCar.areSimilar(superCar1,superCar2));
console.log(SuperCar.areSimilar(superCar3,superCar2));

console.log(SuperCar.areSame(superCar2, superCar2));
console.log(SuperCar.areSame(superCar2, superCar3));