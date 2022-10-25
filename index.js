
const express = require('express')
const path =require('path')
const app = express()
const cors = require("cors");
const { cp } = require('fs');
const port=3020

app.use(express.static('front'));


var knex = require("knex")({
    client:"pg",
    connection:{
        host:"localhost",
        port:5432,
        user:"postgres",
        password:"password",
        database:"Assignement4"
    }
});



app.get('/Select',function(req,res){
    var reqJsonCustomerID = req.query.Customer;

    knex('Customer').select("*")
    .where({CustomerID: reqJsonCustomerID})
    .then(function(result){
        if(result==0){
            console.log("Customer not find")
            res.send("Customer not find");
        }else{
            console.log("Customer well select")
            res.send(JSON.stringify(result));
        }
    }
    )

  })

  app.get('/Update',function(req,res){
    var reqJsonCustomerID = req.query.Customer;
    var reqJsonFirstName = req.query.firstname;
    var reqJsonLastName = req.query.lastname;
    var reqJsonEmail = req.query.email;
    var reqJsonPassword = req.query.password;

    knex('Customer').where({CustomerID:reqJsonCustomerID}).update({Firstname: reqJsonFirstName,Lastname:reqJsonLastName,Email:reqJsonEmail,Password:reqJsonPassword})
    .then(function(result){
        if(result==0){
            console.log("Customer not find")
            res.send("Customer not find");
        }else{
            console.log("Customer well update")
            res.json({ succes:true });
        }
    }
    )

  })


  app.get('/getInfo', function(req, res) {
    console.log(req.query);
    var reqJsonFirstName = req.query.firstname;
    var reqJsonLastName = req.query.lastname;
    var reqJsonEmail = req.query.email;
    var reqJsonPassword = req.query.password;
    knex('Customer').insert({Firstname:reqJsonFirstName, Lastname:reqJsonLastName,Email:reqJsonEmail,Password:reqJsonPassword})
    .then(function (result){
        res.json({ success: true });
        })
    .catch(function (error) {
        console.log(error)
            
        });

  });

  app.get('/Delete',function(req,res){
    var reqJsonCustomerID = req.query.Customer;

    knex('Customer').where({CustomerID:reqJsonCustomerID}).delete()
    .then(function(result){
        if(result==0){
            console.log("Customer not find")
            res.send("Customer not find");
        }else{
            console.log("Customer deleted")
            res.json({ success: true });
        }
    }
    )

  })


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/front/front.html'))
  })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })