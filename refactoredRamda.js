var R = {
  add: (x, y) => {
    if (y === undefined) {
      return y => x + y
    }
    return x + y;
  },
  addIndex: (fn) => (cb, arr) => fn(cb)(arr),
  map: function (fn, obj) {
     let mapper = (obj) => {
      for (let i = 0; i < Object.values(obj).length; i++) {
        obj[Object.keys(obj)[i]] = fn(obj[Object.keys(obj)[i]],i,obj);
      }
    }
    if (obj === undefined) {
      return obj => {
        mapper(obj)
        return obj
      }
    } else {
      mapper(obj)
      return obj
    }
   
  },
  adjust: function(num,fn,arr){
      if(num < 0){
          arr[arr.length+num] = fn(arr[arr.length+num]);
      }else{
      arr[num] = fn(arr[num]);
      }
      return arr;
  },
  toUpperC: function(){

  },
  toUpper: str => str.toUpperCase(),
  equals: (a,b) => {
      if(typeof a === 'object'){
          for(let i= 0;i<Object.keys(a).length;i++){
              for(let j=0;j<Object.keys(b).length;j++){
                if(typeof b[Object.key(b)[i]] === 'object'){
                    a[Object.keys(a)[i]] = equals(b[Object.keys(b)[i]]);
                }
              }
          }
      }
  },

      
  
}

console.log(R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']));      //=> ['a', 'B', 'c', 'd']
console.log(R.adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']));     //=> ['a', 'b', 'c', 'D']
module.exports = R
