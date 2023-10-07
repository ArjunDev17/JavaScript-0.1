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
const user2=createUser1(201,"HanuMant",23,"arj@gm.com")
user2.about1()
user2.is181(21);
console.log("End of the method");