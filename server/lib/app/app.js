"use strict";
exports.__esModule = true;
var config_1 = require("./config");
var express = require("express");
var compression_1 = require("compression"); // compresses requests using huffman encoding
var body_parser_1 = require("body-parser"); // express parser for request bodies
var lusca_1 = require("lusca"); // security for requests
var mongoose = require("mongoose"); // mongo driver for node
// import bluebird from "bluebird";
// const MongoStore = mongo(session);
// route handlers
var UserRoutes = require("../routes/UserRoutes");
// Create Express server
var app = express();
// Connect to MongoDB
var mongoUrl = config_1["default"].mongo.server;
mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(function () { })["catch"](function (err) {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    // process.exit();
});
// Express configuration
app.set("port", config_1["default"].serverPort || 3001);
app.use(compression_1["default"]());
app.use(body_parser_1["default"].json());
app.use(body_parser_1["default"].urlencoded({ extended: true }));
// app.use(session({
//     resave: true,
//     saveUninitialized: true,
//     secret: config.aws.publicKey,
//     store: new MongoStore({
//         url: mongoUrl,
//         autoReconnect: true
//     })
// }));
app.use(lusca_1["default"].xframe("SAMEORIGIN"));
app.use(lusca_1["default"].xssProtection(true));
app.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
});
// app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));
app.post("/login", UserRoutes.postLogin);
app.post("/signup", UserRoutes.postSignup);
exports["default"] = app;
