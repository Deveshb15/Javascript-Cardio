// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// ES5 Solution
// function addAll() {
//     const args = Array.prototype.slice.call(arguments);
//     var sum = 0;
//     for(var i = 0; i < args.length ; i++){
//         sum += args[i];
//     }
//     return sum;
// }

// ES6 Solution 
function addAll(...rest){
    // let sum = 0;
    // rest.forEach(num => sum += num);
    // return sum;

////////////////////////////////////////////////////////

   return rest.reduce((acc, cur) => acc + cur);
}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. 
// A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function checkForPrime(num){
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }
   return true;
}

function sumAllPrimes(end) {
    let sum = 0;
    for(let i =2; i<= end; i++){
        if(checkForPrime(i)){
            sum += i;
        }
    }
    return sum;
}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. 
// Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// SOLUTION 1

// function seekAndDestroy(arr) {
//     const args = Array.from(arguments);
    
//     function filterArr(arr){
//         return args.indexOf(arr) === -1;
//     }

//     return arr.filter(filterArr);
// }

// SOLUTION 2
function seekAndDestroy(arr, ...rest){
    return arr.filter(val => !rest.includes(val));
}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. 
// There are trees between them which cannot be moved. 
// Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(arr) {
    let arr1 = [];
    let arr2 = [];

    // arr.forEach((val, i) => {
    //     if(val === -1){
    //         arr1.push(i);
    //     }else{
    //         arr2.push(val);
    //     }
    // });
    
/////////////////////////////////////////////////////////////////////////////

    arr.forEach((val, i) =>  val === -1 ? arr1.push(i) : arr2.push(val));

    const sortArr = arr2.sort((a,b) => a-b);
    
    arr1.forEach((val, i) => {
        sortArr.splice(arr1[i], 0, -1);
    });
    return sortArr;
}

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
    let compare = str.charCodeAt(0);
    let missing;

    str.split('').map((char, i) => {
        if(str.charCodeAt(i) === compare){
            compare++;
        }else{
            missing = String.fromCharCode(compare);
        }
    });
    return missing;
}
    

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
    let evenSum = 0;
    let oddSum = 0;
    // arr.forEach(num => {
    //     if(num % 2 === 0){
    //         evenSum += num;
    //     }else{
    //         oddSum += num;
    //     }
    // });

/////////////////////////////////////////////////////////////////////

    arr.forEach(num => num%2 == 0 ? evenSum += num : oddSum += num);

    return [evenSum, oddSum];
}



// Call back action 
// const output = addAll(2,5,6,7);
// const output = sumAllPrimes(10);
// const output = seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6);
// const output = sortByHeight([-1, 150, 180, 170, -1, -1, 160, 190]);
// const output = missingLetters("abcdefghjklmno");
const output = evenOddSums([50, 60, 60, 45, 71]);

console.log(output);