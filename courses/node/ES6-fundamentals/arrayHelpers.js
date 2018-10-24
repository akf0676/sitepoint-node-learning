let array = [27, 32, 43, 54, 65, 76];


// Use MAP to grab and creata a new array from the an array

let vehicles = [
	{id: 1, model: "Focus", make: "Ford", year: "2010", is4wd: false},
	{id: 2, model: "Sportage", make: "Kia", year: "2011", is4wd: true},
	{id: 3, model: "Ceed", make: "Kia", year: "2011", is4wd: false},
	{id: 4, model: "Corsa", make: "Vauxhall", year: "2012", is4wd: false},
	{id: 5, model: "Camaro SS", make: "Dodge", year: "1976", is4wd: false},
];

let driver = {
	name: "Andy Farmer",
	vehicleID: 4
};

// Do you to see array functions output?
let isArrayFunctionTesting = false;

if(isArrayFunctionTesting) {
	console.log('FOREach=========');

	array.forEach(arrayElement => console.log(`This is the number in the array ${arrayElement}`))

	console.log('Map======');
	// Iterate through an array and perform some operation on each element.
	// Common used helper.

	/*
	* - Take the array and add one to each item - try and use arrow function with map
	*/

	let addOne = [];

	addOne = array.map(value =>	value + 1);

	console.log(`First array \n ${array} \nSecond Array \n ${addOne}`);

	vehicleModels = vehicles.map( (vehicle) => vehicle.model);

	console.log(vehicleModels);

	//Filer
	console.log('FILTER=====');
	// This will return all thats found

	let filterdVehicles = vehicles.filter(vehicle => vehicle.make === 'Kia');

	console.log(filterdVehicles);

	//Find
	console.log('FIND=====');
	// Find will only return the first object it finds
	let vehicle = vehicles.find( vehicle => vehicle.make === 'Kia');
	console.log(vehicle);
}

// Complex scenario multiple array
// Function to find the vehicle the driver has

function driverForVehicle(vehciles, driver) {
	let driversCar = vehciles.find(vehicle => vehicle.id === driver.vehicleID);

	console.log(`This is as string ${driver.name} and they drive a ${driversCar.year} ${driversCar.make} ${driversCar.model}`);
}
driverForVehicle(vehicles, driver);

// EVERY and SOME
// Every will check every element in the array and return true / false
// Some will check to see if some of the elements match the criteria and will return true / false

// REDUCE
// Iterate through an array, old version and then using reduce
// Lets find our average grade score.

// Data
let grades = [98, 87, 94, 82, 74, 89, 87];
let sum = 0;

// Loop through and add together
for (let  x = 0; x < grades.length; x++) {
	sum += grades[x];
}
console.log(`sum is = ${sum}\n`);
console.log(`The average grade is ${(sum / grades.length).toFixed(1)}`);

// New Syntax Sugar with Reduce
let initialTotalValue = 0;
let total = grades.reduce(function(sum, grade) {
	return sum + grade
}, initialTotalValue);
// and with more syntax sugar in an arrow function
let arrowTotal = grades.reduce((sum,  grade) => {
	return sum + grade;
}, initialTotalValue);
console.log(arrowTotal);
