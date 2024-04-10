// const figlet = require('figlet');
// figlet('Hello Sandeep',(err,data)=>{
//     console.log(data);
// });
// fetch('https://api.github.com/user/SaSandeep2112')
// .then((res)=>{
//     return res.json();
// })


//async await
// console.log('start')
//  async function getApi(){
//     console.log('api calling.....')
//     const pr = await fetch('https://api.github.com/user/SaSandeep2112');
//     console.log('making json')
//     // console.log(pr);
//     const data =   await pr.json();
//     console.log('fetched data::');
//  }
//  getApi();
//  console.log('end')

console.log('start');
async function callAPI(){
    const pr1 = new Promise((res,rej)=>{
        console.log('promise resolved')
        setTimeout(()=>{
            // console.log('timeout')}
            res('done');
         } ,10000);
        })
        
}
console.log('promis 1 complete');
callAPI();