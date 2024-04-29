// //IIFE Immediately Invoked Function Expression

// // (function add(a,b){
// //  let age =20;

// //   console.log(a+b)
// // })(2,3)



// (function say(){
//     console.log('hey');
// })();


// (() => console.log('I am Es6'))()

// const value =  (() => 100)()
// console.log(value)


// const data= (async() => await fetch())()

// console.log(data)

const atm = (function (initalBalnce){
    let balance = initalBalnce;
    function withdraw(amt){
        if(amt > balance){
            console.log('Insufficient Balance')
        }else{
            balance -= amt;
            return balance
        }
    }
    return {withdraw}
})

const sandeep =  atm(2100)
console.log(sandeep.withdraw(1200))
console.log(sandeep.withdraw(200))