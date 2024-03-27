function solve() {
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  };

  const namingConvention = document.getElementById('naming-convention').value;
  const text = document.getElementById('text').value;
  const resultContainer = document.getElementById('result');

  const textArr = text.split(' ');
  for (let i = 0; i < textArr.length; i++) {
    textArr[i] = textArr[i].toLowerCase();
    if (i > 0) {
      textArr[i] = capitalize(textArr[i]);
    } else {
      if (namingConvention === 'Pascal Case') {
        textArr[i] = capitalize(textArr[i]);
      };
    };
  };

  if (namingConvention === 'Camel Case') {
    resultContainer.textContent = textArr.join('');
  } else if (namingConvention === 'Pascal Case') {
    resultContainer.textContent = textArr.join('');
  } else {
    resultContainer.textContent = 'Error!';
  };
};