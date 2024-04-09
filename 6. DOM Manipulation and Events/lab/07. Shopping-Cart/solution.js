function solve() {
   let products = document.querySelectorAll('.product');
   let checkOutButton = document.querySelector('.checkout');
   let textArea = document.querySelector('textarea');
   let totalPrice = 0;
   let productsBought = [];
   for (let product of products) {
      let buttonAdd = product.querySelector('.add-product');
      buttonAdd.addEventListener('click', () => {
         textArea.textContent += `Added ${product.querySelector('.product-title').textContent} for ${Number(product.querySelector('.product-line-price').textContent).toFixed(2)} to the cart.\n`;
         totalPrice += Number(product.querySelector('.product-line-price').textContent);
         if (!productsBought.includes(product.querySelector('.product-title').textContent)) {
            productsBought.push(product.querySelector('.product-title').textContent);
         };
      });
   };
   checkOutButton.addEventListener('click', () => {
      textArea.textContent += `You bought ${productsBought.join(', ')} for ${totalPrice.toFixed(2)}.`;
      for (let product of products) {
         product.querySelector('.add-product').disabled = true;
      }
      checkOutButton.disabled = true;
   });
}