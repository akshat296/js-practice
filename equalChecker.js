function compareObjects(o1, o2){
    if(Object.keys(o1).length === Object.keys(o2).length){
    for(var key in o1){
        if(o1.hasOwnProperty(key)){
            if(o1[key] !== o2[key]){
                return false;
            }
        }
    }
    for(var key in o2){
        if(o2.hasOwnProperty(key)){
            if(o1[key] !== o2[key]){
                return false;
            }
        }
    }
    return true;
    }
    else
    {
        return false;
    }
};
console.log(compareObjects({a:4}, {a:4}))