/**
 * Write a function that returns a promise that
 *     resolves after n seconds have passed, where n is passed as an argument to the function.
 *
 * @format
 */

function wait(n) {
    let promiseObject = new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
    });
    return promiseObject;
  }
  
  wait(2).then(() => {
    console.log("Hello World");
  });
  