myString = 'Very long string 0';

console.log(myString.length);

var n = myString.length; {
if(n > 1 && n <= 10) n = n.substring(0,10);
};
console.log(n);

