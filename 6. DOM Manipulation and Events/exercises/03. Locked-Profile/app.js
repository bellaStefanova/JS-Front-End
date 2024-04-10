function lockedProfile() {
    let users = document.querySelectorAll('.profile');
    for (let user of users) {
        let button = user.querySelector('button');
        let lockedEl = user.querySelector('input[value="lock"]');
        let unlockedEl = user.querySelector('input[value="unlock"]');
        let hiddenFields;
        for (let child of Array.from(user.children)) {
            if (child.tagName === 'DIV' && child.id.includes('HiddenFields')) {
                hiddenFields = child;
            }
        }
        lockedEl.addEventListener('change', () => {
            hiddenFields.style.display = 'none';
            button.textContent = 'Show more';
        });
        let hiddenFiels = user.qu
        button.addEventListener('click', () => {
            if (unlockedEl.checked) {
                if (button.textContent === 'Show more') {
                    hiddenFields.style.display = 'block';
                    button.textContent = 'Hide it';
                } else {
                    hiddenFields.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        });
    }
}

