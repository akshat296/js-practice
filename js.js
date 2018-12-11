function once(fn) {
var done = false;
var res;
 return function () {
   if (!done) {
     done = true;
     res = fn.apply(this, arguments);
     return res;
   } else if (done) {
     return res;
   }
 };

}

function add(x, y) {
  return x + y;
}

var addOnce = once(add);
var result = addOnce(2, 3);
result = addOnce(4, 4);
console.log(result)