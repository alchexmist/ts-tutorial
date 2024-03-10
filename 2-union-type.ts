function printID(id:number|string) {
    console.log(`Your ID is ${id}`);
};

printID(666);
printID("alchexmist");

function welcome(id: string|string[]|number) {
    if(typeof id === "string") {
        console.log(`Welcome, ${id.toUpperCase()}.`);
    } else if(Array.isArray(id)) {
        console.log(`Welcome, ${id.join(" & ")}.`);
    } else {
        console.log(`Welcome, ${id}.`);
    }
};

welcome(666);
welcome(['Jack', 'The Ripper']);
