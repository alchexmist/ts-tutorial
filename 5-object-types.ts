// Interfaces
interface Person {
    name: string;
    age: number;
}

function customGreet(person: Person):string {
    return `Hello, ${person.name}`;
}

console.log(customGreet({name: "alchexmist", age: 45}));

// Types
type Person2 = {
    name: string;
    age: number;
};

function customGreet2(person: Person2): string {
    return `Hello, ${person.name}, ${person.age}`;
}

const me: Person2 = {name: "alchexmist", age: 45};

console.log(customGreet2(me));

// Property modifiers: type, readonly, optional(?).
interface ReadonlyPerson {
    readonly name: string,
    readonly age: number,
}

let me2: ReadonlyPerson = {
    name: "alchexmist",
    age: 45
};

console.log(me2.name, me2.age);

// Index signatures: No se conoce el nombre de las propiedades
// pero sí los valores. Se usa una "index signature" para describir
// los tipos de los valores.
// object.property es análogo a object["property"];
interface StringArray {
    [index:number]: string;
}
const myArray0:StringArray = ["a", "ab", "abc"];
const myArray0Item = myArray0[0];
console.log(myArray0Item);

interface NumberOrStringDictionary {
    readonly [index:number]: number|string;
    length: number;
    name?: string;
}

const myArray1:NumberOrStringDictionary = [1, 2, 4];
myArray1.name = "Mis números";
console.log(`${myArray1.name} length: ${myArray1.length}`);

// Extending Types.
interface BasicName {
    firstName: string;
}
interface FullName extends BasicName {
    lastName: string;
}
////
interface  Colorful {
    color: string;
}
interface Circle {
    radius: number;
}

// Union types.
type ColorfulCircle2 = Colorful&Circle;

// Generic object types
interface Box<Type> {
    contents: Type;
}
let box: Box<string>;

interface ArrayCustomizedType<Type> {
    lenght: number;
    pop():Type|undefined;
    push(...items: Type[]):number;
}

// Tipo ReadonlyArray: describe arrays que no deben ser modificados.
// No tiene constructor. Se asignan arrays regulares a ReadonlyArray.
const roArray: ReadonlyArray<number> = [1, 2, 3];

// Tuples
type StringNumberTuple = [string, number];

function printStringNumberTuple(t: StringNumberTuple) {
    const [name, id] = t;
    console.log(`(${name}, ${id})`);
}

let myTuple:StringNumberTuple = ["alchexmist", 1];
printStringNumberTuple(myTuple);