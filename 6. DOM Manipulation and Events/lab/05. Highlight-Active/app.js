function focused() {
    let allElements = document.querySelectorAll('input');
    for (let el of allElements) {
        el.addEventListener('focus', function () {
            el.parentElement.classList.add('focused');
        });
        el.addEventListener('blur', function () {
            el.parentElement.classList.remove('focused');
        });

    }
}