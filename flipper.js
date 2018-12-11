function sequence (a, b, c, d) {
  console.log(a, b, c, d)
}

function totalArgs (args) {
  return Array.prototype.slice.call(args)
}
function pusher (currentArgs, args) {
  currentArgs= currentArgs.reverse();
  for(let i = (currentArgs.length-1);i>=0;i--){
      args.unshift(currentArgs[i]);
  }
  //args = [...currentArgs, ...args];


  return args
}
function nested (fn, args) {
  return function () {
    if (fn.length <= args.length) {
     
      return fn.apply(fn, args)
    } else {
      let currentArgs = totalArgs(arguments)
      args = pusher(currentArgs, args)

      if (fn.length <= args.length) {
        return fn.apply(fn, args)
      } else {
        return nested(fn, args)
      }
    }
  }
}

function flipper (fn) {
  var args = []
  return nested(fn, args)
}
var newSequence = flipper(sequence)
//newSequence(1,2)(3,4);
// newSequence(1)(2)(3,4);
 newSequence(1,2,3,4);
//newSequence(1)(2)(3)(4)
