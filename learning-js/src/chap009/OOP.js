class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];

    }

    shift(gear) {
        if (this.userGears.indexOf(gear) < 0) {
            throw new Error(`Invalid gear: ${gear}`);
        }
        this.userGear = gear;
    }
}


const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");

console.log(typeof car1);
console.log(car1 instanceof Car);

car1.shift('D');
car2.shift('R');

console.log(car1.userGear);
console.log(car2.userGear);

car1.shift('R');
console.log(car1.userGear);
// car1.shift('HAHA'); // error throw, 그러나 car1.userGear = 'HAHA' 로 직접 접근하는 문제는 못 막음.

console.log(`last: ${car1.userGear}`);


class SuperCar {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._userGears = ['P', 'N', 'R', 'D'];
        this._userGear = this._userGears[0];

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

const car4 = new SuperCar('Hyundai', 'avante');
console.log(car4.userGear);

console.log(car4.shift('N'));

console.log(car4.userGear);

console.log(car4._userGear);


//weakmap ?? 이게 뭔지 모르곘다 책의 231에 나ㅣ오는 내용인데, 나중에 공부 해야할듯.

const hyperCar = (function () {

    const carProps = new WeakMap();

    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this._userGears = ["P", "N", "R", "D"];
            carProps.set(this, {userGear: this._userGears[0]});
        }

        get userGear() {
            return carProps.get(this).userGear;
        };

        set userGear(val) {
            if (this._userGears.indexOf(val) < 0) {
                throw new Error(`Invalid gear : ${val}`);
            }
            carProps.get(this).userGear = val;
        }
        shift(gear) {this.userGear = gear;};
    }

})();

const car5 = hyperCar;
console.log(car5.shift('P'));