// console.log(1);
// try {
//     console.log(2);
//     if(e)
//     {
//         throw "some error"
//     }
//     console.log(3);
// } catch (error) {
//     console.log(4);
// }
// console.log(5);
// e = false console.log(1),console.log(2),console.log(3),console.log(5);
// e = true console.log(1),console.log(2),console.log(4),console.log(5);


// let e = true;
// console.log(1);
// try {
//     console.log(2);
//     if(e){
//         throw "some error"
//     }
//     console.log(3);
// } 
// catch (error) {
//     console.log(4);
// }
// finally{
//     console.log("clean up")
// }
// console.log(5);
// e = true console.log(1),console.log(2),console.log(4),console.log("clean up"),console.log(5);
// e = false console.log(1), console.log(2),console.log(3),console.log("clean up"),console.log(5);
// function safeDiv(num1,num2){
// try {
//     if(num2 == 0){
//         throw "some error"
//     }
//     console.log(num1 / num2);
// } 
// catch (error) {
//     console.log("Denominator is zero");
// }
// }
// safeDiv(process.argv[2],process.argv[3])