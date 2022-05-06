const express = require('express')
const router = express.Router()
const Employee = require('../models/employees')


///NOT WORKING??

router.get('/', async(req,res) => {
    try{
        const employees = await Employee.find()
        res.json(employees)
   //res.send('Get Request')
} catch(err){
    res.send('Error ' + err)
}
})


////Working
router.get('/:id', async(req,res) => {
    try{
        const employee = await Employee.findById(req.params.id)
        res.json(employee)
   
}catch(err){
    res.send('Error ' + err)
}
})

///WORKING!!!
router.post('/', async(req,res) => {
    const employee = new Employee({
        name: req.body.name,
        industry: req.body.industry,
        employed: req.body.employed
    })

    try {
    const a1 = await employee.save()
    res.json(a1)
    } catch(err) {
        res.send('Error')
    }
   // console.log(req.body)
    //res.send('Error')
})

///WORKING!!! //Update
router.patch('/:id', async(req,res)=> {
try{
const employee = await Employee.findById(req.params.id)
employee.employed = req.body.employed
const a1 = await employee.save()
res.json(a1)
}catch(err){
    res.send('Error')
}
})

///Delete ///WORKING!!!
router.delete('/:id', async(req,res)=> {
    try{
    const employee = await Employee.findById(req.params.id)
    
    const a1 = await employee.remove()
    res.json(a1)
    }catch(err){
        res.send('Error')
    }
    })

module.exports = router