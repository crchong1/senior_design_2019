"use strict";
exports.__esModule = true;
var routes = require("../routes/routes");
var express = require("express");
var port = 8080;
var app = express();
app.get('/', routes.getLogin);
app.listen(port);
console.log("Server running on port " + port + ".");
