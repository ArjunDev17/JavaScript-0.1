const arr=[1,2,3,4];
for(let num of arr){
    console.log(num);
}

const numbers= new Set();
numbers.add(1);
numbers.add(2);
for(const number of numbers){
    console.log(number);
}
if(numbers.has(2)){
    console.log("2 exist there");
}else{
    console.log("if ");
}
console.log("--------------");
const myAr=[1,2,2,3,3,4,5,5,1,9]
console.log(myAr);
const mySet=new Set(myAr)
console.log(mySet);
console.log("End of the set");