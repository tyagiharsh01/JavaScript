const myObj = {
    'JS':'JavaScript',
    'CPP':'C++',
    'RB':'Rubby',
    "SWIFT":"Swift by apple"
}
//for (const key in myObj) {
//   console.log(myObj[key]) 
//}
const programming =['js','ruby','python','java','cpp']
//for (const key in programming) {
//    console.log(programming[key])
//}
//Map is not iterable in javaScript 
const map = new Map();
map.set('In',"India");
map.set('USA',"United States of America")
map.set('Fr','France');
for (const key in map) {
    console.log(key)
}