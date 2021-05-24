function longestWord(sen) {
    let longestLength = 0;
    let longestStart = 0;
    let wordLength = 0;
    let wordStart = -1;

    const wordArray = sen.split('');
    for(let i = 0; i < wordArray.length; i++){
        if(isWordAcceptableCharacter(wordArray[i])) {
            if(wordStart === -1) {
                wordStart = i;
            }
            wordLength++;
        } else {
            if(wordLength > longestLength) {
                longestLength = wordLength;
                longestStart = wordStart;
            }

            wordLength = 0;
            wordStart = -1;
        }
    }

    if(wordLength > longestLength) {
        longestLength = wordLength;
        longestStart = wordStart;
    }

    if(longestLength > 0) {
        return sen.substring(longestStart, longestStart + longestLength);
    }

    return sen;

}

function isWordAcceptableCharacter(character) {
    return (character >= '0' && character <= '9')
        || (character >= 'a' && character <= 'z')
        || (character >= 'A' && character <= 'Z')
        ;
}

console.log(longestWord('fun&!! time'));
