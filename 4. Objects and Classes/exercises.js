// 1. Employees
function employees(arr) {
    const employeeInfo ={};
    for (let emp of arr) {
        employeeInfo[emp] = emp.length;
    };

    for (let [name, number] of Object.entries(employeeInfo)) {
        console.log(`Name: ${name} -- Personal Number: ${number}`);
    };
};

// employees(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);
// employees(['Samuel Jackson','Will Smith','Bruce Willis','Tom Holland']);

// 2. Towns
function towns(arr) {
    let objectsArr=[];
    for (let t of arr) {
        let [town, latitude, longitude] = t.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        console.log({town, latitude, longitude});
    }
};

// towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
// towns(['Plovdiv | 136.45 | 812.575']);

// 3. Store Provision
function storeProvision(stockArr, orderArr) {
    const stockObj = {};
    for (let i = 0; i < stockArr.length; i += 2) {
        stockObj[stockArr[i]] = Number(stockArr[i + 1]);
    };
    for (let i = 0; i < orderArr.length; i += 2) {
        if (stockObj[orderArr[i]]) {
            stockObj[orderArr[i]] += Number(orderArr[i + 1]);
        } else {
            stockObj[orderArr[i]] = Number(orderArr[i + 1]);
        };
    };
    for (let [product, quantity] of Object.entries(stockObj)) {
        console.log(`${product} -> ${quantity}`);
    }
};

// storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
// ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
// storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
// [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ]);

// 4. Movies
function manageMovies(input) {
    const movies = [];
  
    function findMovieIndex(movieName) {
      return movies.findIndex(movie => movie.name === movieName);
    }
  
    input.forEach(command => {
      const tokens = command.split(' ');
  
      if (tokens[0] === 'addMovie') {
        const movieName = tokens.slice(1).join(' ');
        if (!movies.some(movie => movie.name === movieName)) {
          movies.push({ name: movieName });
        }
      } else if (tokens.includes('directedBy')) {
        const movieName = tokens.slice(0, tokens.indexOf('directedBy')).join(' ');
        const director = tokens.slice(tokens.indexOf('directedBy') + 1).join(' ');
        const movieIndex = findMovieIndex(movieName);
        if (movieIndex !== -1) {
          movies[movieIndex].director = director;
        }
      } else if (tokens.includes('onDate')) {
        const movieName = tokens.slice(0, tokens.indexOf('onDate')).join(' ');
        const date = tokens.slice(tokens.indexOf('onDate') + 1).join(' ');
        const movieIndex = findMovieIndex(movieName);
        if (movieIndex !== -1) {
          movies[movieIndex].date = date;
        }
      }
    });
  
    const validMovies = movies.filter(movie => movie.name && movie.director && movie.date);
    for (let movie of validMovies) {
        console.log(JSON.stringify(movie));
    };
};


// manageMovies([
// 'addMovie Fast and Furious',
// 'addMovie Godfather',
// 'Inception directedBy Christopher Nolan',
// 'Godfather directedBy Francis Ford Coppola',
// 'Godfather onDate 29.07.2018',
// 'Fast and Furious onDate 30.07.2018',
// 'Batman onDate 01.08.2018',
// 'Fast and Furious directedBy Rob Cohen']);

// manageMovies(['addMovie The Avengers',
// 'addMovie Superman',
// 'The Avengers directedBy Anthony Russo',
// 'The Avengers onDate 30.07.2010',
// 'Captain America onDate 30.07.2010',
// 'Captain America directedBy Joe Russo']);

// 5. Inventory
function createHeroRegister(input) {
    const heroes = [];
  
    input.forEach(heroData => {
      const [name, level, itemsStr] = heroData.split(' / ');
      const items = itemsStr ? itemsStr.split(', ') : [];
      heroes.push({ name, level: Number(level), items });
    });
  
    const sortedHeroes = heroes.sort((a, b) => a.level - b.level);
  
    sortedHeroes.forEach(hero => {
      console.log(`Hero: ${hero.name}`);
      console.log(`level => ${hero.level}`);
      if (hero.items.length > 0) {
        console.log(`items => ${hero.items.join(', ')}`);
      }
    });
};

