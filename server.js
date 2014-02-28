var express = require('express');
var app = express();

app.configure(function () {
  app.use (express.methodOverride());
  app.use (express.bodyParser());
  app.use (function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
  app.use (app.router);
  app.use (express.static(__dirname));
});

app.listen (8910);
console.log('express running at http://localhost:%d', 8910);
