// for or loop
//["","",""]
//[{},{},{}]
const arr =[1,2,4,5,6]
for(const iterator of arr){
    console.log(iterator)
    
}
const greetings = "Hello World";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps
const map = new Map();
map.set('In',"India");
map.set('USA',"United States of America")
map.set('Fr','France');
//console.log(map);
for (const [key,value] of map) {
    console.log(key , value)
}
const myObj = {
    'game1':'nfs',
    'game2':'Spiderman'
}
//for (const [key,value] of myObj) {
//    console.log(key+"        "+value);  
//}
