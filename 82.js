console.log("Jai shree Ram ....82 file :");
console.log("version ...1");
// function info() {
//     console.log(this.fname,this.lName);
// }

// const user={
//     fname:"ram",
//     lName:"ji",
//     display:info
// }
// console.log(user);
// console.log("------------------");
// user.display()


console.log("version ...2");

// const HelperObj={
//     userinfo:function info() {
//         console.log(this.fname,this.lName);
//     }
// }

// function user(){
//     const user1={};
//     user1.fname="ram",
//     user1.lName="ji",
//     user1.display=HelperObj.userinfo
//     return user1;
// }
// console.log(user);
// const user2=user();
// console.log("------------------",user2);
// console.log(user2);

console.log("version ...3");
// const HelperObj={
//     userinfo:function info() {
//         console.log(this.fname,this.lName);
//     }
// }

// function user(){
//     const user1=Object.create(HelperObj)
//     user1.fname="ram",
//     user1.lName="ji",
//     user1.display=HelperObj.userinfo
//     return user1;
// }
// console.log(user);
// const user2=user();
// console.log("------------------",user2);
// console.log(user2);


console.log("version ...4");
// const HelperObj={
//     userinfo:function info() {
//         console.log(this.fname,this.lName);
//     }
// }

// function user(){
//     const user1=Object.create(HelperObj)
//     user1.fname="ram",
//     user1.lName="ji"
//     // user1.display=HelperObj.userinfo
//     return user1;
// }
// console.log(user);
// const user2=user();
// console.log("------------------",user2);
// console.log(user2);

console.log("version ...5");
// //in 
// // const HelperObj={
// //     userinfo:function info() {
// //         console.log(this.fname,this.lName);
// //     }
// // }
// function user(){
//     const user1=Object.create(user.prototype)
//     user1.fname="ram",
//     user1.lName="ji"
//     // user1.display=HelperObj.userinfo
//     return user1;
// }

// console.log(user);
// const user2=user();
// console.log("------------------");
// console.log(user2); 
// console.log("------------------");
// user.prototype.income=function () {
//     console.log("user income is 895600");
// }
// user.prototype.userinfo=function () {
//     console.log(this.fname,this.lName);
// }

// console.log(user2.income);
// user2.userinfo
// user2.income()
// console.log("----------jkjiy--------");



console.log("version ...6");

class user {
    constructor() {
        const user1 = Object.create(user.prototype);
        user1.fname = "ram",
            user1.lName = "ji";
        // user1.display=HelperObj.userinfo
        return user1;
    }
    income() {
        console.log("user income is 895600");
    }
    userinfo() {
        console.log(this.fname, this.lName);
    }
}

console.log(user);
const user2=user();
console.log("------------------");
console.log(user2); 
console.log("------------------");

console.log(user2.income);
user2.userinfo
user2.income()
console.log("----------jkjiy--------");