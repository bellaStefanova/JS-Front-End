let a =10;
let b = 20;
console.log(a+b);

var c = 30;

const pi = 3.14;

if (a < 10) {
	console.log('a is lower than 10');
} else if (a <= 20) {
	console.log('a is lower than 20');
} else {
	console.log('a is higher or equal to 20');
};

function add(a, b) {
	console.log(a + b);
};

add(2, 3);

console.log('The number pi is: ' + pi + '!');

console.log(`The number pi is: ${pi}!`);

console.log(pi.toFixed(2));

console.log('Let\'s go!');

// 1. Multiply the Number by 2
function multiplyBy2(number) {
	return number * 2;
}

console.log(multiplyBy2(2));
console.log(multiplyBy2(5));
console.log(multiplyBy2(10));

// 2. Student Information

function studentInformation(name, age, grade) {
	return `Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`;
}

console.log(studentInformation('John', 15, 5.54678));

// 3. Excellent Grade
function checkExcellent(grade) {
	if (grade>=5.5) {
		return 'Excellent';
	}
	else {
		return 'Not excellent';
	};
}

console.log(checkExcellent(5.5));
console.log(checkExcellent(4.35));

// 4. Month Printer

function monthPrinter(month) {
	switch (month) {
		case 1:
			return 'January';
		case 2:
			return 'February';
		case 3:
			return 'March';
		case 4:
			return 'April';
		case 5:
			return 'May';
		case 6:
			return 'June';
		case 7:
			return 'July';
		case 8:
			return 'August';
		case 9:
			return 'September';
		case 10:
			return 'October';
		case 11:
			return 'November';
		case 12:
			return 'December';
		default:
			return 'Error!';
	}
}

console.log(monthPrinter(2));
console.log(monthPrinter(13));

// 5. Math Operations

function mathOperations(a, b, operator) {
	switch (operator) {
		case '+':
			console.log(a + b);
		break;
		case '-':
			console.log(a - b);
		break;
		case '*':
			console.log(a * b);
		break;
		case '/':
			console.log(a / b);
		break;
		case '%':
			console.log(a % b);
		break;
		case '**':
			console.log(a ** b);
		break;
	}
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');

// 6.	Largest Number
function largestNumber(a, b, c) {
	console.log(`The largest number is ${Math.max(a, b, c)}.`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);


// 7.	Theatre Promotions
function ticketPrice (day, age) {
	let price = 0;
	if (age >= 0 && age <= 18) {
		if (day == 'Weekday') {
			price = '12$'
		}
		else if (day == 'Weekend') {
			price = '15$'
		}
		else {
			price = '5$'
		}
	}
	else if (age > 18 && age <= 64) {
		if (day == 'Weekday') {
			price = '18$'
		}
		else if (day == 'Weekend') {
			price = '20$'
		}
		else {
			price = '12$'
		}
	}
	else if (age > 64 && age <= 122) {
		if (day == 'Weekday') {
			price = '12$'
		}
		else if (day == 'Weekend') {
			price = '15$'
		}
		else {
			price = '10$'
		}
	}
	else {
		price = 'Error!'
	}
	console.log(price)
}

ticketPrice ('Weekday', 42)
ticketPrice ('Holiday', -12)
ticketPrice ('Holiday', 15)

// 8.	Circle Area

function calculateArea (input) {
	if (typeof input == 'number') {
		let area = Math.PI * input ** 2
		console.log (area.toFixed(2))
	}
	else{
		console.log (`We can not calculate the circle area, because we receive a ${typeof input}.`)
	}
};

calculateArea(5)
calculateArea('name')

// 9.	Numbers from 1 to 5
function numbers() {
	for (let i = 1; i <=5; i++) {
		console.log(i)
	}
}

numbers()

// 10.	Numbers from M to N
function undefinedNumbers(m, n) {
	for (let i = m; i >= n; i--) {
		console.log(i)
	}
}

undefinedNumbers(6, 2)
undefinedNumbers(4, 1)