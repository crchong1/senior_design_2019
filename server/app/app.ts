import * as routes from '../routes/routes';

import express = require('express');

const port : number = 8080;
const app : express.Application = express();

app.get('/', routes.getLogin);

app.listen(port);
console.log(`Server running on port ${port}.`);
