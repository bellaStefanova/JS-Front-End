function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const restaurantsString = document.querySelector('#inputs textarea').value;
      const restaurantsArr = restaurantsString
                              .replace('["', '')
                              .replace('"]', '')
                              .split('","');

      let restaurantsObj = new Object;

      for (let restaurant of restaurantsArr) {
         let restaurantName = restaurant.split(' - ')[0];
         let workers = restaurant.split(' - ')[1];
         if (!restaurantsObj[restaurantName]) {
            restaurantsObj[restaurantName] = {}
         }
         if (!restaurantsObj[restaurantName]['workers']) {
            restaurantsObj[restaurantName] = {'workers': {}}
         }

         for (let worker of workers.split(', ')) {
            let name = worker.split(' ')[0];
            let salary = worker.split(' ')[1];
            restaurantsObj[restaurantName]['workers'][name] = salary;
         }
      }

      let bestRestaurantAvgSalary = 0;
      let bestRestaurantName ='';

      for (let restaurant in restaurantsObj) {
         let workersCount = 0;
         let totalSalary = 0;
         let bestSalary = 0;
         for (let worker in restaurantsObj[restaurant]['workers']) {
            salary = Number(restaurantsObj[restaurant]['workers'][worker]);
            totalSalary += salary;
            workersCount += 1;
            if (Number(salary) > bestSalary ) {
               bestSalary = Number(salary);
            };
         }
         restaurantsObj[restaurant]['workersCount'] = workersCount;
         restaurantsObj[restaurant]['totalSalary'] = totalSalary;
         restaurantsObj[restaurant]['avgSalary'] = (totalSalary / workersCount).toFixed(2);
         restaurantsObj[restaurant]['bestSalary'] = bestSalary.toFixed(2);
         if (Number(restaurantsObj[restaurant]['avgSalary']) > bestRestaurantAvgSalary) {
            bestRestaurantAvgSalary = Number(restaurantsObj[restaurant]['avgSalary']);
            bestRestaurantName = restaurant;
         }
      };

      let bestWorkersArr = Object.entries(restaurantsObj[bestRestaurantName]['workers']);
      bestWorkersArr.sort(([, salaryA], [, salaryB]) => parseInt(salaryB) - parseInt(salaryA));
      const resultArray = bestWorkersArr.map(([name, salary]) => `Name: ${name} With Salary: ${salary}`);


      const bestRestaurantElement = document.querySelector('#bestRestaurant p')
      bestRestaurantElement.textContent = `Name: ${bestRestaurantName} Average Salary: ${restaurantsObj[bestRestaurantName]['avgSalary']} Best Salary: ${restaurantsObj[bestRestaurantName]['bestSalary']}`
      const bestRestaurantWorkersElement = document.querySelector('#workers p');
      bestRestaurantWorkersElement.textContent = resultArray.join(' ');
      
   }
}