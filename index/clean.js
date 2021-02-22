const fs = require('fs');
const readline = require('readline');
const exec = require('child_process').exec;

console.log("Hello to filter\n This program will help you extract passwords from <email>:<password> .txt files");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
 
rl.question('Please enter the location of the .txt file: ', (answer) => {
    console.log(`You entered: ${answer} \n\n\n`);
    
        fs.readFile(answer, (err, data) => { 
            if (err) throw err; 
          
            data = data.toString().split("\r\n")
            
            for(let i=0; i < data.length; i++){
                console.log(data[i].split(":").pop().split());
                exec(`echo "${data[i].split(":").pop().split()}" >> ../output/password.txt`);
            };
        }) 
    
    rl.close();
});
