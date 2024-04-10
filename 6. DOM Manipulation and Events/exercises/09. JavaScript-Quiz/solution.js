function solve() {
    let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let rightAnswers = 0;
    let index = 0;

    Array.from(document.querySelectorAll('.answer-text')).forEach((x) => x.addEventListener('click', function (e) {
        if (correctAnswers.includes(e.target.innerHTML)) {
            rightAnswers++;
        }

        let currentSection = document.querySelectorAll('section')[index];
        currentSection.style.display = 'none';

        if (document.querySelectorAll('section')[index + 1] !== undefined) {
            let nextSection = document.querySelectorAll('section')[index + 1];
            nextSection.style.display = 'block';
            index++;
        } else {
            document.getElementById('results').style.display = 'block';
            document.querySelector('#results h1').textContent = rightAnswers === 3 ? 'You are recognized as top JavaScript fan!' : `You have ${rightAnswers} right answers`;
        }
    }));
}
