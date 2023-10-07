console.log("Jai Shree Ram:MapDS");
const persons=new Map();
persons.set("name","falca");
persons.set("age",99)

console.log(persons);

for(const person of persons.keys()){
    console.log(person)
}

console.log("---------Acces By-- Key---");
for(const key of persons.keys()){
    console.log(persons.get(key))
}

for(const person of persons){
    console.log(Array.isArray(person))
}
console.log("---------Array Distructuring  --");
for(const [name,age] of persons){
    console.log(name,age)
}

//
console.log("Some more things");
const student={
    usn:1,
    firstName:"Kabeer"
}
const moreInfo=new Map();
moreInfo.set(student,{age:23,gender:"male"})
console.log(moreInfo.get(student));

