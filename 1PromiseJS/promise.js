console.log("Jai Shree Ram");
const myPromise = new Promise(function (resolove, reject) {
  setTimeout(function () {
    console.log("function executed");
  });
}, 1000);

myPromise.then(function () {
  console.log("Promise executed");
});
