var express = require('express')

var app = express()

app.listen(3000)

app.use('/', function(req, res) {
    res.end('555')
})
console.log('Hello')