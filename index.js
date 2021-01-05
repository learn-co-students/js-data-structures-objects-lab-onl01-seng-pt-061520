// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driv, k, v) {
    let newDriver = { ...driv };
    newDriver[k] = v;
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driv, k, v) {
    driv[k] = v;
    return driv
}

function deleteFromDriverByKey(driv, k) {
    let newDriver = { ...driv };
    delete newDriver[k];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driv, k) {
    delete driv[k];
    return driv;
}