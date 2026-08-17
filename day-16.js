// PATTERN PROGRAMING



// let prompt = require("prompt-sync")()
// let row = Number(prompt("enter row"))
// let clm = Number(prompt("enter column"))

// for(let i = 1; i<=row; i++){
//   for(let j = 1; j<=clm; j++){
//       process.stdout.write("* ");
//   }
//   console.log()
// }






// let prompt = require("prompt-sync")();

// let row = Number(prompt("Enter row: "));
// let clm = Number(prompt("Enter column: "));

// for (let i = 1; i <= row; i++) {
//     for (let j = 1; j <= clm; j++) {
//         process.stdout.write("* ");
//     }
//     console.log();
// }









// let prompt = require("prompt-sync")()
// let row = Number(prompt("enter row"))




// for(let i = 1; i<=row; i++){
  
//   for(let j = 1; j<=i; j++){
//       process.stdout.write(j);
//   }
//   console.log()
// }



let prompt = require("prompt-sync")()
let row = Number(prompt("enter row"))

for(let i = row; i >=0; i--){
    for(let j = 1; j <= i; j++){
       process.stdout.write("* ");
    }
    console.log()
}