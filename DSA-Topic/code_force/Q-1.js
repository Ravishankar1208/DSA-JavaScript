let prompt = require('prompt-sync')();
let n = Number(prompt('enter the size of array:  '));
let s = Number(prompt('enter your target value:  '));

  let sum = 0;
    
let arr = new Array(n)

for(let i = 0; i<n; i++){
  arr[i] = Number(prompt('enter a value:   '))  
}
 let left = 0;
let maxLength = 0;

for (let right = 0; right < n; right++) {

    sum = sum + arr[right];

    while (sum > s) {
        sum = sum - arr[left];
        left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
}

console.log(maxLength);

 
    
