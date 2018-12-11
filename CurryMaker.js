function add(a,b,c,d){
    return a+b+c+d;
}

function current(fn,i,args){
    return function () {
        args.push(arguments[0]);
        if(i === fn.length){
            return fn(...args);
        }
        else{
            return current(fn,i+1,args);
        }
    }            
}
    
function curryMaker(fn){
    var totalArgs = fn.length;
    var args =[];
    return current(fn, 1, args)
}
var value = curryMaker(add);


console.log("add",add(3,5,6,7));
console.log("curryMaker Add",value(3)(5)(6)(7));