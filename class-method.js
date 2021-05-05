class Hero {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
    getPower() {
        if (this.power) {
            return this.power;
        }
        return 'I have no power';
    }
    isAvenger(value) {
        if (this.power && value > 500) {
            console.log(this.getPower())
        }
        return 'I am an Avenger';
    }
}
const hulk = new Hero('Hulk', 'Smash');
console.log(hulk.getPower());
const ironMan = new Hero('IronMan');
console.log(ironMan.getPower());

const captainAmerica = new Hero('CaptainAmerica', 'Fight');
console.log(captainAmerica.isAvenger(1000));