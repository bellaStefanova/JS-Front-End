function solve() {
    const selectMenuTo = document.getElementById('selectMenuTo');
    selectMenuTo.innerHTML += '<option value="binary">Binary</option>\n<option value="hexadecimal">Hexadecimal</option>';
    const resultElement = document.getElementById('result');

    document.querySelector('button').addEventListener ('click', function () {

        const decimalNumber = document.getElementById('input').value;

        if (selectMenuTo.value == 'binary') {
            resultElement.value = (Number(decimalNumber) >>> 0).toString(2);
        } else if (selectMenuTo.value == 'hexadecimal') {
            resultElement.value = (Number(decimalNumber) >>> 0).toString(16).toUpperCase();
        };
    });
};