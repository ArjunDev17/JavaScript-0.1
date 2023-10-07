console.log("Jai Shree Ram: method");
const emp={
    eid:102,
    ename:"Ram",
    email:"ad@.com",
    about:function info() {
        console.log(this.eid,this.ename,this.email);
    },
    is18:function agChecker(age) {
        if(age>18){
            console.log("Yes");
        }
        console.log("NO");
    }
}

const objEmp=emp.about();
console.log(objEmp);

console.log("----------in above code was some problem in developer perspective-----");

function createUser(eid,ename,email) {
    const empByFunc={};
    empByFunc.eid=eid;
    empByFunc.ename=ename;
    empByFunc.email=email;
    empByFunc.about=function() {
        console.log(this.eid,this.ename,this.email);
    },
    empByFunc.is18=function(age) {
        if(age>18){
            console.log("Yes");
        }
        console.log("NO");
    }
    return empByFunc;
}

const user=createUser(201,"Lakhan","arj@gm.com")
console.log(user);
const u2=user.about();
const u3=user.is18(17);
// console.log(u2);

console.log("in this code also some problem in method perpective");
console.log("----------------------------------");
const helperMethod={
    about1:function() {
        console.log(this.eid,this.ename,this.email,this.age);
    },
    is181:function() {
        if(this.age>18){
            console.log("Yes");
        }else{
            console.log("NO");
        }
       
    }
}


function createUser1(eid,ename,age,email) {
    const empByFunc={};
    empByFunc.eid=eid;
    empByFunc.ename=ename;
    empByFunc.age=age;
    empByFunc.email=email;
    empByFunc.about1=helperMethod.about1;
    empByFunc.is181=helperMethod.is181;
    return empByFunc;
}
const user2=createUser1(201,"Hanu",23,"arj@gm.com")
console.log(user2.about1());
console.log(user2.is181(21));