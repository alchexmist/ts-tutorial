class Point {
    readonly x: number;
    readonly y: number;
    readonly name: string;
    readonly alias!: string; // Not initialized, but no error.

    constructor(x: number, y:number, name="unknown", alias?:string) {
        this.x = x;
        this.y = y;
        this.name = name;
        if(alias !== undefined)
            this.alias = alias;
    }
}

// Super calls.
class Base {
    k = 0;
}

class Derived extends Base {
    constructor() {
        super();
    }
}

// Index signatures
class MyClass {
    [s:string]: boolean | ((s: string) => boolean);

    check(s: string) {
        return this[s] as boolean;
    }
}

// Type-only field declarations.
interface Animal {
    dateOfBirth: any;
}
interface Dog extends Animal {
    breed: any;
}
class AnimalHouse {
    resident: Animal;
    constructor(animal: Animal) {
        this.resident = animal;
    }
}
class DogHouse extends AnimalHouse {
    // Does not emit JavaScript code,
    // only ensures the types are correct
    declare resident: Dog;
    constructor(dog: Dog) {
        super(dog);
    }
}

// Default: public
// protected members are only visible to subclasses of the class they’re declared in.
// private
// Static members can also use the same public, protected, and private visibility modifiers.
// Static members are also inherited.

// Static blocks
//class Foo {
//    static #count = 0;
// 
//    get count() {
//        return Foo.#count;
//    }
// 
//    static {
//        try {
//            const lastInstances = loadLastInstances();
//            Foo.#count += lastInstances.length;
//        }
//        catch {}
//    }
//}

// Generic classes
//The static members of a generic class can never refer to the class’s type parameters.
// Arrow Functions

//Arrow functions (MDN)
//If you have a function that will often be called in a way that loses
//its this context, it can make sense to use an arrow function property
//instead of a method definition.

//Classes, methods, and fields in TypeScript may be abstract.