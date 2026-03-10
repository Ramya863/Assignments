// Logical AND (&&) - Returns true if both operands are true
const a = 10;
const b = 20;
const c = 30;

console.log("Logical AND:");
console.log(a<b && b<c); // false
console.log(a < c); // true
console.log(a < b && b < c); // false

// Logical OR (||) - Returns true if at least one operand is true
console.log("\nLogical OR:");
console.log(a<b || b>c);  // true
console.log(b < c || c < b); // false
console.log(b < c || c < a ); // true

// Logical NOT (!) - Returns the opposite boolean value
console.log("\nLogical NOT:");
console.log(!a); // false
console.log(!b); // true
console.log(!c); // false

// Combined example
console.log("\nCombined:");
console.log((a && c) || !b); // true
console.log(!(a && b) && c); // true