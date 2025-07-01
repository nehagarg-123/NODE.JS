// server->a servere is a computer programme that is responsible for preparing and delivering data to other computers
//we convert data into objects in JavaScript (or Node.js)?
//Because objects help us organize, access, and work with data easily — just like storing data in labeled boxes.

const { json } = require("express");

//  2. When receiving data from APIs
// APIs often send data as JSON strings, so we convert it to objects to use easily.

// js
// Copy code
// let jsonData = '{"name": "Neha", "age": 20}';
// let obj = JSON.parse(jsonData);
// console.log(obj.name); // Neha

const jsonstring='{"name":"adi"}';
const jsonobject=JSON.parse(jsonstring)
console.log(jsonobject);
// JSON IS A TYPE OF STRING

// json data ko easily hm server to server transfer kr skte h
const func={
    name:"neha"
};
const json1=JSON.stringify(func);
console.log(json1);
// server made by express.js
// express.js
// api and end points->basically menu is api that containg all the endpoint means foodts items and server only perform that works which are written in apis
// localhost refers to your own computer
// port number->assighned a no.to react out to the server that stay in a local host
