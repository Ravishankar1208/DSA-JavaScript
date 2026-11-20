// //  let arr = [1,9,5,2,8,7,5,8,4,3,8,9,3,5,2,0]

// // let n = arr.length

// // for(let i = 0; i<n-1; i++){
// //   let min = arr[i]
// //   for(let j=0;j<n-1-i; j++){

// //    if(arr[j]<arr[min]){
// //     min = arr[j]
// //    }
// //   }
// // }

// // console.log(arr);













//  let arr = [1,9,5,2,8,7,5,8,4,3,8,9,3,5,2,0]

//  let n = arr.length

//  for(let i=0; i<n-1;i++){
//   let min= i

//   for(let j = i+1; j<n;j++){
//     if(arr[j]<arr[min]){
//       min = j
//     }
  
//   if(min!=i){
//     let temp = arr[min]
//     arr[min]= arr[i]
//     arr[i] = temp
//   }
//   }
//  }

//  console.log(arr);
 















//  function selectionSort(arr) {
//     // Write your logic here

//   let n = arr.length;
    
//  for(let i=0; i<n-1;i++){
//   let min= i

//   for(let j = i+1; j<n;j++){
//     if(arr[j]<arr[min]){
//       min = j
//     }
//   }
//   if(min!=i){
//     let temp = arr[min]
//     arr[min]= arr[i]
//     arr[i] = temp
//   }
//   }
 

//  return arr



    
    
// }

// module.exports = { selectionSort };