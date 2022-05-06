const express = require('express')
const mongoose = require('mongoose')
//const url = 'mongodb://localhost/AlienDBex'
const app = express()

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/EmployeesDB";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

const employeeRouter = require('./routes/employees')
app.use('/employees', employeeRouter)

  app.listen(3000, function(){
      console.log('Server started')
  })
