
// Array has multiple numbers to check
let numbers: number[] = [7, 25,1];

// Loop through each number in array
for (let num of numbers) {

    //Assume the number is true initially
    let isPrime: boolean = true;

    // Check if number is less than or equal to 1
    if (num <= 1) {
        isPrime = false;
        console.log(num + " is not prime number");
    } else {
        // Check divisibility
        for (let i:number = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
         console.log( num + " is a prime number");
    }

    
}