console.log("Jai Shre Ram    ");

function msg() {
    console.log("Js..in today");
}

msg();
console.log("function name is:",msg.name);
msg.newMsg="Good  night";
console.log(msg.newMsg);

msg.prototype.GM="gm";
console.log(msg.prototype);
msg.prototype.GN="gn";
console.log(msg.prototype);
msg.prototype.GN=function () {
console.log("GAfternoon");
}
msg.prototype.GN();