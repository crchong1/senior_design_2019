import async from "async";
import {randomBytes} from "crypto";
import nodemailer from "nodemailer";
import { User, UserJSON } from "../schemas/User";
import { Request, Response, NextFunction } from "express";
import { WriteError } from "mongodb";
import { check, sanitize, validationResult } from "express-validator";
import { generateHash } from './../app/LoginUtils';

/**
 * POST /login
 * Sign in using username and password.
 */
export const postLogin = (req: Request, res: Response, next: NextFunction) => {
    // validate username and password here:
    check("username", "Username cannot be blank").isLength({min: 1});
    check("password", "Password cannot be blank").isLength({min: 1});
    const errors = validationResult(req);

    // finish login logic here
    res.send("SUCCESS");
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
