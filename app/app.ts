import express = require('express');
import routes = require('../routes/routes.ts');

const port : number = 8080;
const app : express.Application = express();

app.get('/', routes.get_login);

app.listen(port);
console.log(`Server running on port ${port}.`);