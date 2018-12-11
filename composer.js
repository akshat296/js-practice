function compose(){
    var args = Array.prototype.slice.call(arguments).reverse();
    function child(){
       return args.reduce((acc,func,index)=>{
            return func(acc);
        },5);
    }
    return child();
}

function square(a){
    return a*a;
}
function double(a){
    return 2*a;
}
function triple(a){
    return 3*a;
}
console.log(compose(triple,double,square));