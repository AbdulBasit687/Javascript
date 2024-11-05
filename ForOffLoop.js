const arr = [1,2,3,4,5]

for (const value of arr) {
    // console.log(`The value of arr is ${value}`);
}

const greetings = "Hello Abdul Basit"
for (const greet of greetings) {
    // console.log(`Each Char is ${greet}`);    
}

const map = new Map()
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('FR',"France")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':-', value);
}

//if we declare any Object we can not use ForOffLoop
//Example:

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman',
    game3: 'CS:GO2'
}

for (const [key,value] of myObject) {
    console.log(key, ':-', value );
}

//----Hence it will be an error----So we use ForInLoop-------
