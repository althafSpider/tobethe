function getCount(str) {
const splittedStr =  str.split("")
    const uniqueArray = [...new Set(splittedStr)];
    return uniqueArray.length
}

console.log(getCount("abracadabra"))