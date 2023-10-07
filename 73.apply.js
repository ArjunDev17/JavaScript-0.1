console.log("Jai Shree Ram :Apply");
function farmerInfo(crop,month) {
      console.log(this.f_Name,this.fage,crop,month);
  }
  const farmer1={
      f_Name:"Ram",
      fage:108,     
  }
  const farmer2={
    f_Name:"Ravi", 
    fage:17 ,  
}

//call
farmerInfo.call(farmer1,"Dhaan",8);

console.log("-----------apply---------------");

farmerInfo.apply(farmer2,["Daal",2]);

console.log("---------bind() it will return one function------------");
const func=farmerInfo.bind(farmer1,"Dhaan",8);
func();



const farmer={
    f_Name:"Ram",
    fage:108, 
    details:  function farmerInfo() {
        console.log(this.f_Name,this.fage);
    }  
}

const f_Func=farmer.details;
f_Func()

const f_Func2=farmer.details.bind(farmer);
f_Func2()

console.log("--------------------------------");

//arrow function this function will indicate one level above object 
//that was the reson when we run it ,it will give us undefind
const user1={
    f_Name:"Ram",
    age:108,
    about:()=>{
        console.log(f_Name,age);
}
}
user1.about(user1 )