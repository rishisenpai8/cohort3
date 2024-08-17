const fs = require('fs');
// const { resolve } = require('path');

// // const p = new Promise()
// function cleanFile(){
//     fs.readFile('a.txt', 'utf-8', (err, data)=>{
//     if (err) {
//          console.error(err)
//          return
//     }   
//     const newData = data.trim(); 
//     fs.writeFile('a.txt', newData, function(){
//         resolve
//     })
     
// })
// }

// async function main() {
//    await cleanFile("a.txt")
//    console.log("Done cleaning file");
// }

// main();


        function cleanFile(){
            return new Promise(function(resolve){
                fs.readFile('a.txt', 'utf-8',(err,data)=>{
                    if (err) {
                        console.err(err)
                    }
                    data = data.trim();
                    fs.writeFile('a.txt', data,()=>{
                        resolve()
                    } )
                })
            })
        }






        async function main() {
        await cleanFile("a.txt")
        console.log("Done cleaning file");
        }

        main();






