let arr = [1,9,5,2,8,7,5,8,4,3,8,9,3,5,2,0]

let n = arr.length

for(let i = 0; i<n-1; i++){
  for(let j=0;j<n-1-i; j++){

    if(arr[j]>arr[j+1]){

      let temp = arr[j]
      arr[j] = arr[j+1]
      arr[j+1] = temp
    }
  }
}

console.log(arr);
