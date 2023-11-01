//const yPayUser = new Object(); // Singleton object
const yPayUser = {} // normal object
yPayUser.id = "123abc",
yPayUser.name = "Samu",
yPayUser.isLoggedIn = false;

 const regularUser = {
     email:"harsh@gmail.com",
     fullName :{
         userFullname:{
             firstName:"Harsh",
             lastName : "Tyagi"
         }
     }
 }
console.log(regularUser.fullName.userFullname.firstName);
 const obj1 ={
     1:"a",
     2:"b"
 }
const obj2 ={
     3:"c",
    4:"d"
 }
//const obj3 ={obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2);
 const obj3 = {...obj1,...obj2};
console.log(obj3)
const users  =[
    {
        id:1,
        name:"harsh"
    },
    {
        id:1,
        name:"harsh"
    }
]
console.log(Object.keys(yPayUser))
console.log(Object.values(yPayUser))
console.log(Object.entries(yPayUser))
console.log(yPayUser.hasOwnProperty('name'))