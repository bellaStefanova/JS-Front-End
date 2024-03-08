// 1. Smallest of Three Numbers
function smallestNumber(intA, intB, intC) {
    let smallest = intA;
    if (smallest > intB) {
        smallest = intB;
    };
    if (smallest > intC) {
        smallest = intC;
    };
    console.log(smallest);
};

smallestNumber(2, 5, 3);
smallestNumber(600, 342, 123);
smallestNumber(25, 21, 4);
smallestNumber(2, 2, 2);

console.log('~'.repeat(100));

// 2. Add and Subtract
function addAndSubtract(intA, intB, intC) {
    function sum(x, y) {
        return x + y;
    };
    function subtract(resultSum, z) {
        return resultSum - z;
    };
    console.log(subtract(sum(intA,intB), intC));
};

addAndSubtract(23,6,10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);

console.log('~'.repeat(100));

// 3. Characters in Range
function charsInRange(charA, charB) {
    let smaller;
    let bigger;
    let symbolsArr =[];
    if (charA < charB) {
        smaller = charA.charCodeAt(0);
        bigger = charB.charCodeAt(0);
    } else {
        smaller = charB.charCodeAt(0);
        bigger = charA.charCodeAt(0);
    };
    for (let i = smaller + 1; i < bigger; i++) {
        symbolsArr.push(String.fromCharCode(i));        
    };
    console.log(symbolsArr.join(' '))
};

charsInRange('a', 'd');
charsInRange('#', ':');
charsInRange('C', '#');

console.log('~'.repeat(100));

// 4. Odd and Even Sum
function oddAndEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;
    numToArr = String(number).split('');
    for (let i of numToArr) {
        if (i % 2 == 1) {
            oddSum += Number(i);
        } else {
            evenSum += Number(i);
        }
    };
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
};

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);

console.log('~'.repeat(100));

// 5. Palindrome Integers
function palindrome(numArr) {
    for (let i of numArr) {
        reversed = Number(String(i).split('').reverse().join(''));
        console.log(i === reversed);
    }
};

palindrome([123,323,421,121]);
palindrome([32,2,232,1010]);

console.log('~'.repeat(100));

// 6. Password Validator
function passwordValidator(password) {
    let passwordValid = true;
    let digitsAndLettersOnly = true;
    let digitsCount = 0;
    if (password.length < 6 || password.length > 10) {
        passwordValid = false;
        console.log('Password must be between 6 and 10 characters');
    };
    for (let i of password.split('')) {
        if (i.match(/[A-z0-9]/) == null) {
            passwordValid = false;
            digitsAndLettersOnly = false;  
        };
        if (i.match(/[0-9]/)) {
            digitsCount += 1;
        };
    };
    if (!digitsAndLettersOnly) {
        console.log('Password must consist only of letters and digits');
    };
    if (digitsCount < 2) {
        passwordValid = false;
        console.log('Password must have at least 2 digits')
    };
    if (passwordValid) {
        console.log('Password is valid');
    };
};

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');

console.log('~'.repeat(100));

// 7. NxN Matrix
function nXnMatrix(number) {
    let row = '';
    for (let i = 1; i <= number; i++) {
        row = `${number} `.repeat(number);
        console.log(row);
    }
};

nXnMatrix(3);
nXnMatrix(7);

console.log('~'.repeat(100));

// 8. Perfect Number
function perfectNumber(number) {
    let sumOfDivisors = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            sumOfDivisors += i;
        };
    };
    if (number > 0 && number == sumOfDivisors) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    };
};

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);

console.log('~'.repeat(100));

// 9. Loading Bar
function loadingBar(number) {
    let scale = `[${'%'.repeat(number / 10)}${'.'.repeat(10 - number / 10)}]`
    if (number < 100) {
        console.log(`${number}% ${scale}`);
        console.log("Still loading...");
    } else {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    };
};

loadingBar(30);
loadingBar(50);
loadingBar(100);

console.log('~'.repeat(100));

// 10. Factorial Division
function factorialDivision(intA, intB) {
    function factorial(x) {
        let result = 1;
        for (let i = x; i > 1; i--) {
            result *= i;
        };
        return result;
    };

    let divided = factorial(intA) / factorial(intB);
    console.log(divided.toFixed(2));
};

factorialDivision(5, 2);
factorialDivision(6, 2);

console.log('~'.repeat(100));
