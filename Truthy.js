//-----To Check the Lenght of an array-----

const userEmail = []

// if (userEmail.length === 0 ) {
//     console.log("Array is Empty");
// }


//---To Check if an Object is Empty-------
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}

//---Nullish Coalescing Operator (??): null undefined

let val1;
//val1=5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
//val1 = null ?? 10 ?? 20

// console.log(val1);

//--Terinary Operator------
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("Less than 80") : console.log("More than 80");