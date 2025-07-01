var fs=require('fs')
var os=require('os')

var user=os.userInfo();// os ke help se hm system ki detailling find out krta h
console.log(user);
console.log(user.username)

fs.appendFile('greeting.txt','hi' +user.username,()=>{
    console.log('file is created')// callback function->,()=>{console.log('file is created')
})// file path,data,callback function
//synchronious                           ashynchronious	
// Execution	One task at a time   	Tasks can run in parallel (non-blocking)
// Speed	Slower if task is long	    Faster, efficient for I/O
// Example	Normal function calls	   setTimeout, fetch(), async/await

// export and import how we will import and export
const notes =require('./3.js')//importing a file


console.log('2 file is available')
var age=notes.age
var result=notes.addnumber(20,10);
console.log(result)


const  _ =require('lodash');/// ye library h import kiye hai iske through hm aise unique element find kr skte h jiske andar unique ,slice aur many function hote h
var data = ['neha','neha',1,1,2];
var filter= _.uniq(data);
console.log(filter)
//lodash library
//  What is a Module?
// A module in Node.js is like a file that contains reusable code (functions, variables, objects, etc.) that you can import and use in other files.




