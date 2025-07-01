console.log("neha")
//basics -pakage.json 
//package-lock.json
function add(a,b){
    return a+b;
}
var ans=add(2,3);
console.log(ans);
var add=(a,b)=> a+b;// arrow function

var result=add(3,4);
console.log(result)
// (function() {
//     console.log('neha');
// })();

// call back function

// function callback(){
//     console.log("add is successfully completed")
// }
var add=function (a,b,callback){
     a+b;
    callback();
}


// we use this code  without eriting callback function we just passed in one line 
add(2,3,()=>console.log('add completed'))

// package.json
// This is the main file that holds your project’s metadata and dependencies.

// 🔸 What it contains:
// Project name, version, author, etc.

// Dependencies (libraries your project needs)

// Scripts (commands like npm start, npm test)

// Other configuration info

// 🔸 Example:
// json
// Copy code
// {
//   "name": "my-app",
//   "version": "1.0.0",
//   "scripts": {
//     "start":


