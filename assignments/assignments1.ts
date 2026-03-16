/*1. Temperature of a city in degrees Celsius: 25.5,
 Declare a variable for temperature in degrees Celsius */

let temperature : number = 25.5;
console.log(temperature);

/*2. Whether a customer has placed an order: true or false 
Declare a variable for customer order status */

let PlacedOrder : boolean = true;
console.log(PlacedOrder);

let order2 : boolean = false;
console.log(order2);

/*3.Person's phone number: "123-456-7890"
Declare a variable for the phone number */
let phoneNumber : string = "123-456-7890";
console.log(phoneNumber);

/* trying with union data type
let phoneNumber : string | number = "123-456-7890";
console.log(phoneNumber);*/

/*4.Amount of money in a customer's bank account: 1000.50
Declare a variable for bank account balance */

//let bankAccountBalance : number = 1000.50;
//console.log(bankAccountBalance);

//trying with function

function bankAccountBalance(): number {     
let balance: number = 1000.50;
return balance;
}
console.log(bankAccountBalance());


/*5.Person's email address: "john.doe@example.com"
Declare a variable for the email address */
let emailAddress : string = "john.doe@example.com";
console.log(emailAddress);

/*trying with object 
interface email{
address: string;
}
let emailAddress: email = {
address: "john.doe@example.com"
};
console.log(emailAddress);*/

/*6.Coordinates of a location (latitude, longitude): 37.7749, -122.4194
Declare variables for latitude and longitude */

/*let latitude : number = 37.7749;
let longitude : number = -122.4194;
console.log(latitude, longitude);*/

 //creating an object for coordinates
interface coordinates{
latitude: number;
longitude: number;
}   
let local: coordinates = {
latitude: 37.7749,
longitude: -122.4194
};
console.log(local);

/*7.Person's marital status: true or false
Declare a variable for marital status */
let maritalStatus : boolean = true;
console.log(maritalStatus);

/*8.Person's occupation: "Software Engineer"
Declare a variable for the occupation */
let occupation : string = "Software Engineer";
console.log(occupation);

/*9.Person's favourite colour: "Blue"
Declare a variable for the favourite colour */
let favouriteColour : string = "Blue";
console.log(favouriteColour);

/*10. Current year: 2023
Declare a variable for the current year */
let currentYear : number = 2023;
console.log(currentYear);

/*11. Number of followers on a social media platform: 1,000,000
Declare a variable for the number of followers */
let followers : string = "1,000,000";
console.log(followers);

/*12.Rating of a movie: 7.5
Declare a variable for the movie rating */
let movieRating : number = 7.5;
console.log(movieRating);

/*13.Person's blood type: 'A'
Declare a variable for the blood type */
let bloodType : string = 'A';
console.log(bloodType);

//trying with any date type but not recommended, just a sample eg
let bloodType2 : any = 'A';
console.log(bloodType2);

/*14.Title of a book: "To Kill a Mockingbird"
Declare a variable for the book title */
let bookTitle : string = "To Kill a Mockingbird";
console.log(bookTitle);


/*15.Number of employees in a company: 500
Declare a variable for the number of employees */
let employee : number = 500;
console.log(employee);

/*16.Time of an event: 2:30 PM
Declare a variable for the event time 
let eventTime : string = "2:30 PM";
console.log(eventTime);*/

//trying with union data type
let eventTime : string | number = "2:30 PM";
console.log(eventTime);

/*17.Name of a country: "United States"
Declare a variable for the country name */
let country : string = "United States";
console.log(country);

/*18.Person's eye color: "Brown"
Declare a variable for the eye color */
let eyeColor : string = "Brown";
console.log(eyeColor);

/*19.Person's birthplace: "New York City"
Declare a variable for the birthplace */
let birthplace : string = "New York City";
console.log(birthplace);

/*20. Distance between two cities: 200.5 kilometers
Declare a variable for the distance */
let distance : number = 200.5;
console.log(distance);