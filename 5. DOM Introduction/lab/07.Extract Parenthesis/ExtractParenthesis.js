function extract(content) {
    searchedElement = document.getElementById(content);
    regex = /\((.*?)\)/g;
    const foundStringsInGroups = [...searchedElement.textContent.matchAll(regex)];
    let foundStrings = [];
    for (let item of foundStringsInGroups) {
        foundStrings.push(item[1]);
    };
    return foundStrings.join('; ');
};