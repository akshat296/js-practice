function* abc(){
    yield 1;
    yield 2;
    yield 3;
}
let a= abc();
console.log(a.next().value)
console.log(a.next().value)
console.log(a.next().value)
console.log(a.next().value)
console.log(a instanceof abc === 'function')
console.log(abc.call(this).toString())