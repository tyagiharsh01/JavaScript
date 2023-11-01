//singleton



// Object literal

const mySymbol = Symbol("key1")
const user = {
    name:"Harsh",
    [mySymbol]:"key1",
    "full name": "Harsh Tyagi",
    age:"22",
    location:"Noida",
    email:"harsh@gmail.com",
    isLoggedIn:false,
    lastLoginDays : ["Monday","friday"]
}
//console.log(user.email);
//console.log(user["email"]);
//console.log(user["full name"])
//console.log(typeof  user[mySymbol])
user.email = "harsh@chatgpt.com"
//Object.freeze(user);
user.location = "Sharanpur";
//console.log(user);

user.greeting = function (){
    console.log("Hello How are you?")
}
user.greetingTwo = function (){
    console.log(`Hello ${this.name} How are you?`)
}

console.log(user.greeting());
console.log(user.greetingTwo());