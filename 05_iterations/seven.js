const nums  = [1,2,3,4,5,6,7,8,9,10];
let newNums = nums.map((item)=>item+10)
newNums = nums.map((item)=>item*10).map((num)=>num+1).filter((num)=>num>=40)
console.log(newNums);