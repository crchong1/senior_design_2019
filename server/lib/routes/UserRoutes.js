"use strict";
exports.__esModule = true;
var User_1 = require("../schemas/User");
var express_validator_1 = require("express-validator");
var LoginUtils_1 = require("./../app/LoginUtils");
/**
 * POST /login
 * Sign in using username and password.
 */
exports.postLogin = function (req, res, next) {
    // validate username and password here:
    express_validator_1.check("username", "Username cannot be blank").isLength({ min: 1 });
    express_validator_1.check("password", "Password cannot be blank").isLength({ min: 1 });
    var errors = express_validator_1.validationResult(req);
    // finish login logic here
    res.send("SUCCESS");
};
/**
 * POST /signup
 * Create a new local account.
 */
exports.postSignup = function (req, res, next) {
    // validate here
    var userJSON = req.body; // this is the json
    var user = new User_1.User();
    LoginUtils_1.generateHash(userJSON.password).then(function (hash) {
        userJSON.password = hash;
        // user.serialize(userJSON);
        // mongo server logic here
        // mongoServer.findOne({ username: req.body.username }, (err, existingUser) => {
        //     if (err) { return next(err); }
        //     if (existingUser) {
        //         return res.send("ERROR- User already exists");
        //     }
        //     mongoServer.save((err) => {
        //         if (err) { return next(err); }
        //         req.logIn(user, (err) => {
        //             if (err) {
        //                 return next(err);
        //             }
        //             res.send("SUCCESS");
        //         });
        //     });
        // });
    })["catch"](function (err) {
        return res(err);
    });
};
