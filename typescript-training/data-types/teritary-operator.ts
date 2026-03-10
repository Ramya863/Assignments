// Example 1: Simple eligibility check
const age1: number = 25;
const isEligibleToVote1: string = age1 >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log(isEligibleToVote1); // Output: Eligible to vote

// Example 2: Check with citizenship status
const age2: number = 16;
const isCitizen: boolean = true;
const votingStatus: string = age2 >= 18 && isCitizen ? "Can vote" : "Cannot vote";
console.log(votingStatus); // Output: Cannot vote

// Example 3: Find max number
const num1: number = 45;
const num2: number = 78;
const maxNumber: number = num1 > num2 ? num1 : num2;
console.log(maxNumber); // Output: 78