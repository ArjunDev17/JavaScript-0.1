console.log("Jai Shree Ram");

hello()

function hello(params) {
    console.log("Jai Shree Ram");
}

//but it will not work in function Expression time
// ctx()
// const ctx=function(params) {
//     console.log("Jai Radha Rani");
// }

// and it will not work for  Arrow function


//Function inside Function

function group(params) {
    const add2=(a,b)=>a+b
    const add3=(a,b,c)=>a+b+c
 
    const sum2=add2(3,2)
console.log(sum2);
}

group()



//----->>>>>>>>>>>>>Lexical Scope <<<<<<<<<<<<<<<---
