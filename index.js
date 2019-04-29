

class EasyHTTP {
  get(url){
    fetch(url)
    .then( res => res.json ())
    .then(data => console.log(data))
    .catch( err => console.log(err))
  }
}
const http= new EasyHTTP();
console.log(TypeError())
http.get('http://jsonplaceholder.typicode.com/users');

//lecture 69

// async function myfunc(){
//   const promise= new Promise ((resolve, reject)=> {
//     setTimeout(()=> resolve('hello'),1000);
//   });

//   const err= false;
//   if (!err){
//     const res  = await promise; //wait until promise is resolved
//   return res;
//   }else{
//     await Promise.reject(new Error("Something went wrong"));
//   }
  
// }
// myfunc().then(res => console.log(res))
// .catch(err=> console.log(err));