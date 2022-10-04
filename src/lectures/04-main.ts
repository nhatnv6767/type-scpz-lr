export function isPositive(n: number) {
    return n > 0;
}

interface Student {
    id: string;
    name: string;
    gender: "male" | "female";
    age: number;
}