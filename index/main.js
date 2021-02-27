const fs = require('fs');
const readline = require('readline');
const exec = require('child_process').exec;

console.log("Hello to filter\n This program will help you extract passwords from <email>:<password> .txt files");

console.log("\n               #### DOES NOT WORK YET ####\n");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
 
  

rl.question("Is your file clean (Only <email>:<password>) ?  (y/n): ", (answer) => {

    console.log("\n\n");

    if(answer === "y"){
        rl.close();

        rl.question('Please enter the location of the .txt file: ', (location) => {
            rl.close();
            console.log(`You entered: ${location} \n\n\n`);
            
                fs.readFile(location, (err, data) => { 
                    if (err) throw err; 
                  
                    data = data.toString().split("\r\n")
                    
                    for(let i=0; i < data.length; i++){
                        console.log(data[i].split(":").pop().split());
                        exec(`echo "${data[i].split(":").pop().split()}" >> ../output/password.txt`);
                    };
                }) 
        });

    }else if(answer === "n"){
        rl.close();
        
        rl.question('Please enter the location of the .txt file: ', (location) => {
            rl.close();
            console.log(`You entered: ${location} \n\n`);
            
                fs.readFile(location, (err, data) => { 
                    if (err) throw err; 
                  
                    data = data.toString().split(" ");
                    
                    for(let i=0; i < data.length; i++){
                       if(data[i].includes(":")){
                           console.log(data[i].split(":").pop().split("\n"));
                           exec(`echo "${data[i].split(":").pop()}" >> ../output/password.txt`);
                       };
                        
                    };
                }) 
        });
        

    }else{
        console.log("Invalid input, please try again.");
        rl.close();
    };
});