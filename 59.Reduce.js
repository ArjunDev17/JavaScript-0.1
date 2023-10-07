console.log("JAi Shree Ram:reduce Method");
const arr=[1,2,3,4]
const add=12;

const areduce=function(accumalator,currentValue) {
    return accumalator+currentValue
}
console.log("------------------------");
const rd2=arr.reduce(areduce)
console.log(rd2);
console.log("------------------------");
const sum=arr.reduce(function(accumalator,currentValue){
    return accumalator+currentValue
})
console.log(sum);
//-----------------------------------
console.log("using Arrow method :");
 const afSum=arr.reduce((accumalator,currentValue)=>{
    return accumalator+currentValue
 },100)
 console.log(afSum);

//  --------------------------------------------
const emp=[
    {id:101,sal:4},
    {id:102,sal:9},
    {id:103,sal:1}
]

const totalSal=emp.reduce((acc,salary)=>{
    return acc+salary.sal
},0)
console.log(totalSal);