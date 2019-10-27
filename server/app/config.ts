const assert = require( "assert" );
const dotenv = require( "dotenv" );

// read in the .env file
dotenv.config();

// capture the environment variables the application needs
const { 
  SERVER_PORT,
  CLIENT_PORT,
  SERVER_URL,
  MONGO_SERVER,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  AWS_PUBLIC_KEY,
  AWS_SECRET_KEY,
  NODE_ENV
} = process.env;

// validate the required configuration information
assert( SERVER_PORT, "SERVER_PORT configuration is required." );
assert( CLIENT_PORT, "CLIENT_PORT configuration is required." );
assert( SERVER_URL, "SERVER_URL configuration is required." );
assert( MONGO_SERVER, "MongoDB server URI is required." );
assert( MONGO_USERNAME, "MongoDB username is required." );
assert( MONGO_PASSWORD, "MongoDB password is required." );
assert( AWS_PUBLIC_KEY, "AWS_PUBLIC_KEY configuration is required." );
assert( AWS_SECRET_KEY, "AWS_SECRET_KEY configuration is required." );
assert( NODE_ENV, "NODE_ENV configuration is required." );

// export the configuration information
export default {
   serverPort: SERVER_PORT,
   serverUrl: SERVER_URL,
   mongo: {
       server: MONGO_SERVER,
       user: MONGO_USERNAME,
       password: MONGO_PASSWORD,
   },
   aws: {
       publicKey: AWS_PUBLIC_KEY,
       privateKey: AWS_SECRET_KEY,
   },
   env: NODE_ENV
};