// 1. Person Info
function personInfo(firstName, lastName, age) {
    return { firstName, lastName, age }
};

// 2. City
function city(cityObj) {
    for (let arg of Object.entries(cityObj)) {
        console.log(`${arg[0]} -> ${arg[1]}`);
    };
}

// 3. Convert to Object
function convertToObject(text) {
    const convertedObj = JSON.parse(text);
    for (let arg of Object.entries(convertedObj)) {
        console.log(`${arg[0]}: ${arg[1]}`);
    };
}

// 4. Convert to JSON
function convertToJson(name, lastName, hairColor) {
    const convertedObj = JSON.stringify({ name, lastName, hairColor });;
    console.log(convertedObj);
}

// 5. Phone Book
function phoneBook(arr) {
    let phoneBookObj = {};
    for (let item of arr) {
        let [name, number] = item.split(' ');
        phoneBookObj[name] = number;
    };
    for (let [name, number] of Object.entries(phoneBookObj)) {
        console.log(`${name} -> ${number}`);
    };
};

// phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);

// 6. Meetings
function meetings(arr) {
    let calendar = {};
    for (let task of arr) {
        let [day, name] = task.split(' ');
        if (calendar[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            calendar[day] = name;
            console.log(`Scheduled for ${day}`);
        };
    };
    for (let [day, name] of Object.entries(calendar)) {
        console.log(`${day} -> ${name}`);
    };
};

// meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
// meetings(['Friday Bob', 'Saturday Ted', 'Monday Bill', 'Monday John', 'Wednesday George'])

// 7. Address Book
function addressBook(arr) {
    let addressBookObj = {};
    for (let data of arr) {
        let [name, address] = data.split(':');
        addressBookObj[name] = address;
    };
    let addressBookObjSortedKeys = Object.keys(addressBookObj).sort((a, b) => a.localeCompare(b, undefined));

    for (let name of addressBookObjSortedKeys) {
        console.log(`${name} -> ${addressBookObj[name]}`);
    };
};

// addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd'])
// addressBook(['Bob:Huxley Rd', 'John:Milwaukee Crossing', 'Peter:Fordem Ave', 'Bob:Redwing Ave', 'George:Mesta Crossing',
// 'Ted:Gateway Way', 'Bill:Gateway Way', 'John:Grover Rd', 'Peter:Huxley Rd', 'Jeff:Gateway Way', 'Jeff:Huxley Rd']);

// 8. Cats
function cats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        };
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    };

    for (let catInfo of arr) {
        
        let cat = new Cat(...catInfo.split(' '));
        cat.meow();
    }
};

// cats(['Mellow 2', 'Tom 5']);
// cats(['Candy 1', 'Poppy 3', 'Nyx 2'])

// 9. Songs
function songs(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        };
    };
    let numberOfSongs = arr.shift();
    let typeOfList = arr.pop();
    for (let song of arr) {
        let songObj = new Song(...song.split('_'));
        if (songObj.typeList === typeOfList || typeOfList === 'all') {
            console.log(songObj.name);
        };
    };
};

// songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
// songs([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58',
// 'favourite_Live It Up_3:48', 'listenLater']);
// songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);