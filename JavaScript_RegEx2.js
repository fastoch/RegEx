//7:18 - Match anything with Wildcard period
let humStr = "I'll hum a song.";
let hugStr = "Bear hug";
let huRegex = /hu./;
let result1 = humStr.match(huRegex);
let result2 = hugStr.match(huRegex);
console.log(result1, result2);

