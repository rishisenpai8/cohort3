// function setTimeoutPromisified(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// setTimeoutPromisified(1000)
//   .then(function () {
//     console.log("hi");
//     return setTimeoutPromisified(3000);
//   })

//   .then(function () {
//     console.log("hey");
//     return setTimeoutPromisified(5000);
//   })

//   .then(function () {
//     console.log("hey there");
//   });


function setTimeoutPromisified(ms){
  return new Promise(resolve =>setTimeout(resolve, ms))
}



setTimeoutPromisified(1000).then(()=>{
  console.log('hii');
  return setTimeoutPromisified(3000)
})

.then(()=>{
  console.log('hey');
  return setTimeoutPromisified(5000)
})

.then(()=>{
  console.log('hey there!!');
})
