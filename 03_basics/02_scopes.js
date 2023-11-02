// let var const
//let a = 10;
//const b = 20;
var c = 300;
let a = 3000;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("Inner " +a)
}
console.log(a)
//console.log(b)
//console.log(c)

//nestedscope

function one(){
    username ="harsh"
    function two(){
        const website = "harsh.com"
        console.log(username)
    }
//    console.log(website);
//    two()
}
//one()
if(true){
    const username = "Harsh"
    if(username =="Harsh"){
        const website =" linkedin"
//        console.log(username + website);
    }
//    console.log(website);
   
}
 //console.log(username);

//++++++++++++++++++intersting+++++++++++++++++++++++
console.log(Add(20))
function Add(num1){
    return num1+1;
}
console.log(addTwo(2,2))
const addTwo = function (num1,num2){
    return num1+num2;
}
