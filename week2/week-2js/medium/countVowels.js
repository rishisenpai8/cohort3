/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
   let numberOfVowels = 0;
   let vowels = 'aeiouAEIOU';

//    for (let I = 0; I < str.length; I++) {
//         if (vowels.includes(str[I])) {
//             numberOfVowels++;
//         }
//     }

    for (let i = 0; i < vowels.length; i++) {
        if (str[i].includes(vowels)) {
            numberOfVowels++;
        }
        
    }
    return numberOfVowels;
}

let str = "I am a boy, and my name is Rishikesh SharmA";

let ans = countVowels(str)

console.log(ans);

