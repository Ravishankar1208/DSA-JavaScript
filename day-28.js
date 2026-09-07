// let arr = [[1,2,3,4,5], [1,2,3,4,5],[1,2,3,4,5]]

let prompt = require("prompt-sync")()
let arr = new Array(3)
for (let i = 0; i<arr.length; i++){

  arr[i] = new Array(5)

}

for(let i=0; i<arr.length; i++){
  for(let j=0; j<arr[i].length; j++){
    arr[i][j] = Number(prompt("enter the value "))
  }
}

for(let i=0; i<arr.length; i++){
  for(let j=0; j<arr[i].length; j++){
    process.stdout.write(arr[i][j]+" ")
  }
  console.log();
  
}