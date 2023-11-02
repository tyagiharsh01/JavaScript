function sayMyName (){
    console.log("Harsh")
}
sayMyName();
function add (number1,number2){
    return number1+number2
    
}
function isloggedIn(username="Sam"){
    if(username===undefined){
        console.log("please enter a username")
        return;
    }
    else{
        return `${username} just logged in`
    }
}
 const sum =add(4,5);
//console.log(isloggedIn("Harsh"))
//console.log(isloggedIn())


function calculateCartPrice (val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000))
const user ={
    username:"Harsh",
    price :599
}
function  handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user);

const arr =[100,2000,300,400];
function returnSecondValue (getarray){
    return getarray[1];
}
console.log(returnSecondValue(arr));