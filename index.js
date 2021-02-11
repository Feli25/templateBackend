var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.get('/', function (req, res) {
  res.send(JSON.stringify({ Hello: 'Worldssss'}));
});

app.use('/exampleDB', require('./routes/posts'))

app.listen(port, function () {
  console.log(`Example app listening on port !`);
});