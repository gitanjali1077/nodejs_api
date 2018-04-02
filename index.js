const express = require('express');
const routes = require('./api');
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');

// setting up my express app

const exp_app = express();

//database
mongoose.connect('mongodb://locahost/users');
mongoose.Promise = global.Promise;



exp_app.use(bodyParser.json());

exp_app.use(routes);
// exp_app.use('any other ur u wanna specify',routes);
// can use require directlt here

// if you are hosting at any platform then do use process.env.port with or(||) along with port

exp_app.listen(process.env.port || 3000,function(){

console.log("accepted request");



});