//       BUBBLE Sort


//Write a JavaScript program to sort the following array in ascending order using Bubble Sort:

// let arr = [5, 3, 8, 4, 2];


// let arr = [5, 3, 8, 4, 2];

// for(let i = 0; i<=arr.length;i++){
//   for(let j=0; j<=arr.length-1-i; j++){

//     if(arr[j] >arr[j+1]){

//       let temp = arr[j]
// //       arr[j]= arr[j+1]
// //       arr[j+1] = temp
// //     }
// //   }
// // }

// // console.log(arr);







// //SELECTION Sort


// let arr = [5, 3, 8, 4, 2];
// let n = arr.length

// for(i =0; i<n-1; i++){
//   let min = i
//   for(let j = i+1; j<n ; j++){

//     if(arr[j] <arr[min]){
//       min = j
//     }

//     if(min !=i){

//       let temp = arr[min]
//       arr[min ] = arr[i]
//       arr[i] = temp
//     }
//   }   
//   }
//  console.log(arr);
 





 

//  INSERTION Sort



let arr = [5, 3, 8, 4, 2];
let n = arr.length

for(let i=1; i<n; i++){
  let key = arr[i]
  let j = i-1
  while (j>=0 && arr[j] >key) {

    arr[j+1] = arr[j]
    j--
    
  }

  arr[j + 1] = key
}

console.log(arr);
