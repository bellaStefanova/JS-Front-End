function addItem() {
    let parentEl = document.getElementById('items');
    let childElText =  document.getElementById('newItemText').value;
    let childEl = document.createElement('li');
    childEl.textContent = childElText
    let aEl = document.createElement('a');
    aEl.href = '#';
    aEl.textContent = '[Delete]';
    childEl.appendChild(aEl);
    parentEl.appendChild(childEl);

    let allRows = document.querySelectorAll('li');
    for (let row of allRows) {
    let aChild = row.querySelector('a');
    aChild.addEventListener('click', function() {
        row.remove();
    });
}
};

