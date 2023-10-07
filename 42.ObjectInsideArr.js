console.log("Jai Shree Ram");
const students=[
    {usn:"1C21",sname:"codeneeti"},
    {usn:"1c2",sname:"Ram"},
    //.................
]
console.log(students);
for (const student of students) {
    console.log("Student Name :",student.sname);
}
//---------------------------------------43.js
const[stu1,stu2]=students
console.log(stu1);

//-----------
const[{usn},{sname}]=students
console.log(usn,sname);

//-----------
const[{usn:fstuUSN},{sname:secName}]=students
console.log(fstuUSN,sname);