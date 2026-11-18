let arr = [1,9,5,2,8,7,5,8,4,3,8,9,3,5,2,0]

let n = arr.length

for(let i=1; i<n; i++){

  let key = arr[i]
  let j = i-1;

  while(j>=0&& arr[j]>key){

    arr[j+1] = arr[j]
    j--
  }
  arr[j+1] = key
}

console.log(arr);
