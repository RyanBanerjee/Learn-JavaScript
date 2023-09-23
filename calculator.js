function sum(num1, num2) {
    var result = num1 + num2;
    return result;
}

function product(num1, num2) {
    var result = num1 * num2;
    return result;
}

function difference(num1, num2) {
    var result = num1 - num2;
    return result;
}

function quotient(num1, num2) {
    var result = num1 / num2;
    return result;
}

function remainder(num1, num2) {
    var result = num1 % num2;
    return result;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

console.log(calculator(38, 24, product))