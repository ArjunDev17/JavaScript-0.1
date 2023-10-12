console.log("----------------------------------------");
console.log("Jai Shree Ram");
const myPromise = new Promise(function (resolove, reject) {
  setTimeout(function () {
    console.log("function executed");
    resolove();
  });
}, 1000);

myPromise.then(function () {
  console.log("Promise executed");
  console.log("----------------------------------------");
});
//---------------------Part 1-----------------------------
new Promise(function (resolove, reject) {
  setTimeout(function () {
    console.log("Task2 done");
    resolove();
  }, 1000);
}).then(function () {
  console.log("Task1 done promise completed");
  console.log("----------------------------------------");
});

//--------------------------------Part 2------------------
//in above code we just saw simple thinmgs how to create promise and how to use
//asume  our promise have multiple data and now we want to use that data , we know that our then method directly connected with
//promise method so we can use that data
const myPromise3 = new Promise(function (resolove, reject) {
  setTimeout(function () {
    console.log("inside promise");
    resolove({
      firstName: "Ram",
      LastName: "Ji",
    });
  }, 1000);
});
myPromise3.then(function (employee) {
  console.log(employee);
  console.log("----------------------------------------");
  console.table([employee]);
});
// inside promise
// { firstName: 'Ram', LastName: 'Ji' }
// ----------------------------------------
// ┌─────────┬───────────┬──────────┐
// │ (index) │ firstName │ LastName │
// ├─────────┼───────────┼──────────┤
// │    0    │   'Ram'   │   'Ji'   │
// └─────────┴───────────┴──────────┘
// ---------------------Part 3-------------------
// const myPromiserr = new Promise(function (resolove, reject) {
//   setTimeout(function () {
//     let err = false;
//     if (!err) {
//       resolove({
//         firstName: "Ram",
//         LastName: "Ji",
//       });
//     } else {
//       reject("error is there");
//     }
//   }, 1000);
// });
// //asume by using then method i want to take firstName
// // const ffName = myPromiserr.then(function (emp) {
// //   console.log(emp);
// //   return emp.firstName;
// // });
// // console.log("ffName :", ffName);
// //i am getting error from above code
// myPromiserr
//   .then(function (emp) {
//     console.log("inside 4th promise ", emp);
//     return emp.firstName;
//   })
//   .then(function (myEmp) {
//     console.log("Employee name :", myEmp);
//     console.log("------------------------------------------");
//   })
//   .catch(function (errors) {
//     console.log(errors);
//     console.log("------------------------------------------");
//   });
// console.log("------aAbove whole code (Line number 52 ) in Arrow Function----------------------");
const myPromiserr = new Promise((resolove, reject) => {
  setTimeout(() => {
    let err = false;
    if (!err) {
      resolove({
        firstName: "Ram",
        LastName: "Ji",
      });
    } else {
      reject("error is there");
    }
  }, 1000);
});
//asume by using then method i want to take firstName
// const ffName = myPromiserr.then(function (emp) {
//   console.log(emp);
//   return emp.firstName;
// });
// console.log("ffName :", ffName);
//i am getting error from above code
myPromiserr
  .then((emp) => {
    console.log("inside 4th promise ", emp);
    return emp.firstName;
  })
  .then((myEmp) => {
    console.log("Employee name :", myEmp);
    console.log("------------------------------------------");
  })
  .catch((errors) => {
    console.log(errors);
    console.log("------------------------------------------");
  })
  .finally(() =>
    console.log("*****************Promise done*******************")
  );
