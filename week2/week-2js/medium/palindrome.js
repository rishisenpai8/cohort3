/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    let lowercaseStr = str.toLowerCase();
    let i = 0;
    let j = lowercaseStr.length - 1
     while(i < j){
        if(lowercaseStr[i] == lowercaseStr[j]){
            i++;
            j--;
        }
        else{
            return false;
        }
     }
  return true;
}

let str = 'Nan';

let ans = isPalindrome(str);

console.log(ans);

module.exports = isPalindrome;