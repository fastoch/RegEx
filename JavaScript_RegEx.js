let myString = "FreeCodeCamp";
let RegEx = /freecodecamp/;
let result = RegEx.test(myString);
console.log(result); //will return false since RegEx is case sensitive

let RegEx2 = /freecodecamp/i; //i stands for ignore case
let result2 = RegEx2.test(myString);
console.log(result2); //will return true since RegEx2 is case insensitive

let petString = "James has a pet cat.";
let petRegex = /cat|dog|fish|bird/; //we want to check if petString contains one of those words
let result3 = petRegex.test(petString);
console.log(result3); // will return true since petString contains the word "cat"

// So far, we have just checked if a pattern exists or not within a string
// But we can also extract the actual matches that we find with the match method
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result4 = extractStr.match(codingRegex);
console.log(result4); 

// Let's find more than the first match
let testStr = "Repeat, repeat, repeat";
let ourRegex = /repeat/gi; //global research + ignore case
let result5 = testStr.match(ourRegex);
console.log(result5);

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result6 = twinkleStar.match(starRegex);
console.log(result6);

//7:16