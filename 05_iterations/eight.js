const myNums =[1,2,3];
let initalSum =0;
//let sum = myNums.reduce(function (acc,currval){
//    console.log(`Accumlator ${acc} and Current Value is ${currval}`)
//    return acc +currval
//},initalSum);
let myTotal = myNums.reduce((arr,curr)=>arr+curr,0)
console.log(myTotal);
const shoppingCart = [
    {
        courseName:"Js",
        price:999
    },
    {
        courseName:"Python",
        price:1000
    },
    {
        courseName:"Java",
        price:9999
    },
    {
        courseName:"Mobile development",
        price:11999
    }
]
intialSum =0;
let totalValue = shoppingCart.reduce((acc,item)=> acc+item.price,initalSum);
console.log(totalValue);
