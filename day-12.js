//     while loop part 1

// let i = 1

// while (i <=10) {

//   console.log(i)
// i++  
// }

// // console.log (i)






// const prompt = require("prompt-sync")();

// let num = Number(prompt("Enter a number: "));

// while (num > 0) {
//     let rem = num % 10;
//     console.log(rem);
//     num = Math.floor(num / 10);
// }








// const prompt = require("prompt-sync")();

// let num = Number(prompt("Enter a number: "));

// let n = 0
// while (num > 0) {
//     let rem = num % 10;
//     n= n + rem
//     num = Math.floor(num / 10);
// }


// console.log(n);








const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));

let rev = 0
while (num > 0) {
    let rem = num % 10;
    rev = rev * 10+ rem
    num = Math.floor(num / 10);
}


console.log(rev);
