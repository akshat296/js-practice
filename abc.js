function test() {
  var a = {
  internal: {
    url: '/internal',
    method: 'post',
    input: 'something',
    output: 'output'
  },
  login: {
    url: '/login',
    method: 'get',
    input: 'login',
    output: 'done'
  },
  signin: {
    url: '/signin',
    method: 'get',
    input: 'signiner',
    output: 'done'
  },
  signin2: {
    url: '/signin',
    method: 'post',
    input: 'signiner',
    output: 'done'
  },
};

let b= {
  '/login':{
    method:{
      'get':{
    input:'login',
    output:'done'
    }
  }},
  '/signin':{
      method:{
        'get':{
      input:'login',
      output:'done'
      },
       'post':{
      input:'signiner',
      output:'done'
      }
  }

}}
let c =Object.keys(a)
.filter((p)=> p!=='internal')
.reduce((acc, item)=>
 {
   if(!acc[a[item].url]){
   acc[a[item].url]={
     method:{}
   }}
    acc[a[item].url].method[a[item].method]=
       {
         input: a[item].input,
         output: a[item].output
       }
     
  return acc;
 }
,{}) 

console.log(JSON.stringify(c,3,2))
}
test();


