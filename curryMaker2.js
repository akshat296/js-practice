function add(a,b,c,d){
    return a+b+c+d;
}

function current(fn,i,args){
    return function () {
        for(let j=0;j<arguments.length;j++){
            args.push(arguments[j]);
        }
        if(i === fn.length){
            return fn.apply(fn,args);
        }
        else{
            if((i+arguments.length)>fn.length){
               
                return fn.apply(fn,args);
            }
            return current(fn,i+arguments.length,args);
        }
    }
}

Function.prototype.curry = function (){
    var totalArgs = this.length;
    var args =[];
    return current(this, 1, args)
}

var value = add.curry();

Object.defineProperty(o, 'b', {
  get() { return bValue; },
  set(newValue) { bValue = newValue; },
  enumerable: true,
  configurable: true
});
console.log("add",add(3,5,6,7));
console.log("curryMaker Add",value(3,5,6)(7)(8));
console.log("curryMaker Add",value(3)(5)(6)(7));
console.log("curryMaker Add",value(3,5)(6,7));
console.log("curryMaker Add",value(3)(5,6,7));