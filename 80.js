console.log("Jai SHree Ram :");
const obj1={
    key1:"value1",
    key2:"value2"
}

// const obj2={    
//     key3:"value2"
// }
// console.log(obj2.key1);
//above line giving us undefined
// const obj2={    
//     key3:"value2"
// };
// alternative
// const oj2={};//creating empaty object
// obj2.key3="value2";
const obj2=Object.create(obj1)
obj2.key3="value3";
console.log(obj2);
console.log(obj2.__proto__);
console.log("end of func");
