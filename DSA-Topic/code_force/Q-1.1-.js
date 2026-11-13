let prompt = require('prompt-sync')();

let n = Number(prompt('enter the length of array:  '));
let s = Number(prompt('enter the target value:  '));

let arr = new Array(n);

for(let i =0; i<n; i++){
  arr[i] = Number(prompt("enter a value:  "))
}

let sum = 0;
let left = 0;
let maxLength = 0;

for(let right = 0; right<n; right++){
  sum = sum +arr[right]

  while (sum>s) {
    sum = sum - arr[left] 
    left++;   
  }

  maxLength = Math.max(maxLength , right-left+1)
}

console.log(maxLength);


