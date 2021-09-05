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

//var=================================================================

//definition :

// var is function scope or global scope we can access anywhere in the program

// function printNum(){

//     for(var i=0;i<=3;i++){

//         console.log(i);
//     }

//     console.log(i);
// }

// printNum();

//let===============================================================================

//definition:

//let is a block scope we can access only inside block we can access in the anyehere in the program

// function printNum1(){

//     for(let i=0;i<=3;i++){

//         console.log(i);
//     }

//     console.log(i);
// }

// printNum1();

//const==================================================================================

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

//objects========================================================================

//definition:

//objects only have unique key and value

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

//bind and this keyword========================================================

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

//Arrow function================================================================

//syntax  ()=>{}

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
// we can write single line code

// const person2 = {
//     firstname: "alajmi marble",
//     lastname: "al maha marble",
//     getname() {
//       setTimeout( ()=> {      // here we are using arrow function
//         console.log(this);
//       }, 3000);
//     },
//   };

//   person2.getname();

// const key=()=>{
//     console.log("welcome");
// }
// key

// array functions=============================================
// 1.map
// 2.fillter

// const arr=[{name:"tamil", active:"true"},{name:"guvi",active:"false"}];

// console.log(arr.map((st) => "mr." + st.name));

// console.log(arr.filter((st)=>st.active==="true"));

// map=========

//definition :
//map is nothing but transforming new array
//filter is nothing but filter something from an array

//Destrcuturing=================================================

//normal function

// const person ={firstname:"guvi",lastname:"geeks"}

// const lname=person.fisrtname;

// const last1=person.lastname;

// console.log(lname,last1);

//object destructuring===============================================

// const{firstname,lastname}=person;  // note:in the obj destructuring we give {} brackts

// console.log(firstname,lastname);

// we can give alais name destructuring

// const{firstname:raja,lastname:kanna}=person;

// console.log(raja,kanna);

//array destructuring===================================================

// this normal array function

// const market=[{fish:"kingfisher"},{fish:"bron"}];

// const mar1=market[0];

// const mar2=market[1];

// console.log(mar1,mar2);

// array destrcturing

// const[mar1,mar2]=market;

// console.log(mar1,mar2);

// speard opeartor in object==========================

//definiton :

// speard is nothing but we are going to combine the objects or array

//const obj1 = { name: "guvi", age: 7 };

//const obj2 = { ...obj1, city: "omic marble",age:46 };

//const obj2={age:25,...obj1}

//console.log(obj2);

//spread opertor for array

// const arr1=[1,2,3,45,50];
// const arr2=[3,4,7,...arr1,9];
// console.log(arr2);

//async and await=========

//need to more clear i did not understand

//class==========

//definition:
//classes are a template for creating objects.
//another definition
//a javascript class is a blueprint for creating objects.

//in otherwords, ES6 classes are just special function.

// class person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }

//   getName() {
//     return `${this.firstname}${this.lastname}`;
//   }
// }

// const person1 = new person("tamil", "chennai");

// console.log(person1.getName());


