class Animal {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
}

class Dog extends Animal {
    constructor(name, color, loyalty){
        super(name, color);
        this.loyalty = loyalty;
    }
}

class GoldenRetreiver extends Dog {
    constructor(name, color){
        super(name, color, 100)
    }
}

let myAnimal = new Animal("Parrot");

let otherAnimal = function otherAnimal(name){
    this.name = name;
}

let myOtherAnimal = new otherAnimal("Monkey");

console.log(myAnimal);
console.log(myOtherAnimal);


let obj = {
    firstName: "edward",
    lastName: "teach",
    moniker: "blackbeard",
    age: 44
}

console.log(obj.firstName);

console.log(Object.keys(obj));

for(let key of Object.keys(obj)){
    // console.log(key);
    // console.log(obj[key]);

    console.log(`${key}: ${obj[key]}`)
}
