function create(words) {
   let content = document.getElementById('content');
   words.forEach(word => {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      content.appendChild(div);
   });

   let wordContainers = document.querySelectorAll('#content div');
   for (let wordContainer of wordContainers) {
      wordContainer.addEventListener('click', function () {
         let p = wordContainer.querySelector('p');
         p.style.display = 'block';
      });
   }
}