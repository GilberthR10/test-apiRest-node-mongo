const express = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const app = express();

app.get('/usuario',(req, res)=> {
    res.json('get user');
  
  });

  app.post('/usuario',(req, res)=> {
      
      let body=req.body

      let usuario = new Usuario({
          nombre:body.nombre,
          email:body.email,
          password: bcrypt.hashSync(body.password,10),
          role:body.role
      });

      usuario.save((err,usuarioDB)=>{
        if (err) {
            return res.status(400).json({
                ok:false,
                err
            })
        }
        res.json({
            ok:true,
            usuario:usuarioDB
        })
      });
      
      
    
    });

    
    app.put('/usuario/:id',(req, res)=> {
      let id = req.params.id;
      let body = req.params.body;

      Usuario.findByIdAndUpdate(id,body,(err,usuarioDB)=>{

        if (err) {
            return res.status(400).json({
                ok:false,
                err
            });
        }

        Response.json({
            OK:true,
            usuario:usuarioDB
        })
      });


        

      //res.json({id});
    
    });

    app.delete('/usuario',(req, res)=> {
      res.json('delete user');
    
    });

    module.exports=app;