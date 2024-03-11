// 1.	Car Wash
function carWash(commandsArr) {
  let carStatus = 0;
  let actions = {
    'soap': x => x + 10,
    'water': x => x * 1.2,
    'vacuum cleaner': x => x * 1.25,
    'mud': x => x * 0.9,
  };

  for (let c of commandsArr) {
    carStatus = actions[c](carStatus);
  };

  console.log(`The car is ${carStatus.toFixed(2)}% clean.`);
};

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);	//The car is 39.00% clean.
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);	//The car is 13.12% clean.

// 2.	Number Modification
function numberModification(number) {
  let numberToArr = [];
  let numSum = 0;
  function calculateAverageDigits(number) {
    numberToArr = String(number).split('');
    numSum = 0;
    for (let i of numberToArr) {
      numSum += Number(i);
    };
    numSum /= numberToArr.length;
    return numSum;
  };
  let averageDigits = calculateAverageDigits(number);
  while (averageDigits <= 5) {
    number += '9';
    averageDigits = calculateAverageDigits(number);
  };
  console.log(number);
};

numberModification(101);	//1019999
numberModification(5835);	//5835

// 3.	Points Validation
function pointsValidation(coordinates) {
  let x1 = coordinates[0];
  let x2 = coordinates[2];
  let y1 = coordinates[1];
  let y2 = coordinates[3];
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

pointsValidation([3, 0, 0, 4]);	//{3, 0} to {0, 0} is valid
// {0, 4} to {0, 0} is valid
// {3, 0} to {0, 4} is valid
pointsValidation([2, 1, 1, 1]) //	{2, 1} to {0, 0} is invalid
// {1, 1} to {0, 0} is invalid
// {2, 1} to {1, 1} is valid

// 4.	Radio Crystals 
function radioCrystals(info) {
  const desiredThickness = info.shift();
  let chunks = info;

  let actions = {
    'cut': x => x / 4,
    'lap': x => x * 0.8,
    'grind': x => x - 20,
    'etch': x => x - 2,
    'x-ray': x => x + 1,
  };

  let actionsDone = [];
  let initialThickness = 0;

  for (let chunk of chunks) {
    actionsDone = [];
    initialThickness = chunk;
    while (chunk != desiredThickness) {
      for (let action in actions) {
        if (desiredThickness - 1 <= actions[action](chunk)) {
          if (chunk != desiredThickness && action == 'x-ray' && actionsDone.filter(x => x == 'x-ray').length > 0) {
            break;
          };
          chunk = actions[action](chunk);
          actionsDone.push(action);
          if (actions[action](chunk) < desiredThickness) {
            chunk = Math.floor(chunk);
          }
          break;
        };
      };
    };
    console.log(`Processing chunk ${initialThickness} microns`);
    if (actionsDone.find(x => x == 'cut')) {
      console.log(`Cut x${actionsDone.filter(x => x == 'cut').length}`)
      console.log('Transporting and washing')
    };
    if (actionsDone.find(x => x == 'lap')) {
      console.log(`Lap x${actionsDone.filter(x => x == 'lap').length}`)
      console.log('Transporting and washing')
    };
    if (actionsDone.find(x => x == 'grind')) {
      console.log(`Grind x${actionsDone.filter(x => x == 'grind').length}`)
      console.log('Transporting and washing')
    };
    if (actionsDone.find(x => x == 'etch')) {
      console.log(`Etch x${actionsDone.filter(x => x == 'etch').length}`)
      console.log('Transporting and washing')
    };
    if (actionsDone.find(x => x == 'x-ray')) {
      console.log(`X-ray x${actionsDone.filter(x => x == 'x-ray').length}`)
    };
    console.log(`Finished crystal ${desiredThickness} microns`)
  };
};

// radioCrystals([1375, 50000]);
// radioCrystals([1000, 4000, 8100]);
// radioCrystals([10, 14])

// 5.	Print DNA
function printDNA(number) {
  const DNAArr = 'ATCGTTAGGG'.repeat(number).split('').slice(0, number * 2);
  let row = 'first';
  for (let i = 0; i < number; i++) {
    if (row == 'first') {
      console.log(`**${DNAArr[i * 2]}${DNAArr[i * 2 + 1]}**`);
      row = 'second';
    } else if (row == 'second') {
      console.log(`*${DNAArr[i * 2]}--${DNAArr[i * 2 + 1]}*`);
      row = 'third';
    } else if (row == 'third') {
      console.log(`${DNAArr[i * 2]}----${DNAArr[i * 2 + 1]}`);
      row = 'fourth';
    } else if (row == 'fourth') {
      console.log(`*${DNAArr[i * 2]}--${DNAArr[i * 2 + 1]}*`);
      row = 'fifth';
    } else if (row == 'fifth') {
      console.log(`**${DNAArr[i * 2]}${DNAArr[i * 2 + 1]}**`);
      row = 'second';
    };
  };
};

printDNA(4);
printDNA(10);