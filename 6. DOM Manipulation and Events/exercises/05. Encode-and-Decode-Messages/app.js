function encodeAndDecodeMessages() {
    const buttons = document.querySelectorAll('button');
    const textAreas = document.querySelectorAll('textarea');

    const map = {
        encode: {
            textArea: textAreas[0],
            btn: buttons[0],
            func: (char) => String.fromCharCode(char.charCodeAt(0) + 1)
        },
        decode: {
            textArea: textAreas[1],
            btn: buttons[1],
            func: (char) => String.fromCharCode(char.charCodeAt(0) - 1)
        }
    }

    document.getElementById('main').addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            const type = e.target.textContent.toLowerCase().trim().includes('encode') ? 'encode' : 'decode';
            const message = map[type].textArea.value.split('').map(map[type].func).join('');
            map.encode.textArea.value = '';
            map.decode.textArea.value = message;
        }
    });
}