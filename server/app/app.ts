import config from './config';
import * as express from "express";
import * as compression from "compression";  // compresses requests using huffman encoding
import * as session from "express-session"; // session for express
import * as bodyParser from "body-parser"; // express parser for request bodies
import * as lusca from "lusca"; // security for requests
// import {default as mongo} from "connect-mongo"; // mongodb store for sessions
import * as path from "path"; // get path stuff
import * as mongoose from "mongoose"; // mongo driver for node
// import bluebird from "bluebird";

// const MongoStore = mongo(session);

// route handlers
import * as UserRoutes from "../routes/UserRoutes";

// Create Express server
const app = express();

// Connect to MongoDB
const mongoUrl = config.mongo.server;
mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } ).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    // process.exit();
});

// Express configuration
app.set("port", config.serverPort || 3001);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(session({
//     resave: true,
//     saveUninitialized: true,
//     secret: config.aws.publicKey,
//     store: new MongoStore({
//         url: mongoUrl,
//         autoReconnect: true
//     })
// }));

app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});
// app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));

app.post("/login", UserRoutes.postLogin);
app.post("/signup", UserRoutes.postSignup);

export default app;