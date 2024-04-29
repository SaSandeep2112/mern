function add(a,b,cb) {
  let result =a+b;
  cb(result);
  return ()=> console.log(result)

}



let resultFunction = add(2,4,() => {})
resultFunction();


// function add(a,b,cb) {
//   let result =a+b;
//   cb(result);
// }

// function showResult(result){
//     console.log(result)
// }

// add(2,4,function(val){
//     console.log(val);
// })

