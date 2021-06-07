function reverseString(str) {
    let start = 0;
    let end = str.length - 1;
    return reverse(start, end, str.split('')).join('');
}

function reverse(start, end, str) {
    if (end < start) {
        return str;
    }
    const temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    return reverse(++start, --end, str);
}

function reverseString2(str) {
    if (str === '') {
        return '';
    }
    return reverseString2(str.substr(1)) + str.charAt(0);
}

console.log(reverseString('ala ma kota'));
console.log(reverseString2('ala ma kota'));
