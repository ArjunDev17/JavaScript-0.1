//console.log(this);
//or we can Write  console.log(window);

// function callByCall() {
//     console.log("we can call any function by using call function");
// }

// callByCall();
// callByCall.call();
// console.log("--------------------------------");

// const farmer1={
//     f_Name:"Ram",
//     fage:108,
//     details:function farmerInfo(crop,month) {
//         console.log(`famer name is ${this.f_Name} and farmer age is ${this.fage},crop Name :${crop},Month will take fo Complition :${month}`);
//     }
// }
// const farmer2={
//     f_Name:"Ravi", 
//     fage:17   
// }

// farmer1.details()
// farmer1.details.call(farmer2);
// farmer1.details.call(farmer2,"Wheat",5);


//first run Above code
function farmerInfo(crop,month) {
  //  console.log(`famer name is ${this.f_Name} and farmer age is ${this.fage},crop Name :${this.crop},Month will take fo Complition :${this.month}`);
    console.log(this.f_Name,this.fage,crop,month);
}
const farmer1={
    f_Name:"Ram",
    fage:108,
    //details:farmerInfo
}
const farmer2={
    f_Name:"Ravi", 
    fage:17 ,  
}

// farmer1.details()
// farmer1.details.call(farmer2);
// farmer1.details.call(farmer2,"Wheat",5);
console.log("-------------------------");
farmerInfo.call()
// farmerInfo.call(farmer2);
farmerInfo.call(farmer2,"Wheat",5);
console.log("End of this operatio");
