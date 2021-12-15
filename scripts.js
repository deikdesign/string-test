// myString = 'Very long string 0';

// console.log(myString.length);

// var n = myString.length; {
// if(n > 1 && n <= 10) n = n.substring(0,10);
// };
// console.log(n);


function stringLength(n) {
    if (n.length < 1) {
        return 'less than 1';
    } else if (n.length > 10) {
        return 'more than 10';
    } else {
        return n.length;
    }
}

module.exports = stringLength;
