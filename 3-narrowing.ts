type padding = number|string;

function padLeft(padding: padding, input:string):string {
    if(typeof padding === "number") {
        return `${" ".repeat(padding)}${input}`;
    }

    return `${padding}${input}`;
};

console.log(padLeft(10, "alchexmist"));
console.log(padLeft("$".repeat(10), "alchexmist"));

// "in" operator.
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void; };

function move(animal: Fish|Bird|Human) {
    if("swim" in animal) {
        return animal;
    }

    return animal;
};

// instanceof operator.
let myArray = [1, 2, 3];
function isArray(obj:any):boolean {
    return (obj instanceof Array)? true: false;
};

console.log(isArray(myArray));

// never (type) representa un estado que nunca debe existir.
