const mongoose = require('mongoose')


const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    employed: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Employee', employeeSchema)