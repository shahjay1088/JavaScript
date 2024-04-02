/** @format */

const fs = require("fs");
function readF(cd) {
  fs.readFile("abc.txt", "utf-8", function (err, data) {
    cd(data);
  });
}
function onDone(data) {
  console.log(data);
}
readF(onDone);
