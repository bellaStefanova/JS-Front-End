function deleteByEmail() {
    let tableRows = document.querySelectorAll('tbody tr');
    let input = document.querySelector('label input').value;
    let result = document.getElementById('result');
    let isDeleted = false;

    for (let row of tableRows) {
        let child = row.querySelector('td:nth-child(2)');
        if (child.textContent == input) {
            row.remove();
            result.textContent = 'Deleted.';
            isDeleted = true;
        }
    };
    if (!isDeleted) {
        result.textContent = 'Not found.';
    }
}