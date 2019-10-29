import * as routes from '../routes/routes';
import express = require('express');
import mongoose = require('mongoose');

const port : number = 8080;
const app : express.Application = express();

mongoose.connect(
	'mongodb+srv://' + process.env.MONGO_UN + ':' + process.env.MONGO_PW + '@ewb-jtahb.mongodb.net/test?retryWrites=true&w=majority',
	{ 
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
);

app.get('/', routes.getLogin);

app.listen(port);
console.log(`Server running on port ${port}.`);
