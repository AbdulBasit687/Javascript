//To invoke a function Directly we can use:

// ----Tt is the simple method of declaring and executing a function
function Basit(){
    console.log(`Hello Basit`)
}
Basit();

//----this is the direct invoke funtion
(function Name(){
    console.log(`My name is Abdul Basit`)
})
();

//----Array Function can also be written in this format
( () => {
    console.log(`This is an Arrow Function`);
}
)
();

//---If we want to declare a Varaible in Arrow Function We can use
((Height) => {
    console.log(`The Persons Height is ${Height}`);
})
('6 Feet');

//----------- Varaible Object Declaration:
let Ali = {
    email: "ali@gmail.com",
    id: 58222,
}
//--by assign the value of Ali to Basit,their attribute values are changes accordingly

let Basit = Ali
Basit.email = "basit@gmail.com"

console.log(Ali.email);
console.log(Basit.email);
