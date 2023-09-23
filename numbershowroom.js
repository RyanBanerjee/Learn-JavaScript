// Compute even numbers within a given range
function even_numbers(num1, num2) {
    for(var i = num1; i <= num2; i++) {
        if(i % 2 == 0) {
            console.log(i)
        }
    }
}

// Compute odd numbers within a given range
function odd_numbers(num1, num2) {
    for (var i = num1; i <= num2; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}

// Compute factors of a number within a given range
function factors(num1, num2, num) {
    for (var i=num1; i <= num2; i++) {
        if (num % i == 0) {
            console.log(i);
        }
    }
}

// Compute multiples of a number within a given range
function multiples(num1, num2, num) {
    for (let i = num1; i <= num2; i++) {
        if (i % num == 0) {
            console.log(i)
        }
    }
}

// Compute prime numbers within a given range
function prime(num1, num2) {
    var isPrime; 
    for (let i = num1; i <= num2; i++) {
        isPrime = true;
        for (let j = 2; j<i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        } 
        if (isPrime){
            console.log(i);
        }
   }
}

function number_showroom(num1, num2, operator) {
    return operator(num1, num2);
}
// number_showroom(10, 150, odd_numbers);

function number_showroom(num1, num2, operator, num) {
    return operator(num1, num2, num);
}
// number_showroom(1,60, multiples, 6)