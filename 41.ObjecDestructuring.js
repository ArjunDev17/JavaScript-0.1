//Object Destructing

const book={
    bname:"JS",
    Page:"88769",
    Writer:"Ecma",
    AMount:"999"
}
console.log(book);

let {bname,Page,...restPro}=book //key value should be same
console.log(bname); 
console.log(Page);
//restPro will store remaing things
console.log("Here we are storing left Properties ",restPro);
console.log("Another Way");
let {bname :value1,Page:value2}=book
console.log(value1,value2);

console.log("Jai Shree Ram ji");
