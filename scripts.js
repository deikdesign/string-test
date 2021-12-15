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
