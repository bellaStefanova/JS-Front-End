// 1. *Validity Checker
function validityChecker(x1, y1, x2, y2) {
    let distance = 0;
    if (x1 == 0 || y1 == 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }
    else {
        distance = Math.sqrt(x1 ** 2 + y1 ** 2)
        if (distance % 1 > 0) {
            console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
        }
        else {
            console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
        }
    };
    if (x2 == 0 || y2 == 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }
    else {
        distance = Math.sqrt(x2 ** 2 + y2 ** 2)
        if (distance % 1 > 0) {
            console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
        }
        else {
            console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
        }
    };
    distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    if (distance % 1 > 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }
};

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);

// 2. *Words Uppercase
function convertUpper(text) {
    let words = text.toUpperCase().split(/[^A-Z0-9]/); // Split the input string into an array of words
    words = words.filter(function (el) {
        return el != '';
      })
    console.log(words.join(', '));
};

convertUpper('Hi, how are you?');
convertUpper('hello');
convertUpper('Functions in JS can be nested, i.e. hold other functions');
convertUpper('H2o');

// 3. *Calculator
function calc (a, oper, b) {
    operations = {
        '+': a + b,
        '-': a - b,
        '/': a / b,
        '*': a * b,
    };
    console.log(operations[oper].toFixed(2))
};

calc(5, '+', 10);
calc(25.5, '-', 3);

// 4. *Gladiator Expenses
function gladiatorExpenses(p1, p2, p3, p4, p5) {
    let total_expenses = 0;
    for (let i = 1; i <= p1; i++) {
        if (i % 2 == 0) {
            total_expenses += p2
        };
        if (i % 3 == 0) {
            total_expenses += p3
        };
        if (i % 6 == 0) {
            total_expenses += p4
        };
        if (i % 12 == 0) {
            total_expenses += p5
        };
    }
    console.log(`Gladiator expenses: ${total_expenses.toFixed(2)} aureus`);
};

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);

// 5. *Spice Must Flow
function totalAmountOfSpice(num) {
    let days = 0;
    let total = 0;
    while (num >= 100) {
        days += 1;
        total += num - 26;
        num -= 10;
    };
    if (days > 0) {
        total -= 26;
    };
    console.log(days);
    console.log(total);
};

totalAmountOfSpice(111);
totalAmountOfSpice(450);
