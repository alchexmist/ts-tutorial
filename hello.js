"use strict";
console.log('Hello, Albert!');
function greet(id, person, date) {
    console.log(`Hello, ${person} with id: ${id}, today is ${date}`);
}
greet(1, "Albert", new Date());
function double(x) {
    console.log(2 * x);
}
;
double(3.14);
// Evitar errores de comprobación de tipos: any
let obj = { name: "albert" };
console.log(obj.name);
console.log(obj.surname);
