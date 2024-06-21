// internal module is a module that is not exported outside the package
// it's used to organize code within a package main

// promise API , Callbacks API, Synchronous API
// fs module provides three types of APIs to interact with the file system
// 1. Promise API: This API returns a promise that resolves or rejects based on the operation
// 2. Callbacks API: This API uses callbacks to handle the operation result
// 3. Synchronous API: This API blocks the execution until the operation is complete
// fs module is a built-in module in Node.js, so we don't need to install it

// 1. Synchronous API

// const fs = require("fs");

// const data = fs.readFileSync("./test.txt");

// console.log(data);

// <Buffer 74 68 69 73 20 69 73 20 74 68 65 20 73 61 6d 70 6c 65 20 66 69 6c 65 20 66 6f 72 20 74 68 65 20 74 65 73 74 20>
// buffer getting why
// because readFileSync returns a buffer object
// Buffer is a global class in Node.js that is used to handle binary data
// Buffer is an instance of the Uint8Array class
// Uint8Array is a typed array that represents an array of 8-bit unsigned integers
// A in buffer getting 41 why
// because in ASCII table A is represented by 41 (hexadecimal)

// const text = data.toString();

// const text1 = fs.readFileSync('./test.txt',{encoding: "utf8"}) // give encoding directly

// console.log(text , text1);

// synchronous function is a function that waits for the operation to complete before moving on to the next line

// console.log("Start")
// const fs = require("fs");

// const data = fs.readFileSync("./test.txt");

// const text = data.toString();
// console.log("Mid")

// const text1 = fs.readFileSync('./test.txt',{encoding: "utf8"}) // give encoding directly

// console.log(text , text1);
// console.log("End")

// doing the above using callbacks API for non blocking operation that perform synchronous function
// console.log("Start");
// const fs = require("fs");
// fs.readFile("./test.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     const text = data.toString();
//     console.log(text);
//     console.log("Mid");
//   }
// });
// console.log("End");
// here we are using callbacks API for non blocking operation(Asynchronous function) that perform synchronous function
// here we are passing a callback function to the readFile method
// the callback function is called when the operation is complete
// the callback function takes two arguments, err and data
// err is an error object if an error occurs
// data is the data read from the file

// how to write a file in a synchornous way
// const fs = require("fs");
// const data = "Hello World";
// fs.writeFileSync("./raman.txt", data);
// console.log("File written successfully");

// write in callback api method
// const fs = require("fs");
// const data = "Hello World";
// fs.writeFile("./jadav.txt", data, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File written successfully");
//   }
// });

//Promise API
// const fs = require("fs").promises;
// fs.readFile("./test.txt")
//   .then((data) => {
//     const text = data.toString();
//     console.log(text);
//     return fs.writeFile("./jadav.txt", text);
//   })
//   .then(() => {
//     console.log("File written successfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// promise api for writing in a file
// const fs = require("fs").promises;
// const data = "Jai Shree Ram";
// fs.writeFile("./jaiRam.txt", data)
//   .then(() => {
//         console.log("File written successfully");
//       })
//       .catch((err) => {
//             console.log(err);
//           });

// promise api for append in a file
// const fs = require("fs").promises;
// fs.appendFile("./jaiRam.txt", "Jai Shree Ram next again ram ram\n")
//   .then(() => {
//     console.log("File appended successfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// promise api for deleting content from file
//   const fs = require("fs").promises;
//   fs.writeFile("./jaiRam.txt", "")
//     .then(() => {
//         console.log("File content deleted successfully");
//       })
//       .catch((err) => {
//             console.log(err);
//           });

// promise API for reading the data from json file and calculate the maths score from the given objects
// const fs = require("fs").promises;
// fs.readFile("./data.json")
//   .then((data) => {
//     const bacche = JSON.parse(data.toString());
//     let totalScore = 0;
//     for (let i = 0; i < bacche.length; i++) {
//       totalScore += bacche[i].MathsScore;
//     }
//     console.log("Total maths score is: ", totalScore);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// promise api for getting the object whose id is something from json file
const fs = require("fs").promises;
fs.readFile("./data.json")
  .then((data) => {
    const bacche = JSON.parse(data.toString());
    const idToFind = 2;

    // for (let i = 0; i < bacche.length; i++) {
    //     if (bacche[i].id === idToFind) {
    //         console.log("Object with id", idToFind, "is: ", bacche[i]);
    //         return;
    //         }
    //     }
    
    // const foundBaccha = bacche.filter((baccha) => baccha.id === idToFind); 

    const foundBaccha = bacche.find((baccha) => baccha.id === idToFind);
    console.log(foundBaccha);
  })
  .catch((err) => {
    console.log(err);
  });
