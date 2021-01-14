let driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign(obj, { [key]: value })
}

function deleteFromDriverByKey(obj, key) {
    let a = Object.assign({}, obj)
    delete a[key]
    return a
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key]
    return obj
}