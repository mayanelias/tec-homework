// const fs = require("fs");
// const fileName = "library.json";

// const op = process.argv[2];
// const name = process.argv[3];
// const author = process.argv[4];
// const pages = Number(process.argv[5]);

// let libraryObj;

// try {
//   let libraryJson = fs.readFileSync(fileName, "utf8");
//   libraryObj = JSON.parse(libraryJson);
// } catch (error) {
//   libraryObj = [];
// }

// const book = { name, author, pages };
// const result = libraryObj.find(checkBook);

// switch (op) {
//   case "add":
//     if (result == undefined) {
//       libraryObj.push(book);
//       console.log("Success");
//     } else {
//       console.log("Error");
//     }
//     break;
//   case "update":
//     if (result == undefined) {
//       console.log("Error");
//     } else {
//       result.pages = pages;
//     }
//     break;
//   case "delete":
//     if (result == undefined) {
//       console.log("Error");
//     } else {
//       const index = libraryObj.indexOf(result);
//       libraryObj.splice(index, 1);
//       console.log("Success");
//     }
//     break;
//   case "getAll":
//     console.log(libraryObj);
//     break;
//   case "search":
//     if (result == undefined) {
//       console.log("Book doesn't exist");
//     } else {
//       console.log("Success");
//       console.log(result);
//     }
//     break;
//   default:
//     console.error("Error");
//     break;
// }

// function checkBook(bookToFind) {
//   return bookToFind.name == book.name;
// }

// libraryJson = JSON.stringify(libraryObj);
// fs.writeFileSync(fileName, libraryJson);
//////////////////////////////////////////////////////////////////////////////////////////////

// const fs = require("fs");
// const functions = require("./functions");
// const fileName = "library.json";

// const op = process.argv[2];
// const name = process.argv[3];
// const author = process.argv[4];
// const pages = Number(process.argv[5]);

// let libraryObj;

// try {
//   let libraryJson = fs.readFileSync(fileName, "utf8");
//   libraryObj = JSON.parse(libraryJson);
// } catch (error) {
//   libraryObj = [];
// }

// const book = { name, author, pages };

// function checkBook(bookToFind) {
//   return bookToFind.name == book.name;
// }

// const result = libraryObj.find(checkBook);

// switch (op) {
//   case "add":
//     functions.add(result, book, libraryObj);
//     break;
//   case "update":
//     functions.update(result, pages);
//     break;
//   case "delete":
//     functions.delete(result, libraryObj);
//     break;
//   case "getAll":
//     functions.print(libraryObj);
//     break;
//   case "search":
//     functions.search(result);
//     break;
//   default:
//     console.error("Error");
//     break;
// }

// libraryJson = JSON.stringify(libraryObj);
// fs.writeFileSync(fileName, libraryJson);