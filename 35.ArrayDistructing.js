const arr=[1,2,3]
let num1=arr[0];
let num2=arr[1];
console.log(num1,num2);
let [a,b]=arr;
console.log("above task in one line",a,b);
console.log("we can devide array and we can create  new array also");
const arr1=[1,2,3,2,456,24,4,22,6]
let [a1,b1,...myNewArr]=arr1;
console.log("above task in one line",a1,b1);
console.log("our new array",myNewArr);
// for (const iterator of myNewArr) {
//     console.log(iterator);
// }


