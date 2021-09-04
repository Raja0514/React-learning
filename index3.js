// required javascript skills  for react

// 1.var ,let and constant

// 2.objects

// 3."this" keyword and bind

// 4.arrow functions

// 5.Array functions

// 6.De-Structuring

// 7.Sperad Operator

// 8.Class

// 9.inheritance

// 10.async and await

//varibles delcaration  ----var ,let and const

//var

//definition :

// var is function scope or global scope we can access anywhere in the program

// function printNum(){

//     for(var i=0;i<=3;i++){

//         console.log(i);
//     }

//     console.log(i);
// }

// printNum();

//============================================================================================
//let

//definition:

//let is a block scope we can access only inside block we can access in the anyehere in the program

// function printNum1(){

//     for(let i=0;i<=3;i++){

//         console.log(i);
//     }

//     console.log(i);
// }

// printNum1();

//===========================================================================================

//const

//definition:

//const also same like let block scope and read only

// function printNum(){

//     const x=0;
//         x=15;
//     if(x==15){
//         console.log("yes");
//     }

//          else {

//             console.log("no");

//         }

// }
// printNum();

//objects

//definition:

// objects is nothing but key value ,the key value it can be anything string or number or char

// this traditional way to declare the function

// const person = {
//   firstname: "raja",
//   lastname: "mathiyalagan",
//   getname: function () {
//     console.log(this);
//   },
// };

// console.log(person.firstname);

// console.log(person.lastname);

// person.getname();

// this new way es6 to declare function

// const person = {
//   firstname: "raja",
//   lastname: "mathiyalagan",
//   getname(){
//     console.log(this);
//   },
// };

// console.log(person.firstname);

// console.log(person.lastname);

// const key="lastname";

// person.getname();

// console.log(person[key]);

// following way we can get object key and values.

// console.log(object.keys(person));

// console.log(object.values(person));

//bind
// const person = {
//   firstname: "raja",
//   lastname: "mathiyalagan",
//   getname() {
//     console.log(this);
//   },
// };

// const name1 = person.getname.bind(person); //note:here i write getname to call this function from person obj

// name1();

// //--------------------------------

// const person2 = {
//   firstname: "raja",
//   lastname: "mathiyalagan",
// };

// const name2 = person.getname.bind(person2); //note:here also i write getname but i dont have a getname function in obj

// name2();

//Arrow function

//syntax  ()=>{}

// we can call fat arrow function

// const person = {
//   firstname: "alajmi marble",
//   lastname: "al maha marble",
//   getname() {
//     setTimeout(function () {   // here we are using normal function 
//       console.log(this);
//     }, 3000);
//   },
// };

// person.getname();

//interview question diff b/w arrow function and normal function

// in the setTimeout == arrow func do not overwrite (this) operator its point out object key value
// in the setTimeout == normal function overwrite (this)  operator its give output  window object
// here we are not using function keyword
//

const person2 = {
  firstname: "alajmi marble",
  lastname: "al maha marble",
  getname() {
    setTimeout( ()=> {      // here we are using arrow function
      console.log(this);
    }, 3000);
  },
};

person2.getname(); 
