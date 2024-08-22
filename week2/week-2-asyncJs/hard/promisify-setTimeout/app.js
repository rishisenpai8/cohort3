/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


function setTimeoutPromisified(ms){
  return new Promise(resolve =>setTimeout(resolve, ms))
}

setTimeoutPromisified(3000).then(()=>{
  console.log('Wake up filthy!!');
})

