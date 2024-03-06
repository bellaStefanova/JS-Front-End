// Format Grade
function formatGrade(gradeFloat) {
    if (gradeFloat < 3) {
        console.log(`Fail (2)`);
    } else if (gradeFloat >= 3 && gradeFloat < 3.5) {
        console.log(`Poor (${gradeFloat.toFixed(2)})`);
    } else if (gradeFloat >= 3.5 && gradeFloat < 4.5) {
        console.log(`Good (${gradeFloat.toFixed(2)})`);
    } else if (gradeFloat >= 4.5 && gradeFloat < 5.5) {
        console.log(`Very good (${gradeFloat.toFixed(2)})`);
    } else if (gradeFloat >= 5.5 && gradeFloat <= 6) {
        console.log(`Excellent (${gradeFloat.toFixed(2)})`);
    };
};


formatGrade(3.33); //Poor (3.33)
formatGrade(4.50); // Very good (4.50)
formatGrade(2.99); // Fail (2)

console.log('~'.repeat(100));

// 2. Math Power
function mathPower (baseInt, levelInt) {
    console.log(baseInt ** levelInt);
};

mathPower(2, 8);
mathPower(3, 4);

console.log('~'.repeat(100));

// 3. Repeat String
function repeatString (string, repeatTimes) {
    return string.repeat(repeatTimes);
};

console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));

console.log('~'.repeat(100));

//4. Orders
function orders(product, quantity) {
    menu = {
        'coffee': 1.50,
        'water': 1,
        'coke': 1.4,
        'snacks': 2,
    };
    console.log((quantity * menu[product]).toFixed(2));
};

orders("water", 5);
orders("coffee", 2);

console.log('~'.repeat(100));

// 5. Simple Calculator
function simpleCalculator(numOne, numTwo, operator) {
    functions = {
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b,
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b,
    }
    console.log(functions[operator](numOne, numTwo))
};

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');

console.log('~'.repeat(100));

// 6. Sign Check
function signCheck(numOne, numTwo, numThree) {
    let isPositiveArr = [numOne, numTwo, numThree].map(a => a > 0).filter(b => b == false);
    if (isPositiveArr.length == 1 || isPositiveArr.length == 3) {
        console.log('Negative');
    } else {
        console.log('Positive');
    };
};

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(5, 1, 1);

