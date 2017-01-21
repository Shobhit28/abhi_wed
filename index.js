var express = require('express')
var app = express()

app.use(express.static('public'));
app.get('/', function (req, res) {
  res.send('Save the date 23rd feb')
})


app.listen(80, function () {
  console.log('Express app listening on port 80')
})