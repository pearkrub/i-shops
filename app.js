var express = require('express')

var app = express()
var port = 8080

app.use(express.static(__dirname))
app.get('/', function(req, res) {
    res.end('555')
})
app.listen(port, function() {
    console.log('Hello')
})
