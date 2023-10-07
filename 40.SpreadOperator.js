
console.log("jai shree");
const obj1={
key1:"value1",
key2:"value2"
}
const obj2={
    key3:"value2",
    key4:"value3"
    }
const newObj={...obj1,...obj2}
console.log(newObj);
console.log("---------------");

const student={
    name:"Ram",
    USN:108,
    
}   
console.log("11/09/23");
let newArr=[..."12345"]
console.log(newArr);

const obj_1={
    key1:"value",
    key2:"value2"
}
const obj_2={
    key3:"value3",
    key4:"value5"
}
const newObj1={...obj_1,...obj_2}
console.log(newObj1);
// {key1: 'value', key2: 'value2', key3: 'value3', key4: 'value5'}

const alpha={..."abc"}
console.log(alpha);
// {0: 'a', 1: 'b', 2: 'c'}