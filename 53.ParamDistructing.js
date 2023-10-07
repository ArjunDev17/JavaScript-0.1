const emp={
    fName:"Kabeer",
    id:"1cR"
}
//OneWay
function empInfo(obj) {
    console.log(obj.fName);
    console.log(obj.id);
}
empInfo(emp)
function empInfoLo({fName,id}) {
    console.log(fName);
    console.log(id);
}
empInfoLo(emp)