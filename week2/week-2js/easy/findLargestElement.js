/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

//Cringe Version 

// function findLargestElement(numbers){
//     largestElement = -1;
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i]>largestElement){
//             largestElement = numbers[i];
//         }
//     }
//     return largestElement;
// }


//Alpha Version

function findLargestElement(numbers){
    numbers.sort((a,b)=> b - a);
    return numbers[0]
}


let numbers = [3, 12, 2, 9, 1];

largestElement = findLargestElement(numbers);

console.log(largestElement);

