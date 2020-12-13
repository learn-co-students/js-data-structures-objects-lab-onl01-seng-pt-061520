// Write your solution in this file!
function updateDriverWithKeyAndValue(driver, key, value) {
	return {...driver, ...{ [key]: value }};
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
	driver[key] = value;
	return driver;
}