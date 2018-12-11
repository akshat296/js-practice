let obj = {
  name: 'Akshat',
  age: '24',
  company: {
    name: 'Thinksys',
    empId: '10328',
    getName: class {
      constructor(){
        console.log('jey')
      }
      test(){
        console.log('pika');
      }
      ren(){
        console.log('here')
      }
    },
    sum: a => b => a + b,
    doj: new Date(),
    join: {
      answer: true
    }
  }
}

function deepCopy (obj) {
 let newObj = {};
 for(i in obj){
     if(obj[i]!==null && typeof obj[i] === "object"){
         newObj[i]=deepCopy(obj[i]);
     }
     else{
         newObj[i]=obj[i];
     }
 }
 return newObj;
}

let a = deepCopy(obj).company.getName;
console.log(deepCopy(obj));





