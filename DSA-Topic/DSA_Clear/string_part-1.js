// let name = "ranjeet"

// console.log(typeof(name));


// console.log(name.length);









// let prompt = require("prompt-sync")();

// let string = prompt("enter any string");

// console.log(string.split(""));










// let prompt = require("prompt-sync")();

// let string = prompt("enter any string");

// for(let i=0; i<string.length; i++){

//   console.log(string.charAt(i));
  
// }











let prompt = require('prompt-sync')()

let s =  prompt("enter a string: ");

let i=0, j=s.length-1

let peledrom = true;

while ((i<j)) {

  if(s.charAt(i)!=s.charAt(j)){

    peledrom = false;
    break
  }

  i++;
j--;
  
}

console.log(peledrom?"ispeledrom": "not-peledrom");
