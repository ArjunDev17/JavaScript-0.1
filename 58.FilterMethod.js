console.log("Jai Shree Ram :iT is an filter method");
const nums=[1,2,3,4,5,6,7,8]

const isEven=function (num) {
    return num%2===0;
}
const even=nums.filter(isEven)
console.log(even);

console.log("using Anonymous Function");
const even2=nums.filter(function(num) {
    return num%2===0;
})
console.log(even2);
console.log("using Arrow Function");
const even3=nums.filter((num)=>
    num%2===0
)
console.log(even3);