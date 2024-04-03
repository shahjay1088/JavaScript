/** @format */

const fs = require("fs");
fs.writeFile("abc.txt", "Hello World i am jay shah 02-04-2024", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("Content has been written to the file successfully.");
  }
});

function readF(cd) {
  fs.readFile("abc.txt", "utf-8", function (err, data) {
    cd(data);
  });
}
function onDone(data) {
  console.log(data);
}
readF(onDone);
