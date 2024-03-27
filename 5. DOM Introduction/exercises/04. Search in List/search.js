function search() {
   cityList = document.querySelectorAll('#towns li');
   selectedCity = document.getElementById('searchText').value;
   resultField = document.getElementById('result');
   totalCitiesFound = 0;

   for (let city of cityList) {
      if (city.textContent.includes(selectedCity)) {
         city.style.textDecoration = 'underline';
         city.style.fontWeight = 'bold';
         totalCitiesFound += 1;
      } else {
         city.style.textDecoration = 'none';
         city.style.fontWeight = 'normal';
      };
   };
   resultField.textContent = `${totalCitiesFound} matches found`;
};
