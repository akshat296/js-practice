var R = {
    getArgs: args => Array.prototype.slice.call(args),  
    add: function() {
       var args = this.getArgs(arguments);
       var sum = () => args.length >= 2 ? args.splice(0,2).reduce((acc, data) => acc += data) : undefined;
       var total = sum();
       if(total) return total;
       return function(){
           args = args.concat(R.getArgs(arguments).splice(0,1));
           return sum();
       }
    },
    addIndex: function(fns){
        return function(fn, arr){
            return fns(fn,arr);
        }
    },
    map: (fn, arr) => Object.values(arr).map(fn),
    adjust: (num, fn, arr)=> {
        if(num<0) arr[(arr.length+num)] = fn(arr[(arr.length+num)]);
        else arr[num] = fn(arr[num]);
        return arr;
    },
    toUpper: (str) =>  str.toUpperCase(),
    propEq: (str1, str2) => {
        return function(data,index){
            return data[str1] === str2;
        }
    },
    filter: (instance, arr) => {
        return arr.filter(instance)
    },
    equals:function(a){
        return  a;
    },
    all: function(arg1){
      return function(arg2){
          let count = 0;
          return arg2.reduce((acc,data)=>{
              if(data === arg1){
                  count++;
              }
              if(count === arg2.length){
                  return true;
              }else{
                 return false;
              }
          },false);
      }
    },
};
function curryMaker(fn){
    
}
function test(a,b,c,d){
    console.log(a,b,c,d,"test");
}
console.log(test(3,4,52,3))

console.log(R.add(2,3,35,3));
console.log(R.add(2)(3,3));
console.log(R.addIndex(R.map)((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']));
const double = x => x * 2;
console.log(R.map(double, [1, 2, 3]));
console.log(R.adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']));

const abby = {name: 'Abby', age: 7, hair: 'blond'};
const fred = {name: 'Fred', age: 12, hair: 'brown'};
const rusty = {name: 'Rusty', age: 10, hair: 'brown'};
const alois = {name: 'Alois', age: 15, disposition: 'surly'};
const kids = [abby, fred, rusty, alois];
const hasBrownHair = R.propEq('hair', 'brown');
console.log(R.filter(hasBrownHair, kids)); //=> [fred, rusty];
const equals3 = R.equals(3);
console.log(R.all(equals3)([3, 3, 3, 3])); //=> true
console.log(R.all(equals3)([3, 3, 1, 3])); //=> false
