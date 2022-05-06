const express = require('express')
const router = express.Router()

router.get('/', () => {
    console.log('Get request');
})


module.exports = router