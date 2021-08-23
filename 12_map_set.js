const map = new Map(
    [ ['a', 1] ]
)

/*
console.log(map)
console.log(map.get('a'))
console.log(map.get(NaN))
//map.clear()
console.log(map.has(42))
/!*map.delete('b')*!/
console.log(map.size)*/

/*
map.set('b',2).set(NaN, 'Number').set(42, 'demo')

console.log(map.keys())
console.log(map.entries())
console.log(map.values())*/

// SET
const set = new Set([1,1,2,3,5,8,13,13,13,13,5,8])
console.log(set)
console.log(set.size)
console.log(set.add(21))
//set.clear()
set.delete(1)
console.log(set)

console.log(set.keys())
console.log(set.keys())
console.log(set.keys())