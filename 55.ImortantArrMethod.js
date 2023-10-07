console.log("Array Method");
//for each
//map
//filter
//reduce

const arr=[2,5,7,9,11]

function multiplication(index,value) {
    console.log(`index is ${index} and value is ${value} result is :${value*2}`);
}

// for (let index = 0; index < arr.length; index++) {
//    multiplication(index,arr[index]) 
// }
//above work done by for each loop
console.log("by for each");
arr.forEach(multiplication)

console.log("above work done by ANonymous Function");
arr.forEach(function(index,value) {
    console.log(`index is ${index} and value is ${value} result is :${value*2}`);

});
const stuE=[
    {sname:"a"},
    {sname:"b"},
    {sname:"c"}
]
stuE.forEach(function (obj) {
    console.log(obj.sname);
})

console.log("map method in JS");

const nums=[2,4,6,8]
function square(numberObj) {
    return numberObj*numberObj
}
const res=nums.map(square) 
console.log(res);

console.log("using Anonymus Function ");
const res2=nums.map(function (numberObj) {
    return numberObj*numberObj
}) 
console.log(res2);


console.log("using Arrow Function ");
const res3=nums.map((numberObj)=>
    numberObj*numberObj
)
console.log(res3);
    

