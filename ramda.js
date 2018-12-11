var R= {
    args: function (args){
        return Array.prototype.slice.call(args)
    },
    add: function(){

        let totalArgs = this.args(arguments);
        return function(){
            totalArgs= totalArgs.concat(...this.args(arguments));
            
        }
    },
}   
console.log(R.add(2))