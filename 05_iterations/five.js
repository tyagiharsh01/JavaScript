const coding = ['js','ruby','java','python','scala','dotnet']
//coding.forEach((item)=>{
//    console.log(item)
//})

//coding.forEach(function (item){
//    console.log(item)
//})
function printme (item){
    console.log(item);
}
//coding.forEach(printme)
coding.forEach((item,index,arr)=>{
    console.log(item + " "+ index+" "+arr)
})
const myCoding =[
    {
    languageName:"JavaScript",
    languageFile:".js"
    },
    {
        languageName:"Java",
        languageFile:".java"
    },
    {
        languageName:"Python",
        languageFile:".py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageFile);
    console.log(item.languageName)
//    console.log(item);
})