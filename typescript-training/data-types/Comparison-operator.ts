// Comparison Operators in TypeScript

// Equality Operators is used to compare two values for equality. It returns true if the values are equal, and false otherwise.
console.log(5 == 5);    // true (loose equality)
//console.log(5 === "5");   // false (strict equality)

// Relational Operators is used to compare two values and determine their relative order. It returns true or false based on the comparison.
console.log(10 > 5);      // true
console.log(10 < 5);      // false
console.log(10 >= 10);    // true
console.log(10 <= 5);     // false

// Logical Operators is used to combine multiple boolean expressions and return a single boolean value based on the logical relationship between them.
console.log(true && false);   // false
console.log(true || false);   // true
console.log(!true);           // false

// Conditional (Ternary) Operator is used to evaluate a condition and return one of two values based on whether the condition is true or false.
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);          // Adult

// Typeof Operator is used to determine the type of a value.
console.log(typeof 42);       // number
console.log(typeof "hello");  // string
console.log(typeof true);     // boolean
console.log(typeof undefined);// undefined