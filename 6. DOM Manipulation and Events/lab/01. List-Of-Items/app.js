function addItem() {
    let parentEl = document.getElementById('items');
    let childElText =  document.getElementById('newItemText').value;
    let childEl = document.querySelector('#items li').cloneNode(true);
    childEl.textContent = childElText;

    parentEl.appendChild(childEl);
}