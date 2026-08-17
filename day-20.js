// // let prompt = require("prompt-sync")()
// // let target = Number(prompt("enter target"))


// // let arr = [2,4,6,8,0]


// // for(let i = 0 ; i<arr.length; i++){

// //   if(arr[i] === target){
// //     console.log(i);
// //   }
  
  
// //   }



// let prompt = require("prompt-sync")()
// let target = Number(prompt("enter target"))


//   let arr = [61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
//   85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
//   97, 98, 99, 100]


// let count = 0

// for(let i = 0 ; i<arr.length; i++){
//   count++

//   if(arr[i] === target){
//     console.log(i);
//     console.log(count); 
//   } 
// }
// //
// let arr = [];

// for (let i = 1; i <= 10000; i++) {
//     arr.push(i);
// }

// console.log(arr);














// // let arr = [];

// // for (let i = 1; i <= 10000; i++) {
// //     arr.push(i);
// // }

// // console.log(arr);






let prompt =  require("prompt-sync")()

let arr = [1,5,8,9,22,44,66,88,99,123,555,777,999]

let t = Number(prompt("enter a number"))

let st = 0 , en= arr.length-1, index = -1;

while(st<=en){
  let mid = Math.floor((st+en)/2);
  if(arr[mid] === t){
    index = mid;
    break;
  }
  else if(arr[mid]<t) st = mid+1
  else en = mid - 1;
}

if(index == -1) console.log("not found");
else console.log("element found at  " + index + "  index");

