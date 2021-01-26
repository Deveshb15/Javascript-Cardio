// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function stringReverse(str) {

    ///////////////////////////////////////////
//    const strArr = str.split('');

//    strArr.reverse();
   
//    const reverseWord = strArr.join('');

//    console.log(reverseWord);

///////////////////////////////////////////////
    // let revString = '';

    // for(let i = str.length - 1 ; i >= 0 ; i--){
    //     revString += str[i] ;
    // }
    // console.log(revString);

/////////////////////////////////////////////////
    // let revString = '';

    // for(let i = 0 ; i <=str.length - 1 ; i++) {
    //     revString = str[i] + revString;
    // }
    // console.log(revString);

//////////////////////////////////////////////////
    // let revString = '';
    
    // for(let char of str){
    //     revString = char + revString;
    // }
    // console.log(revString);

//////////////////////////////////////////////////////

    let revString = '';

    str.split('').forEach((char) => revString = char + revString )
    console.log(revString);
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {

/////////////////////////////////////////////////////////
    // const strArr = str.split('');

    // strArr.reverse();
   
    // const reverseWord = strArr.join('');

    // if(str === reverseWord) {
    //     console.log("It's a Palindrome.");
    // }else{
    //     console.log("It's not a Plaindrom.");
    // }

///////////////////////////////////////////////////////////
    // let revString = '';

    // for(let i = str.length - 1 ; i >= 0 ; i--){
    //     revString += str[i] ;
    // }

    // if(str.lower === revString.lower) {
    //     console.log("It's a Palindrome.");
    // }else{
    //     console.log("It's not a Plaindrom.");
    // }
    
//////////////////////////////////////////////////////////
    
    let revString = '';

    for(let i = 0 ; i <=str.length - 1 ; i++) {
        revString = str[i] + revString;
    }
    console.log(revString);
    if(str === revString) {
        console.log("It's a Palindrome.");
    }else{
        console.log("It's not a Plaindrome.");
    }
    
///////////////////////////////////////////////////////////

    
}


// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');

    return parseInt(revString) * Math.sign(int);  //Math.sign(int) is for negative numbers
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {
//    const strArr = str.toLowerCase().split(' ');

//    for(let i = 0; i< strArr.length; i++){
//        strArr[i] = strArr[i].substr(0,1).toUpperCase() + strArr[i].substr(1);
//    }

//    return strArr.join(' ');

///////////////////////////////////////////////////////////

    return str
        .toLowerCase()
        .split(' ')
        .map(word =>  word[0].toUpperCase() + word.substr(1))
        .join(' ');
}


// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(char => {
        if(charMap[char]){
            charMap[char]++;
        }
        else{
            charMap[char] = 1;
        }
    });
    for(let char in charMap){
        if(charMap[char] > maxNum){
            maxNum = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}


// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100.
// For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". 
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {

//   for(let i = 1; i <= 100; i++) {
//     if(i % 15 === 0) {
//       console.log('FizzBuzz');
//     } else if(i % 3 === 0) {
//       console.log('Fizz');
//     } else if(i % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }

////////////////////////////////////////////////

    let c3 = 0;
    let c5 = 0;
    for(let i = 1; i <= 100 ; i++){
        c3++;
        c5++;
        let d = '';
        if(c3 == 3){
            d += 'Fizz';
            c3 = 0;
        }
        if(c5 == 5){
            d += 'Buzz';
            c5 = 0;
        }

        if(d == ''){
            console.log(i);
        }else{
            console.log(d);
        }  
    }
    
}


// const output = stringReverse("Hello");
// const output = isPalindrome('racecar')
// const output = reverseInt(-12345);
// const output = capitalizeLetters('i love france');
// const output = maxCharacter("javascript");
const output = fizzBuzz();

console.log(output);