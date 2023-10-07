console.log("Jai Shree Ram");
const arr=[22,1,33,2,9]
console.log(arr.sort());//it is sorting for string not for number
const strArr=["Ram","Arjun","BhaiyA","Kishan"] 
console.log(strArr.sort());

const assenSort=arr.sort((a,b)=>a-b)
console.log(assenSort);
const decenSort=arr.sort((a,b)=>b-a)
console.log(assenSort);

//------------------------------
const product=[
    {pid:1,pName:"p1",price:300},
    {pid:2,pName:"p2",price:200},
    {pid:3,pName:"p3",price:900},
    {pid:4,pName:"p4",price:100},
]
console.log(product);
console.log("Product Short according to there Price");
const proSort=product.sort((a,b)=>
a.price-b.price
)
console.log(proSort);

console.log("<<<----------EveryMethod--------->>>");

const enumber=[2,4,6,8]
const checkEve=function isEven(a) {
    return a%2===0
}
//alternative
// function isEven(a) {
//     return a%2===0
// }
const resEvery=enumber.every(checkEve)
console.log(resEvery);

//realistic Example 
const emp=[
    {id:101,sal:4023},
    {id:102,sal:9924},
    {id:103,sal:1969}
]

const salLesThirty=emp.every((income)=>income.sal<30000);
console.log(salLesThirty);

console.log("Some method use ");
const someEx=emp.some((incomeMax)=>incomeMax.sal>9000)
console.log(someEx);
console.log("fill method use .fill(value,beginng,end) ");
const myFillArr=[1,2,3,4,5,6,7]
console.log(myFillArr);
myFillArr.fill(0,2,5);
console.log(myFillArr);
console.log("Slice method use for start,delete,insert ");
const myList=["apple","banana","Guava"]
console.log(myList);
const al=myList.splice(1,1)
console.log("deleted Element",al);
console.log(myList);
