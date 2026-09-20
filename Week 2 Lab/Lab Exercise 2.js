//COMP 3123 - FUllSTACK DEVELOPMENT 1 - LAB 2
//MACKENZIE HODGSON 101597352

//Exercise 1
console.log()
console.log("EXERCISE 1 ----------------------------")

const getter = (myArray, counter) => {
    const greetText = 'Hello ';

    for (let name of myArray) {
        console.log(`${greetText}${name}`);
    }
};

getter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

//Exercise 2

console.log()
console.log("EXERCISE 2 ----------------------------")

const capitalize = (str) => {
    const [first, ...rest] = str;
    return first.toUpperCase() + rest.join('');
};

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

//Exercise 3

console.log()
console.log("EXERCISE 3 ----------------------------")

const colors = ['red', 'green', 'blue'];

const capitalizedColors = colors.map(capitalize);

console.log(capitalizedColors);

//Exercise 4

console.log()
console.log("EXERCISE 4 ----------------------------")

const values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20);

//Exercise 5

console.log()
console.log("EXERCISE 5 ----------------------------")

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, number) => total + number, 0);
const product = numbers.reduce((total, number) => total * number, 1);

console.log('Sum:', sum);
console.log('Product:', product);

//Exercise 6

console.log()
console.log("EXERCISE 6 ----------------------------")

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`Model: ${this.model}, Year: ${this.year}`);
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    displayBalance() {
        console.log(`Balance: $${this.balance}`);
    }
}

const sedan = new Sedan('Toyota Camry', 2020, 25000);

sedan.displayInfo();
sedan.displayBalance();