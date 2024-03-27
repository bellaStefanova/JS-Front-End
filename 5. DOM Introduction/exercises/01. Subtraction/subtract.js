function subtract() {
    const firstNumber = Number(document.getElementById('firstNumber').value);
    const secondNumber = Number(document.getElementById('secondNumber').value);

    let sum = firstNumber - secondNumber;

    document.getElementById('result').textContent = sum;
}