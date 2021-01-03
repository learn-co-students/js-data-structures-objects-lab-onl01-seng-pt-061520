// Write your solution in this file!
 const driver = {};

 function updateDriverWithKeyAndValue(driver, key, value) {
     let newDriver = Object.assign({}, driver, {[key]: value} )
     return newDriver
 }

 function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    let newDriver = Object.assign(driver, {[key]: value} )
    return newDriver
}

function deleteFromDriverByKey(driver, key){
    return Object.assign({}, delete driver.key);
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}