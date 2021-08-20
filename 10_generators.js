const array = [1,2,3,4,5]
const str = 'hello'

console.log(array[Symbol.iterator])
console.log(str[Symbol.iterator])
console.log(array[Symbol.iterator]())