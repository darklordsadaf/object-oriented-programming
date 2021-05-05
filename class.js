class PenDrive {
    constructor(capacity, color, price,) {
        this.capacity = capacity;
        this.color = color;
        this.price = price;
    }
}

const hp = new PenDrive('8GB', 'Silver', 560);
console.log(hp);

const transcend = new PenDrive('32GB', 'Black');
console.log(transcend);


function Perfume(quantity, price) {
    this.quantity = quantity;
    this.price = price;
}

const fogg = new Perfume('250ml', 450);
console.log(fogg);