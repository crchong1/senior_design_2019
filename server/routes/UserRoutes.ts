import async from "async";
import {randomBytes} from "crypto";
import nodemailer from "nodemailer";
import { User, UserJSON, userModel } from "../schemas/User";
import { Request, Response, NextFunction } from "express";
import { WriteError } from "mongodb";
import { check, sanitize, validationResult } from "express-validator";
import { generateHash, checkPassword } from './../app/LoginUtils';
import * as mongoose from 'mongoose';
import Message from '../app/errorMessages';

/**
 * POST /login
 * Sign in using username and password.
 */
export const postLogin = (req: Request, res: Response, next: NextFunction) => {
    // validate username and password here:
    let userJSON : UserJSON = req.body;

    check(userJSON.username, "Username cannot be blank").isLength({min: 1});
    check(userJSON.password, "Password cannot be blank").isLength({min: 1});
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array() });
    }

    // finish login logic here
    userModel.findOne({username: userJSON.username}, function(err, user) {
        if (err) return next(err);

        checkPassword(userJSON.password, user.password).then(auth_status => {
            if (auth_status === Message.AUTH_SUCCESS) {
                res.send("SUCCESS");
            }
            else {
                res.send("FAILURE");
            }
        })

    });
};

/**
 * POST /signup
 * Create a new local account.
 */
export const postSignup = (req: Request, res: Response, next: NextFunction) => {
    // validate here
    let userJSON : UserJSON = req.body; // this is the json

    let user = new User();
    generateHash(userJSON.password).then((hash) => {
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
    }).catch( (err) => {
        return res(err)
    });
};
