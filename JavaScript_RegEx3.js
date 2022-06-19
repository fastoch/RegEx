// Match characters that occur one or more times
let str = "Mississipi song will sink into your soul.";
let regex = /s+/g; 
let res = str.match(regex);
console.log(res);

// 14:18 Match characters that occur zero or more times
