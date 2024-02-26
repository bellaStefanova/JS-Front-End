// 1. Ages
function definePerson(age) {
    if (age >= 0 && age <= 2) {
        console.log('baby')
    }
    else if (age >= 3 && age <= 13) {
        console.log('child')
    }
    else if (age >= 14 && age <= 19) {
        console.log('teenager')
    }
    else if (age >= 20 && age <= 65) {
        console.log('adult')
    }
    else if (age >= 66) {
        console.log('elder')
    }
    else {
        console.log('out of bounds')
    }
};

definePerson(20);
definePerson(1);
definePerson(100)
definePerson(-1);

// 2. Vacation
function totalPrice(num, type, day) {
    let total = 0;
    if (type == 'Business' && num >= 100) {
        num -= 10
    };

    if (type == 'Students') {
        if (day == 'Friday') {
            total = 8.45
        }
        else if (day == 'Saturday') {
            total = 9.8
        }
        else if (day == 'Sunday') {
            total = 10.46
        }
    }
    else if (type == 'Business') {
        if (day == 'Friday') {
            total = 10.9
        }
        else if (day == 'Saturday') {
            total = 15.6
        }
        else if (day == 'Sunday') {
            total = 16
        }
    }
    if (type == 'Regular') {
        if (day == 'Friday') {
            total = 15
        }
        else if (day == 'Saturday') {
            total = 20
        }
        else if (day == 'Sunday') {
            total = 22.5
        }
    };
    total *= num;
    if (type == 'Students' && num >= 30) {
        total -= total * 0.15
    }
    else if (type == 'Regular' && num >= 10 && num <= 20) {
        total *= 0.95
    }
    console.log(`Total price: ${total.toFixed(2)}`)
}

totalPrice(30, 'Students', 'Sunday')
totalPrice(40, 'Regular', 'Saturday')

// 3. Leap Year
function checkLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        console.log('yes')
    }
    else{
        console.log('no')
    }
};

checkLeapYear(1984);
checkLeapYear(2003);
checkLeapYear(4);

// 4. Print and Sum
function numbers(start, end) {
    let total = 0;
    let numstr = '';
    for (let i = start; i <= end; i++) {
        total += i;
        numstr += `${i} `
    };
    console.log(numstr.trimEnd());
    console.log(`Sum: ${total}`)
};

numbers(5, 10);
numbers(0, 26);

// 5. Multiplication Table
function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`)
    }
};

printTable(5);
printTable(2);

// 6. Sum Digits
function digitsSum(num) {
    let total = 0;
    let numToStr = num.toString()
    for (let i = 0; i < numToStr.length; i++) {
        total += parseInt(numToStr[i])
    };
    console.log(total)
};

digitsSum(245678);
digitsSum(97561);
digitsSum(543);

// 7. Chars to String
function charsToString (a, b, c) {
    console.log(a + b + c)
};
charsToString('a', 'b', 'c');
charsToString('%', '2', 'o');
charsToString('1', '5', 'p');

// 8. Reversed Chars
function charsToStringRev (a, b, c) {
    console.log(`${c} ${b} ${a}`)
};

charsToStringRev('A', 'B', 'C');
charsToStringRev('1', 'L', '&');

// 9. Fruit
function buyFruit (fruit, weight, price) {
    let total = weight * price / 1000
    console.log(`I need $${total.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`)
};

buyFruit('orange', 2500, 1.80);
buyFruit('apple', 1563, 2.35);

// 10. Same Numbers
function sameNumbers(num) {
    let isSame = true;
    let numToStr = num.toString();
    let firstDigit = numToStr[0];
    let total = parseInt(numToStr[0]);
    for (let i = 1; i < numToStr.length; i++) {
        if (numToStr[i] !== firstDigit) {
            isSame = false;
        };
        total += parseInt(numToStr[i])
    }
    console.log(isSame);
    console.log(total);
};

sameNumbers(2222222);
sameNumbers(1234);

// 11. Road Radar
function checkSpeed(speed, area) {
    let limits = {
        motorway : 130,
        interstate : 90,
        city : 50,
        residential : 20,
    };
    let difference = speed - limits[area];
    let limit = limits[area];
    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    }
    else {
        let status = ''
        if (difference <= 20) {
            status = 'speeding'
        }
        else if (difference <= 40) {
            status = 'excessive speeding'
        }
        else {
            status = 'reckless driving'
        };
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
    }
};

checkSpeed(40, 'city');
checkSpeed(21, 'residential');
checkSpeed(120, 'interstate');
checkSpeed(200, 'motorway');

// 12. Cooking by Numbers
function cookingByNumbers (num, first, second, third, forth, fifth) {
    let actions = [first, second, third, forth, fifth];
    num = parseInt(num);
    for (let i = 0; i <= 4; i++) {
        if (actions[i] == 'chop') {
            num /= 2
        }
        else if (actions[i] == 'dice') {
            num = Math.sqrt(num)
        }
        else if (actions[i] == 'spice') {
            num += 1
        }
        else if (actions[i] == 'bake') {
            num *= 3
        }
        else if (actions[i] == 'fillet') {
            num -= 0.2*num
        }
        console.log(num)
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');