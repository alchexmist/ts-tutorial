"use strict";

console.log('Hello, Albert!');

function greet(id: number, person: string, date: Date) {
    console.log(`Hello, ${person} with id: ${id}, today is ${date}`);
}

greet(1, "Albert", new Date());

function double(x: number) {
    console.log(2 * x);
};

double(3.14);

// Evitar errores de comprobación de tipos: any
let obj: any = { name: "albert" };
console.log(obj.name);
console.log(obj.surname);

function getFavoriteNumber():number {
    return Math.random();
}

console.log(`My favorite number is ${getFavoriteNumber()}`);