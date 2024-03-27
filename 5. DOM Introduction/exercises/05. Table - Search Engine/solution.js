function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      tableRows = document.querySelectorAll('tbody tr');
      searchedString = document.getElementById('searchField').value;
      document.getElementById('searchField').value = '';
      let markRow;
      for (let row of tableRows) {
         markRow = false;
         row.classList.remove('select');
         for (let cell of row.children) {
            console.log(cell);
            if (cell.textContent.includes(searchedString)) {
               markRow = true;
            }
         }
         if (markRow) {
            row.className = 'select';
         } 
      }

   }
};
