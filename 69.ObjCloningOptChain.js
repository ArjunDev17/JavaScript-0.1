console.log("Jai Shree Ram:Object CLoning");
const obj = {
  key1: "value1",
  key2: "value2",
};
const obj2 = obj;
console.log(obj);
obj.key3 = "value3";
console.log(obj2);
//Object Cloning
const obj3 = { ...obj };
console.log(obj);
obj.key4 = "value4";
console.log(obj3);

const obj5 = Object.assign({}, obj);
console.log("Object :", obj5);

console.log("-----------------------------");

const stu = {
  name: "Kabeer",
  subject: { sub1: "Hindi", sub2: "Englis" },
};
console.log(stu);
console.log(stu.name);
console.log(stu.subject.sub1);
console.log(stu.subject.sub3);
console.log(stu?.marks);
