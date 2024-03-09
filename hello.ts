"use strict";

console.log('Hello, Albert!');

function greet(person: string, date: Date) {
    console.log(`Hello, ${person}, today is ${date}`);
}

greet("Albert", new Date());