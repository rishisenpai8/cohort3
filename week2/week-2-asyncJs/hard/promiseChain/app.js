/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */



function time1(){
   return new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Time1');
        resolve();
    },2000)
   })
}
function time2(){
   return new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Time2');
        resolve();
    },3000)
   })
}
function time3(){
   return new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Time3');
        resolve();
    },4000)
   })
}

function sequentiallyCalling(){
    const startTime = Date.now();

    return time1()
    .then(()=> time2())
    .then(()=> time3())
    .then(()=>{
        const endTime = Date.now();
        const FinalTime = endTime - startTime;
        return FinalTime
    })

}
sequentiallyCalling().then((FinalTime) => {
  console.log(`Time taken: ${FinalTime} milliseconds`);
});




