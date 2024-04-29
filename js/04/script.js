// function

// function sayHello(){
//     console.log('sandeep')
// }

// sayHello(); // calling of function 

// // arguments
// function add(a,b,c){
// //  console.log(a+b+c)
//  return a+b+c
// }

// add(5,10,4) // parameters
// add(5,1,4)

// function mul(a,b){
//    // console.log(a*b)
//    let ans=  a*b;
//      return ans
// }
// let result =mul(2,1);
// console.log('That hey user result is ',result)


// // unlimited arguments
// function addNumbers(){
//     let ans = 0
//     for(let i =0; i<arguments.length; i++){
//    ans =  ans + arguments[i]

// }
// return ans
// }

// function addNumbersV2(...numbers){ // spread Operators
//     let ans= 0
//     for(let i= 0 ; i<numbers.length; i++){
//         ans =  ans + numbers[i]
//     }
//     return ans
// }

//  let result1= addNumbersV2(1,5,3,4,5,100)
// console.log(result1)

// Arrow Functions

// 1.syntax

const sayHello =() => { // Arrow function
    console.log('hey')
}
sayHello()

// const add =(a,b) => {
//     return a + b;
// }
// console.log(add(2,3))

const add = (a,b) => a+b;
console.log(add(3,3))

// 2.'arguments' keyword

// function addNumbers(){
    
//  let ans = 0
//     for(let i =0 ; i < arguments.length ; i++){
   
//     ans = ans + arguments[i]
//     }
//     return ans
// }
// let h= addNumbers(10,20,30,40)
// console.log(h)

// const addNumbers = (...nums) =>{
//     console.log(nums)
// }

// addNumbers(10,20,30,40)
// 3. Hositing 


const sayHey =() =>{
    console.log('Welcome')
}

sayHey()

// 4. This Keyword

const obj = {
    value : 20,
    myFunction : function(){
        console.log(this)
    }

}

obj.myFunction()