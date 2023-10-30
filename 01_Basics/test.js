console.log("Harsh");
const obj1 = { a: 1, b: 2,c:4 };
const obj2 = { b: 3, c: 4,a:3,d:4 };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject)
const array1 = [1, 2];
const array2 = [3, 4];
const concatenatedArray = [...array1, ...array2];
console.log(concatenatedArray)