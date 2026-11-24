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













function printEachChar(str) {
    // Write your logic here

    for(let i=0; i<str.length;i++){

        console.log(str[i])
    }

}

module.exports = { printEachChar };









/**
 * @param {string} str
 * @return {string}
 */
 
function reverseString(str) {
    // Write your logic here

    let rev = ""
     for(let i=str.length-1;i>=0;i--){
     rev += str[i]
    }
  return (rev)
}

module.exports = { reverseString };










