function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

// isPalindrome("abba");
// isPalindrome("racecar");
// isPalindrome("a");
// isPalindrome("robot");
// isPalindrome("ab");

// console.log("Expecting: ih");
// console.log("=>", reverseString("hi"));

// console.log("");

// console.log("Expecting: tobor");
// console.log("=>", reverseString("robot"));

// console.log("");

// console.log("Expecting: mom");
// console.log("=>", reverseString("mom"));

// if (require.main === module) {
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("mom"));

//   console.log("");

//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("abba"));

//   console.log("");

//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("a"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("hi"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }

// 1. Rewrite the Problem in Your Own Words
// Palindrome means the string reads the same forward and backwards.
// For example:
//   Input: 'mom'
//   Output: true

//   Input: 'dog'
//   Output: false

//   If string reads the same forwards and backwards, return true.
//     mom === mom
//   If string does not read the same forwards and backwards, return false.
//     dog !== god

// 2. Write Your Own Test Cases
// Simply print the result of calling your solution method and compare it to the answer you expected.

// 3. Pseudocode
// 4. Code
// 5. Make It Clean and Readable
// 6. Optimize

// function reverse(word) {
//   const wordArray = word.split("");
//   const reversedWordArray wordArray.reverse();
//   const reversedWord = reversedWordArray.join("");
//   return reversedWord;
//   // return word.split("").reverse().join("");
// }

// function isPalindrome(word) {
//   const reversedWord = reverse(word);
//   if (word === reverseWord) {
//     return true;
//   } else {
//     return false;
//   }
// }

// isPalindrome("abba");
// isPalindrome("racecar");
// isPalindrome("a");
// isPalindrome("robot");
// isPalindrome("ab");

// // 'abba' === 'abba'
// // 'ab' !== 'ba'

// //   //array method
// //   .reverse();

// //   how can I turn a string into an array ? Per MDN, use the .split() method
// // string: 'abba'
// // array of strings: ['a', 'b', 'b', 'a']

// // let str = 'abba';
// // str.split();

// let word = "";
// let arrOfStr = [...word];
// let reversed = arrOfStr.reverse();

// function isPalindrome(word) {
//   if (arrOfStr === reversed) {
//     console.log(true);
//   } else {
//     arrOfStr !== reversed;
//     console.log(false);
//   }
// }

/* 
Rewrite the problem in your own words:
  If palindrone, console.log true:
    Input: 'abba'
    Output: true

    Input: 'racecar'
    Output: true

    Input: 'a'
    Output: true

  If not palindrone, console.log false:
    Input: 'ab'
    Output: false

    Input: 'robot'
    Output: false

Write your own test case / pseudocode:
1. Method stub: 
    const reversedWord = reversed(word)
The word parameter is the placeholder to function isPalindrome 

2. Function isPalindrome executes if-else statements nested in its code block:
{
  if (word === reversedWord) {
    console.log(true);
  } else {
    console.log(false);
}


3. Invoke isPalindrome and pass in the following arguments: 'abba', 'racecar', 'a', 'robot' 'ab'
const isPalindrome = () => {
  if (word === reversedWord) {
    console.log(true);
  } else {
    console.log(false);
}

isPalindrome(abba, racecar, a, robot, ab);

Add written explanation of your solution here:
- Figure out method stub: const reversedWord = reverse(word) ?
- Invoke function by passing in the following arguments 
  ('abba', 'racecar', 'a', 'robot', 'ab') in the arrow function. 
  The If-else statements are nested in function code block, 
  and prints true or false based on execution of conditional logic.
*/

module.exports = isPalindrome;
