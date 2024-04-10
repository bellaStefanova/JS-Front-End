function solve() {
    let buttons = document.getElementsByTagName('button');
    let checkButton = buttons[0];
    let clearButton = buttons[1];

    let cells = document.getElementsByTagName('input');
    let table = document.getElementsByTagName('table')[0];

    checkButton.addEventListener('click', function () {
        let matrix = [];
        let isSolved = true;
        for (let i = 0; i < 3; i++) {
            matrix.push([]);
            for (let j = 0; j < 3; j++) {
                matrix[i].push(Number(cells[i * 3 + j].value));
            }
        }

        for (let i = 0; i < 3; i++) {
            let row = matrix[i];
            let col = matrix.map(x => x[i]);
            if (row.some(x => row.indexOf(x) !== row.lastIndexOf(x)) || col.some(x => col.indexOf(x) !== col.lastIndexOf(x))) {
                isSolved = false;
                break;
            }
        }

        if (isSolved) {
            table.style.border = '2px solid green';
            document.querySelector('#check p').textContent = 'You solve it! Congratulations!';
            document.querySelector('#check p').style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            document.querySelector('#check p').textContent = 'NOP! You are not done yet...';
            document.querySelector('#check p').style.color = 'red';
        }
    });

    clearButton.addEventListener('click', function () {
        table.style.border = 'none';
        document.querySelector('#check p').textContent = '';
        document.querySelector('#check p').style.color = '';
        for (let cell of cells) {
            cell.value = '';
        }
    });
}