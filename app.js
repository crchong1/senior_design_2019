var express = require('express');
var routes = require('./routes/routes.js');
var port = 8080;
var app = express();

app.get('/', routes.get_login);

app.listen(port);
console.log(`Server running on port ${port}.`);