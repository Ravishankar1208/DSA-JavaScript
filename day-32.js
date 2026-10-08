// let map = new Map()
// map.set("ajay",5)
// map.set("ayush",8)
// map.set("aadi",4)
// map.set("amit",5)
// map.set("anuj",7)
// map.set("ajay",2)


// console.log(map);
// map.delete("amit")
// console.log(map);












let arr = [1,2,3,4,5,4,3,3,1,2,3,4,2,1,4,5,3,1,2,3,1,4,5,0]

let map = new Map

for(let i =0; i<arr.length; i++){
  if(map.has(arr[i])){
    map.set(arr[i],map.get(arr[i]) + 1)

  }else{
    map.set(arr[i],1)
  }
}

console.log(map);
