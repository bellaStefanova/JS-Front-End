function generateReport() {
    const tableHeadersChecked = document.querySelectorAll('thead tr th input');
    const tableRows = document.querySelectorAll('tbody tr');
    let reportArr = [];

    for (let row of tableRows) {
        let cells = row.querySelectorAll('td');
        let rowObj = new Object;
        for (i = 0; i < cells.length; i++) {

            if (tableHeadersChecked[i].checked) {
                rowObj[tableHeadersChecked[i].name] = cells[i].textContent;
            };
        };
        reportArr.push(rowObj)
    };

    const textAreaElement = document.getElementById('output');
    textAreaElement.textContent = JSON.stringify(reportArr, null, 2);

}


