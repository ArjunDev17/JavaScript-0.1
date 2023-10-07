console.log("----------------------------------");
const helperObject={
    about1:function() {
        console.log(this.eid,this.ename,this.email,this.age);
    },
    is181:function() {
        if(this.age>18){
            console.log("Yes");
        }else{
            console.log("NO");
        }
       
    },
    sing:function () {
        console.log("now no need to write there");
    }
}

//in file 75 if we create any new method inside helperObject we need to specifically write
//inside createUser1 but now no need just write inside helperObject and use it
function createUser1(eid,ename,age,email) {
    const empByFunc=Object.create(helperObject);
    empByFunc.eid=eid;
    empByFunc.ename=ename;
    empByFunc.age=age;
    empByFunc.email=email;
    // empByFunc.about1=helperObject.about1;
    // empByFunc.is181=helperObject.is181;
    return empByFunc;
}
const user2=createUser1(201,"HanuMant",23,"arj@gm.com")
console.log(user2);
user2.about1()
user2.is181(21);
console.log("End of the method");