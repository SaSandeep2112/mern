function add(a,b){
    return a+b;
}

function multiply(...args){
    return args[0] * args[1];
}
function square(val){
    return val*val;
    
}

// function addTwoSquare(a,b){
//     return square(add(a,b))
// }

// function ComposeTwoFunction(fn1,fn2){
//     return function(a,b){
//         return fn2(fn1(a,b))
//     }
// }

function Compose(...fns){
    return function(...value){
       return fns.reduce((a,b) => b(a), value)
    }
}

console.log

const c2f= (fn1,fn2) => (a,b) => fn2(fn1(a,b))



const task = Compose(multiply,square)
console.log(task(2,3))
// console.log(addTwoSquare(2,3))

