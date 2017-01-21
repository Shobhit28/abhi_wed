var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Save the date 23rd feb')
})

app.listen(80, function () {
  console.log('Example app listening on port 3000!')
})