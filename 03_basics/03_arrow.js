const user ={
    username :"Harsh",
    price:999,
    welecomeMessage :function(){
        console.log(`${this.username}, welecome to website`)
        console.log(this)
    }
}
//user.welecomeMessage();
//user.username="Riya"
//user.welecomeMessage()
//console.log(this)
//function lassi (){
//    console.log(this)
//}
//lassi();
//const Lassi =   function lassi (){
//       console.log(this)
//}
//const lassi =()=>{
//    let  username = "Harsh"
//    console.log(this.username)
//}
//lassi();
//const addTwo =(num1,num2) =>{
//    return num1+num2;
//}
//const addTwo =(num1,num2) =>(num1+num2);
const addTwo =(num1,num2) =>({username :"Harsh Tyagi"});
console.log(addTwo(3,4))