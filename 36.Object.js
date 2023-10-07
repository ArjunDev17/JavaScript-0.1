//object reference type
//object store key value pairs
//objects don't have key value pairs
//object don't have index

//how to create Object

const person={
    name:"RamArjun",//keys by default always in string
    age:25,
    hobbies:[
        "coading",
        "learning",
        "writing"
    ]
}

console.log(person);
console.log(person.name);
console.log(person["name"]);
person.salary=25000;
person["package"]=500000;
console.log(person);

console.log("---------------------------------------");
const key="Email";
person.email="arju@12gmail.com";
console.log(person);
person[key]="arju@12gmail.com";
console.log(person);
//in . it's necessary to add "linke" key is -->"person hobby" for spasce handle

//iteration of  Objects 

for(let key in person){
    console.log(key);
}

console.log("---------------------------------------");
for(let key in person){
    console.log(`${key}:${person[key]}`);
}

console.log("---------------------------------------");
console.log(Object.keys(person));
console.log("---------------------------------------");
for (const key of Object.keys(person)) {
    console.log(person[key]);
}