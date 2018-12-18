function abc () {
  setTimeout(() => {
    console.log('hey')
  }, 2000)
}

function promisify (fn) {
  return function () {
    var args = [].slice.apply(arguments)
    return new Promise((res, rej) => {
      fn.apply(
        null,
        args.concat([
          function () {
            var results = [].slice.apply(arguments);
            console.log(result[0])
            results[0] 
              ? reject(results[0]) 
              : resolve(results.slice(1, results.length)) 
          }
        ])
      )
    })
  }
}
console.log('something gotta give')
var test = promisify(abc('hello'))
test().then(re => re());
