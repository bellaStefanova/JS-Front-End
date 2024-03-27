function solve() {
  let text = document.getElementById('input').value;
  let sentenceArr = text.split('.');
  let paragraphArr = [];
  let counter=0;
  let par;

  sentenceArr = sentenceArr.filter(s => s != '');
  let parCount = Math.ceil(sentenceArr.length / 3);

  for (let sentence of sentenceArr) {
    if (counter == 0) {
      par = '<p>';
    };
    
    par += sentence + '.'
    counter += 1;

    if (counter == 3 || parCount == 1) {
      parCount -= 1;
      par += '</p>';
      paragraphArr.push(par)
      counter = 0;
    }
  }

  outputElement = document.getElementById('output');
  outputElement.innerHTML = paragraphArr.join('\n')

}