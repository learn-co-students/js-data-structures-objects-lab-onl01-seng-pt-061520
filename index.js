// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  // This function should not mutate the driver and should 
  //return a new driver that has an updated value for the key passed in.
   return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  //This function should mutate the driver and should 
  //return a new driver that has an updated value for the key passed in.
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key, value) {
   // It should delete the key/value pair for the key that was passed 
   //in from the driver Object. This should all not actually mutate the driver passed in.
   const newObj = Object.assign({}, driver);
   delete newObj[key];
   return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
   // this function should work the same as deleteFromDriverByKey() but 
   //it should mutate the driver passed in. Be sure and consider whether 
   //dot-notation or bracket-notation might affect your solution.
}