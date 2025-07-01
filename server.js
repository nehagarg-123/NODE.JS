const express= require('express')
const app=express();
const db=require('./db');
//const person = require('./models/ person');  


const bodyParser= require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/chicken',(req,res)=>{
    res.send('chicken completed ')
})
//get data information lakr deta h

app.listen(3000,()=>{
  console.log('listenning on post 3000')
})// basically bta rha h our 3000 server is live


// 3000 is aport number that server we are making that we will get at a port number
// localhost hmara ghar ka name ho gya and 3000 building no.

 // why we use this "/"
// In Express (and in HTTP URLs generally), every route path starts with a / because it represents the root of the path you’re matching. Here’s why:

// Absolute path reference

// A leading / means “start matching from the root of the site
//client->send request to the server (e.g., GET /chicken)
// The client is the user-side of an application — usually the web browser (like Chrome, Firefox, etc.) or a mobile app.

// It sends requests to the server, and the server responds with data, HTML, JSON, etc.

// fronteend.. get api use krke ye data le skta h 
//using post api->data client se lena chah rhe h

app.post('/items',(req,res)=>{
  res.send("data is going")
})
// await and async
// async tbnuse krte h jb koi function tame lene vala hota h
//await we use when we have to wait there till the code not runs
// try and catch


// CRUD
// c->create
//R->READ
//U->update
//D->delete