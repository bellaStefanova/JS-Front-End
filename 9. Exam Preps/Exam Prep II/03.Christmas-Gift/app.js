let mainUrl = 'http://localhost:3030/jsonstore/gifts'
let loadButton = document.getElementById('load-presents');
let addButton = document.getElementById('add-present');
let editBtn = document.getElementById('edit-present');
let presents = document.getElementById('gift-list');

// this functions will load all presents in allPresents container when called
const loadPresents = async () => {
    const response = await fetch(mainUrl)
    const data = await response.json();

    presents.innerHTML = '';
    
    Object.values(data).forEach(present => {
        let presentObj = document.createElement('div');
        presentObj.classList.add('gift-sock');
        let divContent = document.createElement('div');
        divContent.classList.add('content');
        let pPresent = document.createElement('p');
        pPresent.textContent = `${present.gift}`;
        let pFor = document.createElement('p');
        pFor.textContent = `${present.for}`;
        let pPrice = document.createElement('p');
        pPrice.textContent = `${present.price}`;
        divContent.appendChild(pPresent);
        divContent.appendChild(pFor);
        divContent.appendChild(pPrice);
        presentObj.appendChild(divContent);
        let presentButtons = document.createElement('div');
        presentButtons.classList.add('buttons-container');
        let changePresentBtn = document.createElement('button');
        changePresentBtn.classList.add('change-btn');
        changePresentBtn.textContent = 'Change';
        let deletePresentBtn = document.createElement('button');
        deletePresentBtn.classList.add('delete-btn');
        deletePresentBtn.textContent = 'Delete';
        presentButtons.appendChild(changePresentBtn);
        presentButtons.appendChild(deletePresentBtn);
        presentObj.appendChild(presentButtons);
        presents.appendChild(presentObj);

        deletePresentBtn.addEventListener('click', async () => {
            const response = await fetch(mainUrl + '/' + present._id, {
                method: 'DELETE'
            });
            presentObj.remove();
        });
        changePresentBtn.addEventListener('click', () => {
            document.getElementById('gift').value = present.gift;
            document.getElementById('for').value = present.for;
            document.getElementById('price').value = present.price;
            addButton.disabled = true;
            editBtn.disabled = false;
            document.querySelector('form').setAttribute('data-id', present._id);
            presentObj.remove();
        });
    });

}

// this function will add a present to the database when called
async function addPresent () {
    let gift = document.getElementById('gift').value;
    let for_ = document.getElementById('for').value;
    let price = document.getElementById('price').value;

    const response = await fetch(mainUrl, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            gift: gift,
            for: for_,
            price: price,
        })
    })

    if (!response.ok) {
        return;
    }
     
    document.getElementById('gift').value = '';
    document.getElementById('for').value = '';
    document.getElementById('price').value = '';
    await loadPresents();
}

// this function will edit a meal in the database, taking the values from the form when called
async function editPresent() {
    let gift = document.getElementById('gift').value;
    let for_ = document.getElementById('for').value;
    let price = document.getElementById('price').value;
    let presentId = document.querySelector('form').getAttribute('data-id');

    const response = await fetch(mainUrl + '/' + presentId, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            gift: gift,
            for: for_,
            price: price,
            _id: presentId
        })
    })

    if (!response.ok) {
        return;
    }

    loadPresents();

    document.getElementById('gift').value = '';
    document.getElementById('for').value = '';
    document.getElementById('price').value = '';
    editBtn.disabled = true;
    addButton.disabled = false;
}

// Adding event listener on Load Presents button
loadButton.addEventListener('click', loadPresents);

// Adding event listener on Add Present button
addButton.addEventListener('click', addPresent)

// Adding event listener on Edit Present button
editBtn.addEventListener('click', editPresent);
