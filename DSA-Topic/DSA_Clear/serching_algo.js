let prompt = require('prompt-sync')()
let arr = [1,2,3,4,5,6,7,8,9,10]
let index =-1

let target = Number(prompt('enter your target'))

for(let i=0; i<arr.length ; i++){
  if(arr[i]===target){

    index = i;
    break;

  }
}

console.log(index ==-1? "not found" :"found at "+ index);
