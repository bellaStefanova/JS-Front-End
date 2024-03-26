function sumTable() {
    const rows = document.getElementsByTagName('tr');
    let sum = 0;
    for (let row of rows) {
        if (row.children[1].tagName === 'TD' && row.children[1].id !== 'sum') {
            sum += Number(row.children[1].textContent);
        };
    };
    document.getElementById('sum').textContent = sum;
};