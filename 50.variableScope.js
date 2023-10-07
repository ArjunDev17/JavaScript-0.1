console.log("Jai Shree Ram");

{
    let stu="Ram";
    console.log(stu);
    var funcLevel="Hanu";
}
{
    let org="Falca";
    console.log(org);
    console.log("Function Level :",funcLevel);
}
// console.log(org); we can't access outside of the function
//let and const are Block Level Variable

//but we can use VAR
function myVar(params) {
    {
        var a=10
    }
    console.log(a);
}
myVar()
console.log(a);