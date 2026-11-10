// let arr = [1,2,3,4,5,6,7,8];

// console.log(arr)

// arr.push(9);
// console.log(arr)

// arr.pop();
// console.log(arr)

// arr.unshift(0)
// console.log(arr)


// arr.shift();
// console.log(arr)




let arr = [1,0,2,0,3,0,4,5,0,6,0,7,8,0];
let count = 0

for(let i=0 ; i<=arr.length-1; i++){
  if(arr[i]===0){
    count++
  }
}
console.log(count);



