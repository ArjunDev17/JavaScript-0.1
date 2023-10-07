console.log("Default Parameter");
function sum(a,b) {
    if (b===undefined){
        b=5;
    }
    return a+b
}
const res=sum(3)
console.log(res);

//-->>>>>>>>>>>>>>  Default Parameter  <<<<<<<
function sum3(a,b=0,c=0) {
    return a+b+c
}
const res3=sum(3,9)
console.log(res3);

//--->>>>>>>>> 52.

function resFun(a,b,c,...d) {
    console.log(`a value is ${a}`);
    console.log(`b value is ${b}`);
    console.log(`c value is ${c}`);
    console.log(`d value is `,d);

}
resFun(2,3,8,22,11.3,77,8)