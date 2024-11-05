//Imediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB Connected`);
})
//to call this function we just write:
();

//---To Write Arror Function Using IIFE---
( () => {
    console.log(`DB Connected Two`);
})
();

//---To declare a varaible in Arror Funcion:
((name)=>{
    console.log(`DB Connecter Two ${name}`);
})
('Abdul Basit');