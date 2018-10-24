import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
const LocalStrategy = require('passport-local').Strategy;

//Custom includes
import config from './config';
import routes from './routes';

let app = express();
app.server = http.createServer(app);

// middleware - intercept code
app.use(bodyParser.json({
	limit: config.bodyLimt,
}))
// passport config
app.use(passport.initialize());
let Account = require('./model/account');

passport.use(new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password'
	},
	Account.authenticate()
));

passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// api routes v1
app.use('/v1', routes);
// Port stored witin custom  config file
app.server.listen(config.port);
console.log(`Food Truck Server started on port ${app.server.address().port}`);

export default app;
