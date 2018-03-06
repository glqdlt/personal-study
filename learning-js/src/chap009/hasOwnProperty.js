class Super {
    constructor() {
        this.name = 'Super';
        this.isSuper = true;
    }
}

// 권장하지 않는다고 함, 예제를 위해서..
Super.prototype.sneaky = 'not recommended!';

class Sub extends Super {
    constructor() {
        super();
         this.name = 'sub';
         this.isSub = true;
    }

    tostring(){
        return `${this.name} , ${this.isSub}`;
    }

}

const obj = new Sub();
for(let p in obj){
    console.log(`${p} : ${obj[p]}` + (obj.hasOwnProperty(p) ? '' : ' (inherited'));
}
console.log(Super.prototype.sneaky);

console.log(Object.keys(obj)); // Object.keys 를 하면 프로토타입에 체인된 프로퍼티를뺼 수 있다, 즉 sneaky 가 호출되지 않는다.
console.log(Object.keys(obj)[0]); // Object.keys 를 하면 프로토타입에 체인된 프로퍼티를뺼 수 있다, 즉 sneaky 가 호출되지 않는다.
console.log(Object.keys(obj)[1]); // Object.keys 를 하면 프로토타입에 체인된 프로퍼티를뺼 수 있다, 즉 sneaky 가 호출되지 않는다.
console.log(obj.isSuper);

// tostring override 는 자바랑 비슷하네
console.log(obj.tostring());