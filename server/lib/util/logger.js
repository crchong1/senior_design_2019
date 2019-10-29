"use strict";
exports.__esModule = true;
var winston = require("winston");
var options = {
    transports: [
        new winston.transports.Console({
            level: process.env.NODE_ENV === "production" ? "error" : "debug"
        }),
        new winston.transports.File({ filename: "debug.log", level: "debug" })
    ]
};
var logger = winston.createLogger(options);
if (process.env.NODE_ENV !== "production") {
    logger.debug("Logging initialized at debug level");
}
exports["default"] = logger;
