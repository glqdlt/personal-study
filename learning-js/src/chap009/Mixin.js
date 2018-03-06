class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}


class InsurancePolicy {
    constructor(name) {
        this.name = name; 
    }
}

const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();

function makeInsurable(o) {
    o[ADD_POLICY] = function (p) {
        this[_POLICY] = p;
    }
    o[GET_POLICY] = function () {
        return this[_POLICY];
    };
    o[IS_INSURED] = function () {
        return !!this[_POLICY];
    };
}


makeInsurable(Car);

const car1 = new Car();
// car1.addInsurancePolicy(new InsurancePolicy()); // error   Car 자체를 보험 클래스로 mixin 하려는 개념은 틀렸음.

const car2 = new Car();
makeInsurable(car2);
car2[ADD_POLICY](new InsurancePolicy("운전자보험")); // 작동한다.
console.log(car2[_POLICY].name); // car2 안에 InsurancePolicy 클래스의 name이 같이 상속된것을 알수 있다.
console.log(Object.keys(car2));


// page 244 휴식