// createHeroRegister([
// 'Isacc / 25 / Apple, GravityGun',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara']);

// createHeroRegister([
// 'Batman / 2 / Banana, Gun',
// 'Superman / 18 / Sword',
// 'Poppy / 28 / Sentinel, Antara']);

// 6. Words Tracker
function wordsTracker(arr) {
    let searchedWords = arr.shift();
    let wordsObj = {};
    for (let word of searchedWords.split(' ')) {
        wordsObj[word] = 0;
    };
    for (let word of arr) {
        if (wordsObj[word] >= 0) {
            wordsObj[word] += 1;
        };
    };
    let wordsArr = Object.entries(wordsObj);
    wordsArr = wordsArr.sort(([keya, valuea], [keyb, valueb]) => valueb - valuea);
    wordsObj = Object(wordsArr);
    for (let [word, num] of wordsArr) {
        console.log(`${word} - ${num}`);
    }
};


// wordsTracker(['this sentence',
// 'In', 'this', 'sentence', 'you', 'have',
// 'to', 'count', 'the', 'occurrences', 'of',
// 'the', 'words', 'this', 'and', 'sentence',
// 'because', 'this', 'is', 'your', 'task']);

// wordsTracker(['is the',
// 'first', 'sentence', 'Here', 'is',
// 'another', 'the', 'And', 'finally', 'the',
// 'the', 'sentence']);


// 7. Odd Occurrences
function oddOccurrences(string) {
    let words = new Map();
    for (let word of string.split(' ')) {
        if (words.has(word.toLowerCase())) {
            words.set(word.toLowerCase(), words.get(word.toLowerCase()) + 1);
        } else {
            words.set(word.toLowerCase(), 1);
        };
    };
    let wordsArr = [];
    words.forEach((count, word) => {
        if (count % 2 === 1) {
            wordsArr.push(word);
        };
    });
    console.log(wordsArr.join(' '));
};

// oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
// oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');

// 8. Piccolo
function manageParkingLot(input) {
    const parkingLot = new Set();
  
    for (let details of input) {
        let [direction, carNumber] = details.split(', ')
      if (direction === 'IN') {
        parkingLot.add(carNumber);
      } else if (direction === 'OUT') {
        parkingLot.delete(carNumber);
      }
    };
  
    if (parkingLot.size === 0) {
      console.log("Parking Lot is Empty");
    } else {
      const sortedCarNumbers = [...parkingLot].sort((a, b) => a.localeCompare(b));
      sortedCarNumbers.forEach(carNumber => {
        console.log(carNumber);
      });
    }
};

// manageParkingLot(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 
// 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']);
// manageParkingLot(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']); 

// 9. Make a Dictionary
function combineTermsAndDescriptions(jsonStrings) {
    const dictionary = {};
  
    jsonStrings.forEach(jsonString => {
      const parsedObject = JSON.parse(jsonString);
      const term = Object.keys(parsedObject)[0];
      const description = parsedObject[term];
      dictionary[term] = description;
    });
  
    Object.keys(dictionary)
      .sort()
      .forEach(term => {
        const definition = dictionary[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
      });
};

// combineTermsAndDescriptions([
// '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
// '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
// '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
// '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
// '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);

// combineTermsAndDescriptions([
// '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
// '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."}',
// '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
// '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
// '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} ']);

// 10.Class Vehicle
class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: parts.engine * parts.power
        };
        this.fuel = fuel;
    };
    drive (fuelLoss) {
        this.fuel -= fuelLoss;
    };
    get quality() {
        return this.parts.engine * this.parts.power;
    }
};

// let parts = { engine: 6, power: 100 };
// let vehicle = new Vehicle('a', 'b', parts, 200);
// vehicle.drive(100);
// console.log(vehicle.fuel);
// console.log(vehicle.parts.quality);


// let parts = {engine: 9, power: 500};
// let vehicle = new Vehicle('l', 'k', parts, 840);
// vehicle.drive(20);
// console.log(vehicle.fuel);