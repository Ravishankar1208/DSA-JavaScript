// // let prompt = require("prompt-sync")()

// // let str = prompt("Enter any string :-  ")
// // let ans = "";

// // for(let i=0; i<str.length; i++){

// //   let asci= str.charCodeAt(i);

// //   if(asci>=65 && asci<=90){

// //     ans = ans+ String.fromCharCode(asci +32)

// //   }
// //   else {

// //     ans = ans+ String.fromCharCode(asci -32)

// //   }

  
// // }

// // console.log(ans);





// /**
//  * @param {string} str
//  * @return {string}
//  */
// function toggleCase(str) {
//     // Write your code here

//     let ans = ""
// for(let i=0; i<str.length; i++){

//   let asci= str.charCodeAt(i);

//          if (asci >= 65 && asci <= 90) {
//             ans += String.fromCharCode(asci + 32);
//         }
//         else if (asci >= 97 && asci <= 122) {
//             ans += String.fromCharCode(asci - 32);
//         }
//         else {
//             ans += str[i];
//         }

  
// }
// return ans
// }

// module.exports = { toggleCase };














// // let prompt = require("prompt-sync")()

// // let words = ["pay", "atttention","attjnjn" ,"practice", "attend"]

// // let pref = "at"
// // let count= 0;

// // for(let i=0; i<words.length ; i++){
// //   if(words[i].startsWith(pref)){
// //     count++
// //   }
// // }

// // console.log(count);










// let s = "hello bhai kya haal chal";

// let arr = s.split(" ");
// let ans = "";

// for(let i=0; i<arr.length; i++){

//   let word = arr[i]

//   let first = word.charAt(0).toUpperCase();
//   let mid= word.substring(1, word.length-1)
//   let last=word.charAt(word.length-1).toUpperCase();

//   ans= ans+(first+ mid+ last)+" "
// }

// console.log(ans);





















let prompt = require("prompt-sync")()
let s = "naman"
let arr = new Array(128).fill(0);


for(let i=0; i<s.length;i++){
   let asy = s.charCodeAt(i)
   arr[asy] = arr[asy]+1;
}




for(let i=0; i<arr.length; i++){
  if(arr[i]>0){
    console.log(String.fromCharCode(i)+"->"+arr[i]);
    
  }
}