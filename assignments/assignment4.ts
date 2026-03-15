// Bank Transactions Program using Conditional Statements and Loops

// Store all transaction amounts in an array
// Positive values represent Credit transactions
// Negative values represent Debit transactions
let transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

// Variables to count number of credit and debit transactions
let creditCount: number = 0;
let debitCount: number = 0;

// Variables to store total credited and debited amounts
let totalCredit: number = 0;
let totalDebit: number = 0;

// Variable to count suspicious transactions
let suspiciousCount: number = 0;

// Loop through each transaction in the array
for (let i:number = 0; i < transactions.length; i++) {

    // Store current transaction amount
    let amount:number = transactions[i];

    // Check if the transaction is Credit (positive value)
    if (amount > 0) {

        // Increase credit transaction count
        creditCount++;   

       // Add amount to total credited amount
        totalCredit += amount;     

        // Check if credit transaction exceeds 10000 (suspicious)
        if (amount > 10000) {
            console.log("Suspicious credit Transaction with Amount: " + amount);
            // Increase suspicious transaction count
            suspiciousCount++;     
        }

    } 
    // Otherwise it is a Debit transaction
    else {
        // Increase debit transaction count
        debitCount++;
        // Add amount to total debited amount
        totalDebit += amount;       

        // Check if debit transaction exceeds -10000 (suspicious)
        if (amount < -10000) {
            console.log("Suspicious debit Transaction with Amount: " + amount);
            // Increase suspicious transaction count
            suspiciousCount++;      
        }
    }
}

// Calculate remaining balance in bank account
// Remaining balance = Total Credit + Total Debit
let balance = totalCredit + totalDebit;

// Print total number of credit and debit transactions
console.log("Total Credit Transactions: " + creditCount);
console.log("Total Debit Transactions: " + debitCount);

// Print total credited and debited amounts
console.log("Total Amount Credited: " + totalCredit);
console.log("Total Amount Debited: " + totalDebit);

// Print final remaining balance in account
console.log("Remaining Balance in Account: " + balance);

// Print total number of suspicious transactions
console.log("Total Suspicious Transactions: " + suspiciousCount);