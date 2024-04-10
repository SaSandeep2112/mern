const sum = function(a, b) {
    console.log(a + b);
    // return a+b;
}
const mul = function(a, b) {
console.log(a*b);
}
//
console.log('module 1,,,,')
const name = 'sandeep';
module.exports ={
        sum,
        mul,
        'name': name,
    };
