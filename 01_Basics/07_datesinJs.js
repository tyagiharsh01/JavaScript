let myDate =new Date();
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate);
console.log(myCreatedDate.toString());
const birthDate = new Date("2000-01-14")
const birthDate1 = new Date("2000-07-14")
console.log(birthDate1.toLocaleString());

let timeStamp = Date.now();
console.log(timeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.round(Date.now()/1000));
//getMonth()
//getDate()
//getHours()
const anotherDate = new Date();
console.log(anotherDate.toLocaleString("default",{
    weekday:"long"

}));