// 20 minutes
function cafeteria(inputArr) {
  let baristaObj = {};
  let numberOfBaristas = inputArr.shift();
  for (let i = 0; i < numberOfBaristas; i++) {
    let [baristaName, shift, beverages] = inputArr.shift().split(' ');
    baristaObj[baristaName] = { shift, beverages: beverages.split(',') };
  };

  for (let i = 0; i < inputArr.length; i++) {

    if (inputArr[i].includes('Prepare')) {
      let [command, baristaName, shift, beverage] = inputArr[i].split(' / ');
      if (baristaObj[baristaName].shift === shift && baristaObj[baristaName].beverages.includes(beverage)) {
        console.log(`${baristaName} has prepared a ${beverage} for you!`);
      } else {
        console.log(`${baristaName} is not available to prepare a ${beverage}.`);
      }
    } else if (inputArr[i].includes('Change Shift')) {
      let [command, baristaName, shift] = inputArr[i].split(' / ');
      baristaObj[baristaName].shift = shift;
      console.log(`${baristaName} has updated his shift to: ${shift}`);
    } else if (inputArr[i].includes('Learn')) {
      let [command, baristaName, beverage] = inputArr[i].split(' / ');
      if (baristaObj[baristaName].beverages.includes(beverage)) {
        console.log(`${baristaName} knows how to make ${beverage}.`);
      } else {
        baristaObj[baristaName].beverages.push(beverage);
        console.log(`${baristaName} has learned a new coffee type: ${beverage}.`);
      }
    } else if (inputArr[i].includes('Closed')) {
      break;
    }
  }

  for (let key in baristaObj) {
    console.log(`Barista: ${key}, Shift: ${baristaObj[key].shift}, Drinks: ${baristaObj[key].beverages.join(', ')}`);

  }
}



cafeteria([
  '3',
  'Alice day Espresso,Cappuccino',
  'Bob night Latte,Mocha',
  'Carol day Americano,Mocha',
  'Prepare / Alice / day / Espresso',
  'Change Shift / Bob / night',
  'Learn / Carol / Latte',
  'Learn / Bob / Latte',
  'Prepare / Bob / night / Latte',
  'Closed']);


cafeteria(['4',
  'Alice day Espresso,Cappuccino',
  'Bob night Latte,Mocha',
  'Carol day Americano,Mocha',
  'David night Espresso',
  'Prepare / Alice / day / Espresso',
  'Change Shift / Bob / day',
  'Learn / Carol / Latte',
  'Prepare / Bob / night / Latte',
  'Learn / David / Cappuccino',
  'Prepare / Carol / day / Cappuccino',
  'Change Shift / Alice / night',
  'Learn / Bob / Mocha',
  'Prepare / David / night / Espresso',
  'Closed']);

