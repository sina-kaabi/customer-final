const express = require('express')
const http = require('http')
const router = express.Router()

router.get("/", (req, res, next) => {   
    
    http.get('http://localhost:3000/api/v1/employees', response => {
        let data = [];
        console.log('Status Code:', response.statusCode);
      
        response.on('data', chunk => {
           data.push(chunk);
        });
      
        response.on('end', () => {
          console.log('Response ended: ');
          const employees = JSON.parse(Buffer.concat(data).toString());
      
          for (employee of employees) {
            console.log(`Got employee with id: ${employee._id}, name: ${employee.name}`);
          }
          res.render('employees/employee-list', {employees: employees});
        });
      }).on('error', err => {
        console.log('Error: ', err.message);
        next(err)
      });
});

router.get("/create", (req, res, next) => {
    res.render('employees/employee-create')
});

router.get("/:id", (req, res, next) => {   
    
    http.get('http://localhost:3000/api/v1/employees/' + req.params.id, response => {
        let data = '';
        console.log('Status Code:', response.statusCode);
      
        response.on('data', chunk => {
           data = chunk;
        });
      
        response.on('end', () => {
          console.log('Response ended: ');
          const employee = JSON.parse(data);
      
          console.log(`Got employee with id: ${employee._id}, name: ${employee.name}`);
          
          res.render('employees/employee-details', {employee: employee});
        });
      }).on('error', err => {
        console.log('Error: ', err.message);
        next(err)
      });
});




module.exports = router