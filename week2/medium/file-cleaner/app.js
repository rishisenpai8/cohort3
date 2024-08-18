// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// hello     world    my    name   is       raman

// After the program runs, the output should be
// hello world my name is raman


const fs = require('fs');

function fileCleaner(){
    fs.readFile('a.txt', 'utf-8', (err, data)=>{
        if (err) {
          console.log('Error: '+err);  
        }
        else{
            const cleanData = data.split(' ').filter(word => word!=='').join(' ').trim();



            fs.writeFile('a.txt', cleanData, (err,data)=>{
                if (err) {
                    console.log('Error!');
                }else{
                    console.log('Removed all the extra spaces from the file.');
                }
            })
        }
    })
}

fileCleaner();

