class Person {

    type = "human"

    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(this.name + ' says Hello!')
    }
}

const max = new Person('Max')
console.log(max)
max.greet()
console.log(max.type)
