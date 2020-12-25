// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(drivers, key, value) {
    return Object.assign({}, drivers, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(drivers, key, value) {
    drivers[key] = value;
    return drivers
}

function deleteFromDriverByKey(drivers, key) {
    const newObj = Object.assign({}, drivers);
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromDriverByKey(drivers, key) {
    delete drivers[key];
    return drivers
}
