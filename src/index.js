//importar modulos
const express = require('express');
const morgan = require('morgan');

//initalizationes 
const JTryM = express();// express(); returns an object 
//settings
JTryM.set('port', process.env.PORT||4000)

//Middelware is a function that execute when a user sends petition
JTryM.use(morgan('dev'));

//Globlal variables

//Routes: servers url

//Public

//Starting the server 
JTryM.listen(JTryM.get('port'), () =>{
    console.log('Server on port', JTryM.get('port'));
});