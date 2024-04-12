let mainUrl = 'http://localhost:3030/jsonstore/tasks'
let loadMealsButton = document.getElementById('load-meals');
let addMealButton = document.getElementById('add-meal');
let editMealBtn = document.getElementById('edit-meal');
let meals = document.getElementById('list');

// this functions will load all meals in allMeals container when called
const loadMeals = async () => {
    const response = await fetch(mainUrl)
    const data = await response.json();

    meals.innerHTML = '';
    
    Object.values(data).forEach(meal => {
        let mealObj = document.createElement('div');
        mealObj.classList.add('meal');
        let h2 = document.createElement('h2');
        h2.textContent = meal.food;
        let h3Time = document.createElement('h3');
        h3Time.textContent = meal.time;
        let h3Calories = document.createElement('h3');
        h3Calories.textContent = meal.calories;
        let mealButtons = document.createElement('div');
        mealButtons.id = 'meal-buttons';
        let changeMealBtn = document.createElement('button');
        changeMealBtn.classList.add('change-meal');
        changeMealBtn.textContent = 'Change';
        let deleteMealBtn = document.createElement('button');
        deleteMealBtn.classList.add('delete-meal');
        deleteMealBtn.textContent = 'Delete';
        mealButtons.appendChild(changeMealBtn);
        mealButtons.appendChild(deleteMealBtn);
        mealObj.appendChild(h2);
        mealObj.appendChild(h3Time);
        mealObj.appendChild(h3Calories);
        mealObj.appendChild(mealButtons);
        meals.appendChild(mealObj);

        deleteMealBtn.addEventListener('click', async () => {
            const response = await fetch(mainUrl + '/' + meal._id, {
                method: 'DELETE'
            });
            mealObj.remove();
        });
        changeMealBtn.addEventListener('click', () => {
            document.getElementById('food').value = meal.food;
            document.getElementById('time').value = meal.time;
            document.getElementById('calories').value = meal.calories;
            addMealButton.disabled = true;
            editMealBtn.disabled = false;
            document.querySelector('form').setAttribute('data-id', meal._id);
            mealObj.remove();
        });
    });

}

// this function will add a meal to the database when called
async function addMeal () {
    let food = document.getElementById('food').value;
    let time = document.getElementById('time').value;
    let calories = document.getElementById('calories').value;

    const response = await fetch(mainUrl, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            food: food,
            calories: calories,
            time: time,
        })
    })

    if (!response.ok) {
        return;
    }
     
    document.getElementById('food').value = '';
    document.getElementById('time').value = '';
    document.getElementById('calories').value = '';
    await loadMeals();
}

// this function will edit a meal in the database, taking the values from the form when called
async function editMeal() {
    let food = document.getElementById('food').value;
    let time = document.getElementById('time').value;
    let calories = document.getElementById('calories').value;
    let mealId = document.querySelector('form').getAttribute('data-id');

    const response = await fetch(mainUrl + '/' + mealId, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            food: food,
            calories: calories,
            time: time,
            _id: mealId
        })
    })

    if (!response.ok) {
        return;
    }

    loadMeals();

    document.getElementById('food').value = '';
    document.getElementById('time').value = '';
    document.getElementById('calories').value = '';
    editMealBtn.disabled = true;
    addMealButton.disabled = false;
}

// Adding event listener on Load Meals button
loadMealsButton.addEventListener('click', loadMeals);

// Adding event listener on Add Meal button
addMealButton.addEventListener('click', addMeal)

// Adding event listener on Edit Meal button
editMealBtn.addEventListener('click', editMeal);
