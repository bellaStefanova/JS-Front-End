function toggle() {
    button = document.querySelector('.button');
    extraText = document.getElementById('extra');
    if (button.textContent === 'More') {
        button.textContent = 'Less';
        extraText.style.display = 'block';
    } else {
        button.textContent = "More";
        extraText.style.display = 'none';
    };
};