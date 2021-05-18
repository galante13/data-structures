function reversString(str) {
    if(typeof str !== 'string' && ! (str instanceof String)){
        return;
    }

    const result = [];
    let i = str.length - 1;
    while(i >= 0) {
        result.push(str[i]);
        i--;
    }

    return result.join('');
}

console.log(reversString('Ala ma kota!'));

function reverseStringLessSpace(str) {
    if(typeof str !== 'string' && ! (str instanceof String)){
        return;
    }

    let i = 0;
    let j = str.length - 1;
    const arr = str.split('');
    while(i < j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr.join('');
}
console.log(reverseStringLessSpace('Ala ma kota!'));

function reverseShort(str) {
    if(typeof str !== 'string' && ! (str instanceof String)){
        return;
    }

    return str.split('').reverse().join('');
}
console.log(reverseShort('Ala ma kota!'));

const reverseOneLiner = str => str.split('').reverse().join('');
console.log(reverseOneLiner('Ala ma kota!'));

const reverseOneLiner2 = str => {
    if(typeof str !== 'string' && ! (str instanceof String)){
        return;
    }
    return str.split('').reverse().join('');
}
console.log(reverseOneLiner2('Ala ma kota!'));

const reverseOneLiner3 = str => [...str].reverse().join('');
console.log(reverseOneLiner3('Ala ma kota!'));
console.log({...{a: 'x', x: 1}, z: 2});
