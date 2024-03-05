// 1. *Login
function login(arr){
    let username = arr.shift();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].split('').reverse().join('') === username) {
            console.log(`User ${username} logged in.`);
            return;
        } else {
            if (i <= 2) {
                console.log('Incorrect password. Try again.');
            } else {
                console.log(`User ${username} blocked!`);
                return;
            }
        };  
    };
};

login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);

// 2. * Bitcoin "Mining"
function bitcoinMining(numArr) {
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let collectedMoney = 0;
    let bitcoinsBought = 0;
    let dayFirstBitcoinBought = 0;

    for (let i = 0; i < numArr.length; i++) {
        if ((i + 1) % 3 == 0) {
            collectedMoney += goldPrice * 0.7 * numArr[i];
        } else {
            collectedMoney += goldPrice * numArr[i];
        };

        if (collectedMoney >= bitcoinPrice) {
            bitcoinsBought += parseInt(collectedMoney / bitcoinPrice);
            if (dayFirstBitcoinBought == 0) {
                dayFirstBitcoinBought = i + 1;
            };
            collectedMoney = collectedMoney % bitcoinPrice;
        };
    };
    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (bitcoinsBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayFirstBitcoinBought}`);
    };
    console.log(`Left money: ${collectedMoney.toFixed(2)} lv.`);
};

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);

// 3. * The Pyramid of King Djoser
function djoserPyramid(base, increment) {
    let iter = 1;
    let levels = Math.ceil(base / 2);
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    for (let i = base; i > 0; i -= 2) {
        if (iter % 5 == 0 && iter < levels) {
            stone += (i - 2) ** 2 * increment;
            lapis += 4 * (i - 1) * increment;
        } else if (iter == levels) {
            gold += i**2 * increment;
        } else {
            stone += (i - 2) ** 2 * increment;
            marble += 4 * (i - 1) * increment;
        };
        iter += 1;
    };
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(levels * increment)}`)
};

djoserPyramid(11, 1);
djoserPyramid(11, 0.75);
djoserPyramid(12, 1);
djoserPyramid(23, 0.5);