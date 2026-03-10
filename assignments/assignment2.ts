// simple loan approval system based on various criteria
let creditScore: number = 700;      
let income: number = 60000;         
let isEmployed: boolean = true;    
let dtiRatio: number = 35;          

// Step 1: Check if credit score is greater than 750
// If yes, the loan is automatically approved
if (creditScore > 750) {
    console.log("Loan Approved (High Credit Score)");
}

// Step 2: If credit score is between 650 and 750,
// additional checks are required related to income
else if (creditScore >= 650 && creditScore <= 750) {

    // Step 3: Check if the applicant's income is at least $50,000
    if (income >= 50000) {

        // Step 4: If income requirement is satisfied,
        // check whether the applicant is employed
        if (isEmployed) {

            // Step 5: If the applicant is employed,
            // check the Debt-to-Income (DTI) ratio
            if (dtiRatio < 40) {
                // If DTI ratio is less than 40%, loan is approved
                console.log("Loan Approved");
            } else {
                // If DTI ratio is 40% or greater, loan is denied
                console.log("Loan Denied (DTI ratio too high)");
            }

        } else {
            // If the applicant is unemployed, loan is denied
            console.log("Loan Denied (Customer unemployed)");
        }

    } else {
        // If income is less than $50,000, loan is denied
        console.log("Loan Denied (Income less than $50,000)");
    }

}

// Step 6: If credit score is below 650,
// the loan is automatically denied
else {
    console.log("Loan Denied (Credit score below 650)");
}