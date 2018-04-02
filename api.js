const express = require('express');


const exp_router = express.Router();

const User = require('./models');
// listen for the request by user

exp_router.get('/users',function(request,response){

response.send({ type:'GET'});

   // response.send(user);
//console.log(user);

});

exp_router.post('/users',function(request,response){
User.create(request.body).then(function(user){

response.send(user);


});
//response.send({ user});
//response.send(request.body);

console.log(request.body);   


});

exp_router.put('/users/:id',function(request,response){

response.send({ type:'PUT'});

});
exp_router.delete('/users/:id',function(request,response){

response.send({ type:'DELETE'});

});


module.exports = exp_router;