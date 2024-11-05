//Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol,BigInt

const score = 100 //value will be determined as number
const scoreValue = 100.3 //value will be determined as number

const inLoggedIn = false //value will be false (boolean)
const outsideTemp = null //value will be null
let userEmail; //value will be undefined

const id= Symbol('123') 
const anotherId = Symbol('123') //the value of id and anotherId will not be same

//console.log(id === anotherId); //the result will be false

const bigNumber = 33475878347384738n // 'n'  will make the number into bigInt


//Reference (Non primitive)

//Array, Object, Function

const heros = ["IronMan", "Captain America" , "Thor"]; //Array
let myObj = { //Object
    name : "Abdul Basit",
    age : "21",
}

const myFunction = function(){ //Function
    console.log("Hello World");
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack (Primitive), Heap (Non-Primitive)

// let myYoutubename = "Gamming"

// let secondName = myYoutubename

// secondName = "NewGamming"

// console.log(myYoutubename);
// console.log(secondName);

let Ali = {
    email: "ali@gmail.com",
    id: 58413 ,
}

let Basit = Ali 
Basit.email = "basit@gmail.com"

console.log(Ali.email);
console.log(Basit.email);

