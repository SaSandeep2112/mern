function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}

function square(val){
    return val*val;
}

// function addTwoandSquare(a,b){
//     return square(add(a,b))
// }

function composeTwoFucntion (fn1, fn2){
    return function(a,b){
        return fn2(fn1(a,b))
    }
}

const task =composeTwoFucntion(multiply,square)
console.log(task(2,3))


// console.log(square(addResult(2,3)))

