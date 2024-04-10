// console.log('hello');
// const arr =[10,22,34];
// const arr2 = [10,11,22,32,34];

// const ans = arr.map((a)=>{
//     console.log(a);
//     return a*2;
// });

// const ans3 = arr.map(a=>parseInt(a));
// // const ans2 = arr.map(a=>Math.pow(a, 2));
// console.log(ans);
// console.log(ans3);

// const arr = [10,22,34];
// const ans = arr.filter((a)=>{
//     if(a>20)return true;
//     else return false;
// })
// console.log(ans);
// console.log(arr);


// const arr =[
//     'delhi',
//     'mumbai',
//     'Chennai',
//     'Bangalore',
//     'Kolkata',
//     'pune',
//     'India',
//     'Indonesia',
//     'Russia',
//     'usa'
// ]

// const ans = arr.filter((s)=>{
//     if(s.includes('i')||s.includes('I')){
//         return true;
//     }
//     else  false;
// })
// console.log(ans)


// const arr = [
//     'Delhi,India','Mumbai,India','Chennai,India','Jakarta,India',
//     'Shanghai,China','Taiwan,China',
//     'washington,USA','Texas, USA',
// ]

// const ans = arr.filter((a)=>{
//     const ns =a.toLowerCase();
//     if(ns.includes('india')){
//         return true;
//     }
//     else  false;
// })

// console.log(ans)
const arr =['ab','cd','xy','z']
const ans = arr.reduce((total,curr)=>{
    console.log(total,curr)
    return total+curr;
})
