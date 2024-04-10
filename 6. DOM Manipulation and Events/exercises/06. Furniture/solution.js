function solve() {
    let textArea = document.getElementsByTagName('textarea')[0];
    let generateButton = document.getElementsByTagName('button')[0];
    let buyButton = document.getElementsByTagName('button')[1];
    let tbody = document.getElementsByTagName('tbody')[0];
    let textAreaToFill = document.getElementsByTagName('textarea')[1];

    generateButton.addEventListener('click', generate);
    buyButton.addEventListener('click', buy);

    function generate() {
        let furniture = JSON.parse(textArea.value);
        for (let item of furniture) {
            let tr = document.createElement('tr');
            let tdImage = document.createElement('td');
            let img = document.createElement('img');
            img.src = item.img;
            tdImage.appendChild(img);
            tr.appendChild(tdImage);

            let tdName = document.createElement('td');
            let pName = document.createElement('p');
            pName.textContent = item.name;
            tdName.appendChild(pName);
            tr.appendChild(tdName);

            let tdPrice = document.createElement('td');
            let pPrice = document.createElement('p');
            pPrice.textContent = item.price;
            tdPrice.appendChild(pPrice);
            tr.appendChild(tdPrice);

            let tdDecFactor = document.createElement('td');
            let pDecFactor = document.createElement('p');
            pDecFactor.textContent = item.decFactor;
            tdDecFactor.appendChild(pDecFactor);
            tr.appendChild(tdDecFactor);

            let tdCheckBox = document.createElement('td');
            let input = document.createElement('input');
            input.type = 'checkbox';
            tdCheckBox.appendChild(input);
            tr.appendChild(tdCheckBox);

            tbody.appendChild(tr);
        }
    }

    function buy() {
        let furniture = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(b => b.parentElement.parentElement)
            .map(r => ({
                name: r.children[1].textContent,
                price: Number(r.children[2].textContent),
                decFactor: Number(r.children[3].textContent)
            }));

        let result = {
            bought: [],
            totalPrice: 0,
            decFactorSum: 0
        };

        for (let item of furniture) {
            result.bought.push(item.name);
            result.totalPrice += item.price;
            result.decFactorSum += item.decFactor;
        }

        textAreaToFill.textContent = `Bought furniture: ${result.bought.join(', ')}\n`;
        textAreaToFill.textContent += `Total price: ${result.totalPrice.toFixed(2)}\n`;
        textAreaToFill.textContent += `Average decoration factor: ${result.decFactorSum / result.bought.length}`;

      }
}