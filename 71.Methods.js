console.log("Jai Shree Ram :Function inside Object");

// const farmer={
//     f_Name:"Ram",
//     fage:23,
//     details: function info() {
//         console.log(`famer name is ${this.f_Name} and farmer age is ${this.fage}`);
//     }
// }
// farmer.details()

//first run above code it will  give better understanding

function farmerInfo() {
    console.log(`famer name is ${this.f_Name} and farmer age is ${this.fage}`);
}
const farmer1={
    f_Name:"Ram",
    fage:108,
    details:farmerInfo
}
const farmer2={
    f_Name:"Shyam",
    fage:45,
    details:farmerInfo
}
const farmer3={
    f_Name:"Hanu",
    fage:90,
    details:farmerInfo
}
console.log(farmerInfo);
farmer2.details()