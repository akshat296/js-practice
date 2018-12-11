function abc(){
    setTimeout(() => {
        console.log('hey');
      
    }, 2000);
}

function promisify(fn){
    return function(){
        return new Promise((res,rej)=>{
            try{
                 res(fn)
                
                }
                catch(er){
                    rej(er);
                }

        })
    }
}
var test = promisify(abc);
test().then((re)=>re())