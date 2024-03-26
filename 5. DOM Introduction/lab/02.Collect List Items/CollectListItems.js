function extractText() {
    let list = document.getElementById('items');
    list = Array.from(list.children)
    const textArea = document.getElementById('result');
    list.forEach(item =>  {
        textArea.textContent += item.textContent + '\n';
    });
};