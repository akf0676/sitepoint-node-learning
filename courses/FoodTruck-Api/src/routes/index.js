import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initialiseDB from '../db';
import foodtruck from '../controller/foodtruck';


let router = express();

// connect to mongoDb
initialiseDB(db => {
	// internal middleware
	router.use(middleware({
		config, db
	}));
	/// api routes v1('/v1)
	router.use('/foodtruck', foodtruck({config, db}));
})

export default router;
