function shallowCopy (obj) {
  // let copyObj ={};
  // Object.keys(obj).forEach((item, index)=>{
  //     copyObj[item]=obj[item];
  // });
  // return copyObj;
  function F () {}
    F.prototype = obj
    return new F()
}
let oldObj = { name: 'akshat', age: 40 };

let myNewObj = shallowCopy(oldObj)

console.log(oldObj, 'old')
console.log(myNewObj.age, 'new')
// myNewObj.name='tandon';

// function deepCopy(obj){
//     return JSON.parse(JSON.stringify(obj));
// }
//  oldObj={name:'akshat',age:40, color: {
//     hair:'black',eyes: new Date
// }};

// myNewObj=deepCopy(oldObj);
// myNewObj.color.eyes=new Date("2-3-2031");
// console.log(oldObj,"old")
// console.log(myNewObj,"new");
