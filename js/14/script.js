// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
    
//     }
// }
// }
// console.log(add(2)(3)(5))


// const add = (a) => (b) => (c) => a+b+c;
// console.log(add(5)(10)(15))

// function sendAutoEmail(to){
//     return function(subject){
//         return function(body){
//             console.log(`Sending email to ${to} with subject ${subject}:${body}`)
//         }
//     }
// }


// const sendAutoEmail = (to) => (subject) => (body) => 
// `Sending email to ${to} with subject ${subject}:${body}`

// let step1 = sendAutoEmail('Sandeepsahu44@outlook.com')
// let step2 = step1("New order Confirmation ")
// step2("Hey Sandeep , there is something for you ")