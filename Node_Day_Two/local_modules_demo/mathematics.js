
// Each js file itself is a local module.
// Each js file has its own context.

/*
var pi = 3.14;
var maxTime = 1000;

function addition() {
    console.log('Addition Performed..')
}

module.exports.pi_value = pi;
module.exports.maxTime = maxTime;
module.exports.add = addition;
*/

/*
var pi = 3.14;
var maxTime = 1000;

function addition() {
    console.log('Addition Performed..')
}

module.exports = {
    pi_value: pi,
    maxTime: maxTime,
    add: addition
}
*/

module.exports = {
    pi_value: 3.14,
    maxTime: 1000,
    add: () => {
        console.log('Addition Performed..')
    }
}