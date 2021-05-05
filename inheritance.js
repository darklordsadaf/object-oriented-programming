class SmartDevice {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    charging() {
        console.log('I am charging');
    }
}

class Phone extends SmartDevice {
    constructor(name, price, camera) {
        super(name, price);
        this.camera = camera;
    }
    sendSms() {
        console.log('I am sending SMS');
    }
}

class Tablet extends SmartDevice {
    constructor(name, price, wifi) {
        super(name, price);
        this.wifi = wifi;
    }
}

class Watch extends SmartDevice {
    constructor(name, price, distance) {
        super(name, price);
        this.distance = distance;
    }
}


const samsung = new Phone('Samsung', 45000, '64MP');
console.log(samsung);
samsung.charging();
samsung.sendSms();

const ipad = new Tablet('Apple', 90000, true);
console.log(ipad);
ipad.charging();
// ipad.sendSms();