import express = require('express');
let routes = require('./routes/routes.ts');

let port : number = 8080;
const app : express.Application = express();

app.get('/', routes.get_login);

app.listen(port);
console.log(`Server running on port ${port}.`);