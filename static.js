class Animal {
    static category = 'Dog';
    location = 'Dhaka';
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    static compare(animal1, animal2) {
        if (animal1.speed > animal2.speed) {
            return `${animal1.name} is faster.`
        }
        return `${animal2.name} is faster.`
    }
}

const myRat = new Animal("Rat", 155);
const myDog = new Animal("Dog", 90);
// console.log(myRat.category);
// console.log(myRat.location);
// console.log(Animal.category);
// console.log(Animal.location);

console.log(Animal.compare(myRat, myDog));