console.log("Promise example");
let promise = new Promise(function (resolve, reject) {
  setTimeout(
    () =>
      resolve("Timer completed! This value will be returned from the promise"),
    3000
  );
});
console.log("Promise created");

promise
  .then((result) => {
    console.log("Fulfilled the promise with result: " + result);
    return "This is the return value of the first then";
  })
  .then((result) => {
    console.log("second then: " + result);
  });

console.log("Promise example finished");
