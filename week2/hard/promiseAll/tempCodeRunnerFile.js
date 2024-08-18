

















// function fun1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('hellow');
//             resolve(); // Resolve the promise after logging
//         }, 2000);
//     });
// }

// function fun2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('hellow2');
//             resolve(); // Resolve the promise after logging
//         }, 3000);
//     });
// }

// function fun3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('hellow3');
//             resolve(); // Resolve the promise after logging
//         }, 4000);
//     });
// }

// function functionMain(fun1, fun2, fun3) {
//     const start = Date.now(); // Correctly call Date.now()

//     return Promise.all([fun1(), fun2(), fun3()]) // Call the functions
//         .then(() => {
//             const end = Date.now(); // Correctly call Date.now()
//             const timeTaken = end - start; // Calculate the duration
//             return timeTaken; // Return the duration
//         });
// }

// functionMain(fun1, fun2, fun3).then((timeTaken) => {
//     console.log('Time taken to resolve all the promises in milliseconds: ' + timeTaken);
// });
