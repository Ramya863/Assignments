//initialization 
const a=10; //const can be changed after declaration
let b;
var c;

//redeclaration
 //a=30;
 b=40;
 c=50;
 console.log(a);
 console.log(b);
 console.log(c);

 //reassigning
// const a= "ramya"-> cant be redeclared when it is const
 //let b="sree"; -> cant be redeclared when it is let
 var c="training" //always declarable
 console.log(a);
 console.log(b);
 console.log(c);

 //Scope:
 { const x=100;
    let y=200;
    var z=300;
   console.log(x);
   console.log(y);
    console.log(z);

 }
/*console.log(x);
 const is block scoped, cant be accessed outside the block
 console.log(y);
let is block scoped, cant be accessed outside the block*/

console.log(z);// var is function scoped, can be accessed outside the block

