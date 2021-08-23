class Person {

    type = "human"

    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(this.name + ' says Hello!')
    }
}
class Programmer extends Person {
    constructor(name, job) {
        super(name);
        this._job = job
    }

    get job() {
        return this._job.toUpperCase()
    }

    set job(job) {
        if( job.length < 2 ) {
            throw new Error('validation failed!')
        }
        this._job = job
    }

    greet() {
        super.greet()
        console.log('rewritten')
    }
}

const frontend = new Programmer('Max', 'Frontend')
/*
console.log(frontend.job)
//frontend.job = 'backend'
frontend.job = 'b'
console.log(frontend.job)*/

class Util {
    static average(...args) {
        return args.reduce((acc, i) => acc += i, 0) / args.length
    }
}

console.log(Util.average(1,1,2,3,5,8,13))