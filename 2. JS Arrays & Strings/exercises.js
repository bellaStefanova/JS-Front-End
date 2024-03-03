// 1. Array Rotation
function arrayRotate(arr, loops) {
    for (let i = 1; i <= loops; i++) {
        firstNum = arr.shift()
        arr.push(firstNum)
    };
    console.log(arr.join(' '));
};

arrayRotate([51, 47, 32, 61, 21], 2);
arrayRotate([32, 21, 61, 1], 4);
arrayRotate([2, 4, 15, 31], 5);

// 2. Print Every N-th Element from an Array
function everyNthElement(arr, N) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % N == 0) {
            newArr.push(arr[i]);
        };
    };
    return newArr;
};

console.log(everyNthElement(['5','20','31','4','20'],2));
console.log(everyNthElement(['dsa', 'asd', 'test', 'tset'], 2));
console.log(everyNthElement(['1', '2', '3', '4', '5'], 6));

// 3. List of Names
function sortNames(namesArr) {
    let lowerCasedNamesDict = {};
    let lowerCasedNamesArr = [];
    for (let name of namesArr) {
        lowerCasedNamesArr.push(name.toLowerCase());
        lowerCasedNamesDict[name.toLowerCase()] = name;
    };
    let lowerCasedNamesArrSorted = lowerCasedNamesArr.sort();

    for (let i = 0; i < lowerCasedNamesArrSorted.length; i++) {
        console.log(`${i + 1}.${lowerCasedNamesDict[lowerCasedNamesArrSorted[i]]}`);
    };
};

sortNames(["John", "Bob", "Christina", "Ema"]);
sortNames(['AB', 'aa']);

// 4. Sorting Numbers
function sortNumbers(numArr) {
    let sortedArr = [];
    let maxNum = 0;
    let minNum = 0;
    while (numArr.length > 0) {
        minNum = numArr.sort(function(a, b) {
                                return b - a
                            }).pop();
        sortedArr.push(minNum);

        maxNum = numArr.sort(function(a, b) {
                                return a - b;
                            }).pop();
        sortedArr.push(maxNum);

    }
    return sortedArr;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

// 5. Reveal Words
function revealWords(codedWords, sentence) {
    let codedWordsArr = codedWords.split(', ');
    for (let word of codedWordsArr) {
        sentence = sentence.replace('*'.repeat(word.length), word);
    };
    console.log(sentence);
};

revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');

// 6. Modern Times of #(HashTag)
function findHashtagWords(sentence) {
    sentenceToArr = sentence.split(' ');
    let newWord = '';
    for (let word of sentenceToArr) {
        if (word[0] == '#' && word.length > 1) {
            newWord = word.substring(1);
            if (!/[^A-Za-z]/g.test(newWord)) {
                console.log(newWord);
            };
        };
    };
};

findHashtagWords('Nowadays everyone uses # to tag a #special word in #socialMedia');
findHashtagWords('The symbol # is known #variously in English-speaking #regions as the #number sign');

// 7. String Substring
function stringSubstring(word, text) {
    let textToArr = text.toLowerCase().split(' ');
    let foundWord = '';
    for (let w of textToArr) {
        if (word.toLowerCase() == w) {
            console.log(word);
            return;
        };
    };
    console.log(`${word} not found!`);
};

stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');

// 8. Pascal-Case Splitter
function pascalCaseSplitter(text) {
    console.log(text.match(/[A-Z][a-z]*/g).join(', '));
};

pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');