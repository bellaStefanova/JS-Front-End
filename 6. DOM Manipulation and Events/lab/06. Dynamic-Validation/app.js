function validate() {
    let emailElement = document.getElementById('email');
    emailElement.addEventListener('change', () => {
        let email = emailElement.value;
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (!pattern.test(email)) {
            emailElement.classList.add('error');
        } else {
            emailElement.classList.remove('error');
        }
    });
}