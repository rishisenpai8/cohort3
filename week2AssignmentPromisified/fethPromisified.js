const fs = require('fs');

function readsfile(path){
        return new Promise(( resolve, reject)=>{
                fs.readFile( path, 'utf8', (err, data)=>{
                    if (err) {
                        console.log('error is '+err)
                        return;
                    }
                    resolve(data);
                })  
        })
  }  
  
  readsfile('a.txt')
    .then(data => console.log(data))
    .catch(error => console.error(error))