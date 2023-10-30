const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);


// const concatArray = marvel_heros.concat(dc_heros);
//console.log(concatArray);

const allheros = [...marvel_heros,...dc_heros]

//console.log(allheros);

const newArr = [1,2,3,[5,4,6],6,[7,6,[4,5]]]

const realAnotherArray = newArr.flat(Infinity)
//console.log(realAnotherArray);

console.log(Array.isArray("Harsh"));
console.log(Array.from("Harsh"));
console.log(Array.from({name:"Harsh",age:22})); //interseting

let score1 =100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));