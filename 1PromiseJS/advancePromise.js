console.log("Jai Shree Ram");
console.log("async function");
const myPromise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let err = false;
    if (!err) {
      resolve({
        USN: "1Cr21",
        Dept: "MCA",
      });
    } else {
      reject("Something Wrong Information");
    }
  }, 1000);
});

async function consumeMyPromise() {
  try {
    const reponse = await myPromise5;
    console.log(reponse);
  } catch (error) {
    console.log(error);
  }
}
