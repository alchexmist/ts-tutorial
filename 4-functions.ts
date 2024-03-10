type greetFunction = (msg:string) => void;

let greeterF = (m: string) => m;

function greeter(m:greetFunction) {
    console.log(m("alchexmist"));
}

greeter(greeterF);

type DescribableFunction = {
    description:string;
    (someArg:number):boolean;
};

describableFunction.description = "default description";
function describableFunction(someArg:number):boolean {
    return someArg>5;
}

function doSomething(f:DescribableFunction) {
    console.log(`${f.description} ${f(7)}`);
}

doSomething(describableFunction);

// Generic functions (signature)
// Type liga el tipo de entrada con el de salida.
function firstElement<Type>(array:Type[]): Type | undefined {
    return array[0];
}

console.log(firstElement(['Alchexmist', 'flipflop']));

function map<Input, Output>(array: Input[], f: (arg: Input) => Output): Output[] {
    return array.map(f);
}

const parsed = map(["1", "2", "3"], (x) => parseInt(x));
console.log(parsed);

// Constraints
function longest<Type extends { lenght: number } > (a: Type, b: Type) {
    if(a.lenght >= b.lenght) {
        return a;
    }
    else {
        return b;
    }
};
