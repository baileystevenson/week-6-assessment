const {shuffleArray} = require('./utils')
let array = [2,5,7,8,]



describe('shuffleArray should', () => {
    test("return an array", () => {
        expect(typeof shuffleArray(array)).toBe('object')
    })
})

describe('shuffleArry is a number', () => {
    test("return an array", () =>  {
        expect(typeof shuffleArray(array)).toBe('integer')
    })
})

