// Array of student names
let students: string[] = ["Suresh", "Mahesh", "Naresh"];

// Array of student marks
let marks: number[] = [75, 80, 82];

//creating an array to store the updated marks after adding 10 to each mark
let updatedMarks: number[] = [];
let total: number = 0;
let index: number = 0;


//using normal for loop to iterate through the marks array, add 10 marks to each student

for (let i:number = 0; i < marks.length; i++) {
    updatedMarks[i] = marks[i] + 10;
    total = total+ updatedMarks[i]; 
   //just to check whether value is increased by 10 marks
   // console.log(updatedMarks[i]);
   
}
//total marks of all students after adding 10 marks to each student
console.log(total);

console.log("Updated Marks:");

//using for...of loop to iterate through the students and updatedMarks arrays and print
 
for (let name of students) {
    console.log(name + ": " + updatedMarks[index]);
    index++;
}

//using normal for loop to iterate student marks and print values
/*for (let i = 0; i < students.length; i++) {
    console.log(students[i] + ": " + updatedMarks[i]);
}*/

let average:number = total / updatedMarks.length;
console.log("Average Marks: " + average);