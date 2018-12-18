
function curryMaker(fn){
    const len = fn.length;
    return function(){
        var args = Array.prototype.slice.call(arguments);
        if(args){
            console.log('hey');
        }
        return args;
    }
}
function printer(a,b,c,d){
    console.log(a,b,c,d);
}