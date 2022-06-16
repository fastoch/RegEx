let myString = "FreeCodeCamp";

let RegEx = /freecodecamp/;
let result = RegEx.test(myString);
console.log(result); //will return false since RegEx is case sensitive

let RegEx2 = /freecodecamp/i;
let result2 = RegEx2.test(myString);
console.log(result2); //will return true since RegEx2 is case insensitive