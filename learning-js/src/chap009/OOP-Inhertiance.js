
class Vehicle{
    constructor(){
        this.passengers = [];
        console.log("Vehicle created");
    }
    addPassenger(p){
        this.passengers.push(p);
    }
}

class Car extends Vehicle{
    constructor(){
        super();
        console.log("Car created");
    }
    deployAirbags(){
        console.log("BWoosh");
    }
}

const v = new Vehicle();
v.addPassenger("Frank");
v.addPassenger("Judyy");
console.log(`v:  ${v.passengers}`);

const c = new Car();
c.addPassenger("Alice");
c.addPassenger("Cameron");
console.log(` c: ${c.passengers}`);
console.log(`v:  ${v.passengers}`);

c.deployAirbags();
// v.deployAirbags(); // error


class Motorcycle extends Vehicle{

}
const m = new Motorcycle();
console.log(c instanceof Car);
console.log(m instanceof Motorcycle);
console.log(m instanceof Vehicle);
