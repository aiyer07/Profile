var express = require('express');
var compression = require('compression');
app = express();
app.use(compression());
app.use(express.static("dist"));

app.use(function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
})

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);