/** @format */

let counter = 0;
function updateCount() {
  counter++;
  console.log(counter);
  setTimeout(() => {
    updateCount();
  }, 1000);
}
