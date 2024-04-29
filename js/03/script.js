// Data Types
// Numbers

let num = 3.14;
let num2 = 10;

console.log(num+num2)

// Strings

const firstName = "Sandeep";
const lastName = 'Sahu'
console.log(firstName +' ' +lastName)

// Booleans
let isLoggedIn = false
console.log(isLoggedIn)

// Null
let lastLongDate0 = null;
console.log(lastLongDate0)  // --space is user 
// undefined

let lastLongDate = undefined;

console.log(lastLongDate)

//Objects

const person ={
    firstName: 'Sandeep',
    lastName: 'Sahu',
    age: 25,
    isLoggedIn: true
}
console.log(person)
const person2 ={
    firstName: 'San',
    lastName: 'Sahu',
    age: 26,
    isLoggedIn: false,
    lastLonginDate: null
}
console.log(person2)

// Operators
const firstName1 = "Sandeep";
const lastName1 = 'Sahu'
console.log(firstName1+lastName1)

//booleans
if(0){
    console.log(false)
}
if(1){
    console.log(true)
}

//true->1
//false->0
// string '1' + '1'
// console.group('1'+'1')
// console.group('1'+11)
// console.group('1'*11)
// console.group('123'* 1 )
// console.group('a'* 1 )
// console.group('a'+ 1 )
//Typeof operator

// console.log(typeof('123'*  1))
// console.log(typeof('123'))
// console.log(typeof(123))

// console.log(typeof(person))

// const age = 90
// if(age>=80){
//     console.log('yes,you are an adult')
// }
//  else if(age>=18){
//     console.log('yes ,you can vote')
// }
// else{
//     console.log('no ,you can vote')
// }


//Ternary Operator
// const age = 10;
// age>=18?console.log('yes'):console.log('no')
// let result =age>=18?'yes':'no'
// console.log(result)

const option= 3;
switch(option) {
    case 1:{
        console.log('Namaste!')
        break;
    }
    case 2:{
        console.log('hello!')
        break;
    }
    case 3:{
        console.log('bonjor')
        break;
    }
    default:{
        console.log('default')
        break;
    }
}


let x =30
let opt = '*'
let y = 40

switch(opt) {
    case '+':
        console.log(x+y)
        break;
    case '-':
        console.log(x-y)
        break;
    case '*':
        console.log(x*y)
        break;
    case '/':
        console.log(x/y)
        break;
    case '%':
        console.log(x%y)
        break;
    default:
        console.log('default')
        break;
}

//AND --> All condition must be true(&&)
//OR --> (||)
//NOT
const age =10;
const gender= 'male';
// if(age>=18 && gender == 'male'){
//     console.log('yes,you are an adult male')
// }
if(age>=18 || gender == 'female'){
    console.log('yes,you are an adult male')
}
else{
    console.log('no')
}
// =  assignment
// == value 


const number =5;
if(!(number%2==0)){
    console.log('odd')
}

// Loops
// for loop -> if you know how many time you to loop
// for (let i =1; i<=10; i++){
//     console.log('sandeep'+i)
// }
/*
                                     you                                    
                                     house

*/

let ip=0
let house = 100
while(ip!=house){
ip =ip+1;
console.log('step'+ip);
}

//Do While

let fp=50
let home  = 50;
do{
    fp = fp +1 ;
    console.log('step'+fp);

}while(fp <= home)
///

// Guess the input
let number1 = 40;
 
let guess = 0;

// do {
//     guess = parseInt(prompt("Guess a value"))
//     if(guess == number1){
//         alert('Winner')
//         break;
//     }
// } while(guess!=0)

while(guess!= 0){
    guess = parseInt(prompt("Guess a value"))
    if(guess == number1){
        alert('Winner')
        break;
    }
}
