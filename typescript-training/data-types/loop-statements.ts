// For loop - iterates a specific number of times
for (let i:number= 0; i < 5; i++) {
    console.log("For loop iteration:", i);
}

// While loop - continues while condition is true
let count = 0;
while (count < 3) {
    console.log("While loop:", count);
    count++;
}

// Do-while loop - executes at least once, then checks condition
let num = 0;
do {
    console.log("Do-while loop:", num);
    num++;
} while (num < 2);

let fruits:string[] = ["Apple", "Banana", "Cherry"];
// For...of loop - iterates over iterable objects (like arrays)
for (let i=0; i < fruits.length; i++) {
    console.log("For...of loop:", fruits[i]);

}

let colors: string[] = ["Red", "Green", "Blue", "Yellow"];
for (let color of colors) {
    console.log("Color:", color);
}