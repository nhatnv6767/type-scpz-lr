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


// function not return value