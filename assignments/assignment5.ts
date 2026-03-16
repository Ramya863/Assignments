// Employee data: [Name, Base Salary, Experience, Rating]
let employees = [
  ["Alice Johnson", 75000, 5.1, 4.2],
  ["Bob Smith", 68000, 3.2, 3.8],
  ["Carol Davis", 82000, 7.1, 4.5],
  ["David Brown", 90000, 10.2, 2.5],
  ["Eva Green", 60000, 2.4, 3.5]
];

// Map to store EmployeeName -> Hike Percentage
let hikeMap = new Map<string, number>();

// Loop through employee records
for (let emp of employees) {

  let name = emp[0] as string;
  let salary = emp[1] as number;
  let exp = emp[2] as number;
  let rating = emp[3] as number;

  let variablePay = 0;
  let bonus = 0;
  let reward = 0;

  // Determine variable pay % and bonus based on rating
  if (rating >= 4.0) {
    variablePay = 15;
    bonus = 1500;
  } 
  else if (rating >= 3 && rating < 4) {
    variablePay = 10;
    bonus = 1200;
  } 
  else {
    variablePay = 3;
    bonus = 300;
  }

  // Extra reward for experience >= 5 years
  if (exp >= 5) {
    reward = 5000;
  }

  // Calculate hike
  let hike = (salary * variablePay / 100) + bonus + reward;

  // Calculate hike percentage
  let hikePercent = hike / salary;

  // Store result in Map
  hikeMap.set(name, hikePercent);
}

// Print results
console.log("Employees Hike Percentages:");
for (let [name, percent] of hikeMap) {
  console.log(name + " : " + percent.toFixed(3));
}