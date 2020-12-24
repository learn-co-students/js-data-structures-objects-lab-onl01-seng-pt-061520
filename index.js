// Write your solution in this file!
const driver = { name: "Sam", address: "Test" };

function updateDriverWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, {
        [key]: value
    })
}


function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
}


function deleteFromDriverByKey(object, key) {
    let newObj = Object.assign({}, object)
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromDriverByKey(object, key) {
    delete object[key]
    return object
}