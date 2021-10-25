// // 
// // const { argv } = require('process');
// // const process=require("process")
// // console.log(process);
// // console.log(process.argv[2]);
// console.log("hi my name is mayan");
// console.log(4);
// const operation = (process.argv[2]);
// const num1 = Number(process.argv[3]);
// const num2 = Number(process.argv[4]);
// // const sum=num1+num2;
// // console.log(`sum is:${sum}`);
// switch (operation) {
//     case `+`:
//         console.log(num1 + num2);
//         break;

//     case `-`:
//         console.log(num1 - num2);
//         break;
//     case `*`:
//         console.log(num1 * num2);
//         break;
//     case `/`:
//         console.log(num1 / num2);
//         break;
//     default:
//         console.error("\x1b[35m",`Error:unsupported operation ${operation}`);
//         break;

// }
// const fs =require("fs");
// const fileName="a.txt";
// // fs.writeFileSync(fileName,"Hello Sync",{flag:"w"});
// console.log("after writeFileSync");
// // const mode = (process.argv[2]);
// // if(mode==`a`||mode==`w`){
// //     fs.writeFileSync(fileName,"Hello Sync",{flag:`${mode}`});   
// // }
// // else{console.log("Error");}
// // // const mode = (process.argv[2]);
// // // fs.writeFileSync(fileName,"Hello Sync",{flag:`${mode}`});   
// const mode = (process.argv[2]);
// const text = (process.argv[3]);
// if(mode==`a`||mode==`w`){
//     fs.writeFileSync(fileName,text,{flag:`${mode}`});   
// }
// else{console.log("Error");}
// const nums=[-11,5,6,8,2,-3,3];
// function checkValue(value) {
//      return value==7;
//   }
//   const result=nums.find(checkValue);
//   if(result==undefined){
//       console.log("the number is not exist");
//   }
//   else{console.log("exist")};

const persons = [
    { name: "mayan", age: 27 },
    { name: "ruti", age: 28 },
    { name: "anat", age: 26 },
    { name: "segedu", age: 24 }
];
function checkAge(person) {
    return person.age == 27;
}
const result = persons.find(checkAge);
if (result == undefined) {
    console.log("the age is not exist");
}
else { console.log("exist") };


