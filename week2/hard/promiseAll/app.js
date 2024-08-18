/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */


function fun1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{console.log('hellow');
            resolve()
        },1000)
    })
}
function fun2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{console.log('hellow2');
            resolve()
        },3000)
    })

}
function fun3(){
    return new Promise((resolve)=>{
        setTimeout(()=>{console.log('hellow3');
            resolve()
        },5000)
    })

}


function functionMain(fun1, fun2, fun3){
    const start = Date.now();

    return Promise.all([fun1(), fun2(), fun3()])
         .then(()=>{
         const end = Date.now();
         const timeTaken = end - start;
         return timeTaken;    
    })
}

   

functionMain(fun1, fun2, fun3).then((timeTaken)=>{
    console.log('Time taken to resolve all the promises in milliesecond '+timeTaken);
})















