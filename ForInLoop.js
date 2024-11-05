const myObject = {
    js : 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = [ "js", "rb", "py" ]

for (const key in object) {
    // console.log(programming[key]);
}

//----forInLoop will not be use for arrays data fetching

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}
//forInLoop cannot be used for map varaible also