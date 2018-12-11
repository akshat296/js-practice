function flipArgs(){
var newArry = []

var convertArry = Array.prototype.slice.call(arguments)
for (var i = convertArry.length-1; i >= 0; i--) {
newArry.push(convertArry[i])
}
console.log(newArry)
return newArry 
}

flipArgs(4,5,9,87)


