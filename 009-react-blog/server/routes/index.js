const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/', (req, res) => {
    let file = path.join(__dirname, '../dist/index.html')
    res.sendFile(file)
})

module.exports = router