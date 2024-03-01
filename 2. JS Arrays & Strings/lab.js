// 1. Sum First and Last Array Elements
function sumFirstLast(arr) {
    firstNum = arr[0]
    lastNum = arr[arr.length - 1]
    console.log(firstNum + lastNum)
};

sumFirstLast([20, 30, 40]);
sumFirstLast([10, 17, 22, 33]);
sumFirstLast([11, 58, 69]);

// 2. Reverse an Array of Numbers
function reverseArray(num, arr) {
    partialArr = arr.slice(0, num)
    reversedPartialArr = partialArr.reverse()
    console.log(reversedPartialArr.join(' '))
};

reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);

// 3. Even and Odd Subtraction
function EvenOddSubtract(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (let el of arr) {
        if (el % 2 == 0) {
            evenSum += el
        } else {
            oddSum += el
        }
    }
    console.log(evenSum - oddSum)
};

EvenOddSubtract([1,2,3,4,5,6]);
EvenOddSubtract([3,5,7,9]);
EvenOddSubtract([2,4,6,8,10]);

// 4. Substring
function textSubstr(text, startInd, countEl) {
    console.log(text.substring(startInd, startInd + countEl))
};

textSubstr('ASentence', 1, 8);
textSubstr('SkipWord', 4, 7);
textSubstr('1234567890', 1, 3)

// 5. Censored Words
function censoredWords(text, word) {
    // console.log(text.replaceAll(word, '*'.repeat(word.length)))
    textToArr = text.split(word)
    censoredText = textToArr.join('*'.repeat(word.length))
    console.log(censoredText)

};

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');

// 6. Count String Occurrences
function numOfStringOccurrences(text, word) {
    textToArr = text.split(' ')
    let count = 0;
    for (let el of textToArr) {
        if (el === word) {
            count += 1
        }
    };
    console.log(count)
};

numOfStringOccurrences('This is a word and it also is a sentence', 'is');
numOfStringOccurrences('softuni is great place for learning new programming languages', 'softuni');