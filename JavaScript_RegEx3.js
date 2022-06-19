// Match characters that occur one or more times
let str = "Mississipi song will sink into your soul.";
let regex = /s+/g; 
let res = str.match(regex);
console.log(res);

// 14:18 Match characters that occur zero or more times
let str2 = "Goooooooooal!";
let str3 = "gut feeling!";
let str4 = "over the moon";
let goRegex = /go*/gi;
let res1 = str2.match(goRegex);
let res2 = str3.match(goRegex);
let res3 = str4.match(goRegex);
console.log(res1, res2, res3);

let chewieQuote ="Aaaaaaaaaaaaaaaaaarrrrgh!";
let chewieRegex = /Aa*/;
let chewieResult = chewieQuote.match(chewieRegex);
console.log(chewieResult);