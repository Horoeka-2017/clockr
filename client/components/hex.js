
const binaryNumbers = [0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const hexNumbers = [0, 1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let numbersToLetter = (array) => array.map(x => binaryNumbers.map((elem, idx) => x == elem ? hexNumbers[idx] : undefined)).reduce((a, b) => a.concat(b), [0]).filter(x => x !== undefined)

let example = 12312
export default function hex (x) {
    return numbersToLetter(decimalToHex(Number(x))).join('')
}



function decimalToHex (number) {
    const hexNumber = []
    let x = number
    while (x > 0) {
        let remainder = x % 16
        x = Math.floor(x / 16)
        hexNumber.push(remainder)

    }
    return hexNumber
}
