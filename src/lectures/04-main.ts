export function isPositive(n: number) {
    return n > 0;
}

interface Student {
    id: string;
    name: string;
    gender: "male" | "female";
    age: number;
}

function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(5, 10))

