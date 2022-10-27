// Object type
// @ts-ignore

// let singer = {};
//
// singer.name = "hello";


// let singer = {name: "Den Vau"};
//
// singer.name = "string";

// let singer: { name: string, age: number };
//
// // @ts-ignore
// singer.age = 24;
// // @ts-ignore
// singer.name = "bhnone"


// let actor: { name: string, age?: number } = {name: "Tome"}

// let array = [];
// array.push(3);
// array.push("string");
// array.push({name: "string", age: 24});

// string array
// let array2 = ["a", 'b', 'c'];
//
// // boolean array
//
// let array3: boolean[];
// // @ts-ignore
// array3.push(false);
//
// let blogs: { title: string, body: string }[]
// // @ts-ignore
// blogs.push({body: "", title: ""});


// FUNCTION

// function return value
const sum = (num1, num2) => {
    return num1 + num2;
}

sum("low", "bee")

const sum2 = (num1: number, num2: number) => {
    return num1 + num2;
}

type functionType = (number1: number, number2: number) => number;

const sum3: functionType = (num1, num2) => {
    return num1 + num2;
}


// function not return value

const hello = (): void => {
    console.log("Hello")
}


// Union
let size: string | number;
size = "XL"
size = 30;
// size = true;

let size1: string | string[];

// enum

enum Colors {
    RED = "RED",
    BLUE = "BLUE",
    GREEN = "GREEN",
}

let color = Colors.GREEN

// interface type

let actor: { name: string, age: number };

let singer: { name: string, age: number };


interface IPerson {
    name: string
    age: number
}

let exActor: IPerson;
let exSinger: IPerson;


// GENERIC TYPE

const hello_ge = <Type>(a: Type) => {
    console.log(a)
    return 3;
}

hello_ge<string>("string")


// Class

// class Car {
//     name: string
//     year: number
//
//     constructor(name: string, year: number) {
//         this.name = name;
//         this.year = year;
//     }
//
// }
//
// let car1 = new Car("Audi", 2021);
//
// car1.name = "Mercedes";


// private


class Car {
    name: string
    private year: number

    constructor(name: string, year: number) {
        this.name = name;
        this.year = year;
    }

}

let car1 = new Car("Audi", 2021);

car1.name = "Mercedes";
// car1.year