/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/



function isAnagram(str1, str2){
    const sortstr1 = str1.split('').sort().join() 
    const sortstr2 = str2.split('').sort().join()
    //strings are immutaable so first use split method and make them into an array and then after sorting join them in

    return sortstr1 == sortstr2
}


const str1 = 'spar';
const str2 = 'rask';   

if (isAnagram(str1, str2) ) {
    console.log('True');
}else 
{
    console.log('false');
}

// isAnagram(str1, str2) ? 'True' : 'False'    
