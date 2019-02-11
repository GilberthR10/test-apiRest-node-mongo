require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 // parse application/json
app.use(bodyParser.json());
 

app.use(require('./routes/usuario.js'));


  mongoose.connect('mongodb://root:example@localhost:27017/',(err,res)=>{ 
      if(err) throw err;
      console.log('base de datos ONLINE!');
  });
app.listen(process.env.PORT,()=>{
    console.log("escuchando puerto",process.env.PORT)
});

