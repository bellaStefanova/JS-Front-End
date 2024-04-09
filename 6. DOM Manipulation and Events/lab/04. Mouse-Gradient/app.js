function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result');

    gradient.addEventListener('mousemove', (e) => {
        let power = e.offsetX / (e.target.clientWidth - 1);
        power = Math.floor(power * 100);
        result.textContent = `${power}%`;
    });

    gradient.addEventListener('mouseout', () => {
        result.textContent = '';
    });
}