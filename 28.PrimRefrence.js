let num1=12;
let num2=num1;

console.log(`num1 value :${num1}`);
console.log(`num2 value :${num2}`);
num1++;
console.log(`num1 value :${num1}`);
console.log(`num2 value :${num2}`);
console.log("Refrence type-----------------");

let numArr=['a','b'];
let num2A=numArr;

console.log(`numArr value :${numArr}`);
console.log(`num2A value  :${num2A}`);
numArr.push('z');
console.log(`numArr value :${numArr}`);
console.log(`num2A value  :${num2A}`);