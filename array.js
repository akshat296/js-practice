var arr = new Array();
arr.length=100
arr.fill(0,0,100);

var doubleD = [[0,2,5],[2,3,2]];

doubleD.reduce((acc, singleArr) => {
    for(let i = acc[singleArr[0]]; i <= acc[singleArr[1]];i++){
        acc[i] = acc[i] + singleArr[2];
    }
    return acc;
},arr);

console.log(Math.max(...arr));