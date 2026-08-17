// // // let arr = [9 ,8,1,4,10,23,66,88,55,33,12,33]
// // // let n = arr.length;
// // // for(let i = 0 ;i <arr.length-1; i++){
// // //   for(let j = 0; j<arr.length-1-i; j++){
// // //     if(arr[j]>arr[j+1]){
// // //       let temp = arr[j]
// // //       arr[j] = arr[j+1]
// // //       arr[j+1] = temp
// // //     }
  
// // // }
// // // }
// // // console.log(arr);




// // let arr = [9 ,8,1,4,10,23,66,88,55,33,12,33]
// // let n = arr.length;

// // for(let i=0; i<n-1; i++){
// //   let min = i
// //   for(let j = i+1; j<n ;j++ ){
// //     if(arr[j]<arr[min])min = j;

// //   }
// //   if(min!=i){
// //     let temp = arr[min]
// //     arr[min]= arr[i]
// //     arr[i]= temp
// //   }
// //   }
// //   console.log(arr);
  











// let arr = [9 ,8,1,4,10,23,66,88,55,33,12,33]
// let n = arr.length;

// for(let i = 1; i<n; i++){
//   let key = arr[i]
//   let j = i-1
//   while (j>=0 && arr[j]>key) {
//     arr[j+1] = arr[j]
//     j--
    
//   }
//   arr[j+1]
// }
// console.log(arr);



let arr = [9 ,8,1,4,5]

let max = 0

for(let i = 0 ; i<arr.length ; i++){
  for(let j = 1; j<arr.length; j++){
    let product = arr[i]* arr[j]

    if(product>max){
      max = product
    }
  }
}

console.log(max);
