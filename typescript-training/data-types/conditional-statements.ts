// Example 1: if statement
let age: number = 25;

if (age >= 18) {
    console.log("You are an adult");
}

// Example 2: if...else statement
let score: number = 45;

if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Example 3: if...else if...else statement
let grade: string = "B";

if (grade === "A") {
    console.log("Excellent");
} else if (grade === "B") {
    console.log("Good");
} else if (grade === "C") {
    console.log("Average");
} else {
    console.log("Below Average");
}

// Example 4: switch statement
let day: number = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Other day");
}

// Example 5: ternary operator
let isRaining: boolean = true;
let activity: string = isRaining ? "Stay indoors" : "Go outside";
console.log(activity);