import mongoose from 'mongoose';
import { Router } from 'express';
import FoodTruck from '../model/foodtruck';
import bodyParser from 'body-parser';
import Review from '../model/review';

//Secure foodtruck
import { authenticate} from '../middleware/authMiddleware';

export default({config, db}) => {
	let api = Router();

	//CRUD
	// '/v1/foodtruck/add'
	api.post('/add', authenticate, (req, res) => {
		let newFoodTruck = new FoodTruck();
		newFoodTruck.name = req.body.name;
		newFoodTruck.foodtype = req.body.foodtype;
		newFoodTruck.avgcost = req.body.avgcost;
		newFoodTruck.geometry.coordinates = req.body.geometry.coordinates;
		newFoodTruck.save(err => {
			if (err) {
				res.send(err);
			}
			res.json({message: 'Food Truck saved succesfully'});
		});
	});

	//Read All
	api.get('/get/all', (req, res) => {
		FoodTruck.find(function(err, foodtruck){
			if(err) {
				res.send(err);
			}
			res.json(foodtruck);

		});
	});
	//Get foodtruck by ID
	api.get('/get/:foodtruckID', (req, res) => {
		FoodTruck.findById(req.params.foodtruckID , function(err, foodtruck) {
				if(err) {
					res.send(err);
				}
				res.json(foodtruck);
			}

		);

	});

	//Update foodtruck with put
	api.put('/update/:foodtruckID', (req, res) => {
		//Find the foodtruck
		FoodTruck.findById(req.params.foodtruckID, function(err, foodtruck) {
			if(err) {
				res.send(err);
			}

			// Update the foodtruck name with the name passed in the JSON.
			foodtruck.name = req.body.name;

			//Save the recored
			foodtruck.save(err => {
				if(err) {
					res.send(err);
				}

				res.json({message: "foodtruck Name update"});
			});

		});


	});
	// Add Review for Food Ruck ID
	// v1/foodtruck/reviews/add/:id
	api.post('/reviews/add/:id', (req, res) =>{
		FoodTruck.findById(req.params.id, (err, foodtruck) => {
			if(err) {
				res.send(err);
			}

			//Will need to post the review to the reviews table
			// Update the food truck with the review ids
			let newReview = new Review();

			newReview.title = req.body.title;
			newReview.text = req.body.text;
			newReview.foodtruck = foodtruck._id;

			//save it
			newReview.save((err, review) => {
				if(err) {
					res.send(err);
				}
				foodtruck.reviews.push(newReview);
				foodtruck.save(err => {
					if(err) {
						res.send(err);
					}
					res.json({message: 'Food Truck Review Saved!'});
				});
			});
		});
	});

	// Get All reviews for a foodtruck by ad
	// URI /v1/foodtruck/reviews/:foodtruckID
	api.get('/reviews/:foodtruckID', (req, res) => {
		Review.find({foodtruck: req.params.foodtruckID}, (err, reviews) => {
			if(err) {
				res.send(err);
			}
			res.json(reviews);
		});
	});

	api.delete('/delete/:foodtruckID', (req, res) => {
		//Just try to to delete the foodtruck with the ID
		FoodTruck.remove({
			_id: req.params.foodtruckID
		}, (err, foodtruck) => {
			if(err) {
				res.send(err);
			}
			res.json({message: "foodtruck removed"});
		})
	});

	return api;

}
