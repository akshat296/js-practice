clear();
function sum(a, b) {
    console.log(a + b);
}

sum(2, 3);

function add(a) {
    return function(b) {
        console.log(a + b);
    }
}
add(3)(4);

function totalArgs(args) {
    return Array.prototype.slice.call(args);
}

function adder(args) {
    if(!Array.isArray(args)){
    var args = totalArgs(arguments);
    }
    if (args.length === 3) {
        console.log(args[0] + args[1] + args[2]);
    } else {
        return function() {
            currentArgs = totalArgs(arguments);
            args = args.concat(currentArgs);
            if (args.length === 3) {
                console.log(args[0] + args[1] + args[2]);
            } else {
                return adder(args);
            }
        }
    }
}
adder(2,3)(9);



function test(a,b,c,d){
    return a+b+c+d;
}
test(1)(2)(3)(4);

function test2(){
    var args = total(arguments);
    
    return function (){
        if(args.length === arguments.length){
            return test(args);
        }
        else{

        }
    }
   
}
function total(arg){
  return Array.prototype.slice.call(arg);
}
function curry2(){

    var args = total(arguments);
    
    if(args.length===arguments.length)//some
    {
            return args.reduce((acc,item)=>acc+ item);
    }
    else{
         return function (){
            var myargs = total(arguments);
            var totalArgs = myargs.concat(args);
            if(totalArgs ===  ){
                return curry2();
            }

    }
    }
   

   

}


var returnCurryfucntion = test2(1,2,3,5,6,7,1);
returnCurryfucntion(1)(3)(5)(2);


function curry(a){
    return function (b){
        return a+b;
    }

}
var b = curry(5);
console.log(b(6));
console.log(b(3));



function divide(a,b){
    return a/b;
}

function flip() {
    return function test()
}



