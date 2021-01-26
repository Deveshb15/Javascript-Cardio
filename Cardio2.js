// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']

function longestWord(str){
    const wordArr = str.match(/[a-z0-9]+/gi);

    const sortedArr = wordArr.sort((a, b) =>  b.length - a.length);

    const longestWordArr = sortedArr.filter(word =>  word.length === sortedArr[0].length);
    
    if(longestWordArr.length === 1){
        return longestWordArr[0];
    }else{
        return longestWordArr;
    }
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArr(arr, len){
    let chunk = [], i = 0;
        while(i < arr.length){
            chunk.push(arr.slice(i,i+len));
            i+=len;
        }
    return chunk;
    }

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
 function flattenArr(arr){
    // Solution 1
    // return arr.reduce((a, b) => a.concat(b) );
///////////////////////////////////////////////////////////
    // Solution 2
    // return [].concat.apply([], arr);
///////////////////////////////////////////////////////////
    // Solution 3 - spread operator
    return [].concat(...arr);
    }


// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2){
    return formatString(str1) === formatString(str2) ;
}

function formatString(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
    }


// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'
function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
        if(char == 'z' || char == 'Z'){
            return 'a';
        }else{
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });
    newStr = newStr.replace(/a|e|i|o|u/gi, vowel => {
        return vowel.toUpperCase();
    });

    return newStr;
}


// const output = longestWord('Hello there, I am Deves');
// const output = chunkArr([1,2,3,4,5,6,7],2);
// const output = flattenArr([[ 1, 2 ],[ 3, 4 ],[ 5, 6 ],[ 7, 8 ]]);
// const output = isAnagram("elbow", "below");
const output = letterChanges('Hello There');

console.log(output);