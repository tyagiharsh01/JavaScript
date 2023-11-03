//const email = "harshtyagi@gmail.com"
const email = ""
const emailArray =[];
const emailObj={}
if(email){
    console.log(`${this.email}`)
}
else{
    console.log("Not an email")
}
// falsey values
// false,0,-0,BigInt 0n,"",null,undefiend,NaN

//truthy values
// "0","false"," ",[],{},function(){}
if(emailArray.length===0){
    console.log("Array with zero length")
}
if(Object.keys(emailObj).length===0){
    console.log("emailObj with zero length")
}
// Nullish colasing Opreator (??) :null and undefined
//let val1 =5??10
//let val1 = null??10
let val1;
//val1 = undefined??15
val1 = null ?? 20??15
console.log(val1)
//ternary Opreator
//condition?true statement :false statement
const iceTeaPrice = 100;
iceTeaPrice>80?console.log("more than 80"):console.log("less than 80")