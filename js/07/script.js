// const students =["Sandeep ","Murari","Shivam"]


// // for(let i= 0 ;i< students.length; i++){
// //     console.log(students[i])
// // }

// // function print(n){
// //     console.log(n)
// // }

// // students.forEach(print)

// // students.forEach((n) => console.log(n))

// students.map((val) => console.log(val))

// const numbers = [1,2,3,4,5,6,7,8]
// let newArr =[]
// numbers.forEach((val) => newArr.push(val*2))
// // numbers.forEach((val) => console.log(val*2))
// console.log(newArr)
// const numbers = [1,2,3,4,5,6,7,8]
// function double(n){
    //     return n*2
    // }
    
    // let newArr = numbers.map(double)
    // console.log(newArr)
    // let newArr= numbers.forEach((val) => (val*2))
// // numbers.forEach((val) => console.log(val*2))
// console.log(newArr)


const numbers = [1,2,3,4,5,6,7,8]
// let ans = numbers.findIndex(num => num===2*2)

// console.log(ans)

// const newArr = numbers.filter((num)=>num%2==0)
// console.log(newArr)

// let newArr = numbers.slice(1,5)

// console.log(newArr) // include starting index and skip the end index when both indices are given

let newArr = numbers.splice(1,4)
console.log(newArr) // include starting index and skip the end
console.log(numbers)