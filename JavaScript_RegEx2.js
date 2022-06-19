//7:18 - Match anything with Wildcard period
let humStr = "I'll hum a song.";
let hugStr = "Bear hug";
let huRegex = /hu./;
let result1 = humStr.match(huRegex);
let result2 = hugStr.match(huRegex);
console.log(result1, result2);

let quoteSample = "Beware of bugs in the above code.";
let vowelRegex = /[aeiouy]/ig; 
let result = quoteSample.match(vowelRegex);
console.log(result);

let quote = "The quick brown fox jumped over the lazy dog.";
let letterRange = /[a-z]/ig;
let result3 = quote.match(letterRange);
console.log(result3);

//Search for a range of letters and numbers
let quote2 = "Blueberry 3.141592653s are delicious!";
let regex = /[h-s2-6]/ig;
let result4 = quote2.match(regex); 
console.log(result4);

//Specify a set of characters you do not want to match
let quote3 = "3 blind mice.";
let myRegex = /[^0-9aeiouy]/ig; // match anything except numbers and vowels
let result5 = quote3.match(myRegex);
console.log(result5);

//13:30