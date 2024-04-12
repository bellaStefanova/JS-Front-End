// 5 minutes
function decodeCryptocurrency(commands) {
    let message = commands.shift();

    for (let command of commands) {
        let [action, arg1, arg2] = command.split('?');

        if (action === 'TakeEven') {
            message = message.split('').filter((char, index) => index % 2 === 0).join('');
            console.log(message);
        } else if (action === 'ChangeAll') {
            message = message.split(arg1).join(arg2);
            console.log(message);
        } else if (action === 'Reverse') {
            if (message.includes(arg1)) {
                let index = message.indexOf(arg1);
                let substring = message.slice(index, index + arg1.length);
                let reversed = substring.split('').reverse().join('');
                message = message.replace(substring, '');
                message += reversed;
                console.log(message);
            } else {
                console.log("error");
            }
        }
    }

    console.log(`The cryptocurrency is: ${message}`);
}


decodeCryptocurrency(["PZDfA2PkAsakhnefZ7aZ",

"TakeEven",

"TakeEven",

"TakeEven",

"ChangeAll?Z?X",

"ChangeAll?A?R",

"Reverse?PRX",

"Buy"])