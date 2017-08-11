import React from 'react'

export default function decimalToBinary (number) {
    const binaryNumber = []
    let x = number
    while (x > 0) {
        let remainder = x % 2
        x = Math.floor(x / 2)
        binaryNumber.push(remainder)
    }
    return binaryNumber.join('')
}
