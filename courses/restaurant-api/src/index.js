import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

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

// api routes v1
app.use('/v1', routes);
// Port stored witin custom  config file
app.server.listen(config.port);
console.log(`Restaurant Server started on port ${app.server.address().port}`);

export default app;
