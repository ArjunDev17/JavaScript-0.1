
console.log("version 1");
// console.log("Jai Shree Ram");
// function createEmp(fname,lname,age,email){
//     const emp=Object.create(createEmp.prototype);
//     emp.fname=fname;
//     emp.lname=lname;
//     emp.age=age;
//     emp.email=email
//     return emp;
// }
// createEmp.prototype.info=function(){
//     console.log("User information");
// };
// //we can create multiple method like that only

// const employee=createEmp("ram","ji",45,"ar@gmail.com");
// console.log(employee.info);
// employee.info();

// console.log("version 2");
// console.log("Jai Shree Ram");
// function createEmp(fname,lname,age,email){
//     // const emp=Object.create(createEmp.prototype);
//     this.fname=fname;
//     this.lname=lname;
//     this.age=age;
//     this.email=email
//     return this;
// }
// createEmp.prototype.info=function(){
//     console.log("User information");
// };
// //we can create multiple method like that only

// const employee=new createEmp("ram","ji",45,"ar@gmail.com");
// console.log(employee);
// employee.info();

console.log("version 3");

function createEmp(fname,lname,age,email){
    // const emp=Object.create(createEmp.prototype);
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.email=email
    return this;
}
createEmp.prototype.info=function(){
    console.log("User information");
};
//we can create multiple method like that only

const employee1=new createEmp("ram","ji",45,"ram@gmail.com");
const employee2=new createEmp("Shyam","ji",45,"Shyam@gmail.com");
const employee3=new createEmp("Hanu","ji",45,"Hanu@gmail.com");
console.log(employee1);
employee1.info();