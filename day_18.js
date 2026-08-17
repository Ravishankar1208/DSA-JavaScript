// let arr = [2,4,6,8,0]

// let temn =  arr[0]

// for(let i = 1; i<arr.length; i++){

//   arr[i-1] = arr[i]
// }

// arr[arr.length - 1]= temn

// console.log((arr));









// let arr = [2,4,6,8,0]

// let temn =  arr[arr.length - 1]

// for(let i = arr.length-1; i>=1; i--){

//    arr[i] = arr[i-1]
// }

// arr[0]= temn

// console.log((arr));





// let arr = [1,2,3,7,5]

// for(let i = 0; i<arr.length; i++){
//   for(j = i+1; j<arr.length; j++){
//     if(arr[i] + arr[j]===12){
//       console.log(arr[i], arr[j]);
      
//     }
//   }
// }




let arr = [1,2,7,0,5]

for(let i = 0; i<arr.length; i++){
  for(j = i+1; j<arr.length; j++){
    if(arr[i] + arr[j]===12){
      console.log(arr[i], arr[j]);
      
    }
  }
} 