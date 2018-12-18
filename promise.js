
var promisify = function (fn){
    return function(){
        return new Promise((resolve,reject)=>{
            resolve(fn)
        });
    };
    new Promise((resolve,reject)=>{
            resolve('abc')


    });


}