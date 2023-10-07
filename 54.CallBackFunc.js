console.log("Jai Shree Ram Call back");
function b(params) {
    console.log("Function B");
}

function a(func) {
    console.log(func);
    func()
}
a(b)

//Function returning function
console.log("------------------------------------");
function sname(params) {
    function dis() {
        console.log("It is function return function");
    }
    return dis()
}
sname()
