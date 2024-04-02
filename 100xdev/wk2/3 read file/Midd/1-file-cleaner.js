/** @format */

// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was

// hello     world    my    name   is       raman
// After the program runs, the output should be

// hello world my name is raman

const fs = require("fs");
function readF(cd) {
  fs.readFile("abc.txt", "utf-8", function (err, data) {
    cd(data);
    const modifiedContent = data.replace(/\s+/g, " ");
    console.log(modifiedContent);
    fs.writeFile("abc.txt", modifiedContent, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log("Content has been written to the file successfully.");
      }
    });
  });
}

function onDone(data) {
  console.log(data);
}
readF(onDone);
