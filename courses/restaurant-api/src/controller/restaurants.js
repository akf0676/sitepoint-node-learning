import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../model/restaurant';
import bodyParser from 'body-parser';

export default({config, db}) => {
	let api = Router();

	//CRUD
	// '/v1/restaurant/add'
	api.post('/add', (req, res) => {
		let newRestaurant = new Restaurant();
		newRestaurant.name = req.body.name;
		console.log(req.body.name);
		newRestaurant.save(err => {
			if (err) {
				res.setEncoding(err);
			}
			res.json({message: 'Restaurant saved succesfully'});
		});
	});

	// Read All
	api.get('/get/all', (req, res) => {
		Restaurant.find(function(err, restaurant){
			if(err) {
				res.send(err);
			}
			res.json(restaurant);

		});
	});
	//Get restaurant by ID
	api.get('/get/:restaurantID', (req, res) => {
		Restaurant.findById(req.params.restaurantID , function(err, restaurant) {
				if(err) {
					res.send(err);
				}
				res.json(restaurant);
			}

		);

	});

	//Update restaurant with put
	api.put('/update/:restaurantID', (req, res) => {
		//Find the Restaurant
		Restaurant.findById(req.params.restaurantID, function(err, restaurant) {
			if(err) {
				res.send(err);
			}

			// Update the restaurant name with the name passed in the JSON.
			restaurant.name = req.body.name;

			//Save the recored
			restaurant.save(err => {
				if(err) {
					res.send(err);
				}

				res.json({message: "Restaurant Name update"});
			});

		});
	});

	api.delete('/delete/:restaurantID', (req, res) => {
		//Just try to to delete the restauran with the ID
		Restaurant.remove({
			_id: req.params.restaurantID
		}, (err, restaurant) => {
			if(err) {
				res.send(err);
			}
			res.json({message: "Restaurant removed"});
		})

	});

	return api;

}
