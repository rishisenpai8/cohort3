/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

//I copied this from GPT bc I am not good enough rn to understand what did the question ask me to say
function haltFunction(ms){
   const start = Date.now();
   
   while (Date.now() - start < ms) {

   }
   return Promise.resolve()
}



haltFunction(3000).then(()=>{
    console.log('Hello World');
});

console.log('Print asap');



//My own version below:)