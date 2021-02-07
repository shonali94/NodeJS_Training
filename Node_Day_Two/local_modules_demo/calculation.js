
function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}


module.exports = {
    add: addition,
    subtract: subtraction,
    product: multiplication,
    divide: division,
    pi: 3.14
}