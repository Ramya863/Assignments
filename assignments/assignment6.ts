
// Array has multiple numbers to check
let numbers: number[] = [7, 25,1];

// Loop through each number in array
for (let n of numbers) {

    //Assume the number is true initially
    let isPrime: boolean = true;

    // Check if number is less than or equal to 1
    if (n <= 1) {
        isPrime = false;
        console.log(n + " is not prime number");
    } else {
        // Check divisibility
        for (let i:number = 2; i < n; i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
         console.log( n + " is a prime number");
    }

    
}