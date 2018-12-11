function divide(a,b,c,d){
    console.log(a,b,c,d);
}

function nester(fn, args , i){
    return function(){
         for(let j=0;j<arguments.length;j++){
            args.unshift(arguments[j]);
        }
        if(fn.length === args.length){
            return  fn.apply(fn,args);
        }
        else{
          
            return nester(fn, args, i+arguments.length);
        }
    }
}

function flip(fn){
    var args = [];
   return nester(fn, args, 1);
}

var newDivide = flip(divide);
//console.log(divide(1,2,3,4))

newDivide(3,5,6)(7)
newDivide(3)(5)(6)(7)
newDivide(3,5)(6,7)
newDivide(3)(5,6,7)

[2,3,4].mymap((num,i)=>{
    num =num+3;
    return num;
});

function abc(){
    var test = ''
}