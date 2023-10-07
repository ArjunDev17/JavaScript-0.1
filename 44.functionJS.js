function displayGodName(params) {
    console.log("Jai Shree Ram");
}
displayGodName()
console.log("it is Function");

//function Expression--------------->>>>>>>
const str=function(){
    console.log("Raghu");
    return "raghu"
}
const str2=str()
console.log(str2);

//--------->>>>>>> Arrow Function  <<<<<<<<<<<--

const arrowFun=()=>{
    console.log("It is an Arrow Function");
}
arrowFun()
//Arrow function with argument-->
const sum=(a,b)=>{
    return a+b
}

const add=sum(4,3)
console.log("Addition by AF :",add);

// we can reduce number of lines by Arrow Function
const sum3=(a,b,c)=>  a+b+c

//call AFunc
const Addition=sum3(9,1,2)
console.log(Addition);