var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Vehicle = require('./app/models/vehicle');

// Configure app for bodyParser()
// Lets us grab data from the body of POST

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Set Up port for server to liste on on
var port = process.env.PORT || 3000;

//c Connect to DB
mongoose.connect('mongodb://localhost:27017/codealong');

//API Routes via express server
var router = express.Router();

//  Routes will all be prefeix with /api
app.use('/api', router);

//Middleware
// Middleware can be very useful for doing validations
// logging things from here or stop request from continuting in the event
// that the request is not safe.
// Middleware to use for all requests.
// Before message to to rotes

router.use(function(req, res, next) {
	console.log("FYI... there is some precessing going on here");

	next();
});

router.get('/', function(reg, res) {
	res.json({message: 'Welcome to our API!'});
});

router.route('/vehicles')
	.post(function(req, res) {
		var vehicle = new Vehicle(); // new instance of vehicle
		vehicle.make = req.body.make;
		vehicle.model = req.body.model;
		vehicle.colour = req.body.colour;

		vehicle.save(function(err) {
			if(err) {
				res.send(err);
			}
			res.json({message: 'Vehicle has been made'});
		});
	})

	.get(function(req, res) {
		Vehicle.find(function(err, vehicles) {
			if(err) {
				res.send(err);
			}
			res.json(vehicles);
		});
	});


router.route('/vehicle/:vehicle_id')
	.get(function(req, res) {
		Vehicle.findById(req.params.vehicle_id, function(err, vehicle) {
			if(err) {
				res.send(err);
			}
			res.json(vehicle);
		});
	});

//Create route for make
router.route('/vehicle/make/:vehicle_make')
	.get(function(req, res) {
		Vehicle.find({make: req.params.vehicle_make},function(err, vehicles){

			if(err) {
				res.send(err);
			}
			res.json(vehicles);
		});
	});

//Create route for colour
router.route('/vehicle/colour/:vehicle_colour')
	.get(function(req, res) {
		Vehicle.find({colour: req.params.vehicle_colour}, function(err, vehicle) {
			if (err) {
				res.send(err);
			}
			res.json(vehicle);
		});
	});
// Build Server
app.listen(port);
// Print friendly message to console.
console.log('Server listening on port ' + port);
