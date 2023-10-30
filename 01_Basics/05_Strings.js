const name ="Harsh"
const repoCount = 10;
console.log(name+repoCount+"Value");
console.log(`Hello ,my name is ${name} and my total repo on github is ${repoCount}`);
const gameName = new String("Harsh game Harsh");
//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//uppercase()
//lowerCase()
console.log(gameName.charAt(6));
console.log(gameName.indexOf('g'));
let newGameName = gameName.substring(0,4) // it starts from zero
console.log(newGameName);
let sliceString = gameName.slice(-10,4)
console.log(sliceString);
let trimString  = " Harsh   ";
console.log(trimString);
console.log(trimString.trim());
const url ="https://localhost:3306/harsh%20Tyagi"
//url.replace('%20','-') 
console.log(url.replace('%20','-'));
console.log(url.includes('harsh'));
const words = gameName.split(' ');
console.log(words);
