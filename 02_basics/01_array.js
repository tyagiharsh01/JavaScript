//array
const arr = [1,2,3,4,5,6];
const myHeros = ['Shaktiman','Ironman','batman']
const arr2 = new Array(1,3,4,6,2)
//console.log(arr);


//ArrayMethods--
//arr.push(6);
//arr.push(10);
//arr.pop();
//arr.unshift(9)
//arr.shift()
console.log(arr);
//console.log(arr.includes(9));
//console.log(arr.indexOf(3));
const myarr = arr.join();
console.log(myarr);
console.log(typeof myarr);

const myArr = [0, 1, 2, 3, 4, 5]
// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


