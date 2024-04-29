// Query Selector
// const body = document.querySelector("body")
// const div = document.querySelector("div")
// // body.innerHTML = "<h1>Hacked!</h1>"
// div.innerHTML = "<h1>This is Hacked yes !</h1>"
// // console.log(body.innerHTML)
// // console.log(div.innerHTML)

// const username = document.querySelector('#username')
// console.log(username.innerText)

// username.innerText ="Shivam Pal"


// const username = document.querySelector(".paragraph")
// console.log(username)
// username.innerText = "yes i love coding"

// const ele = document.querySelectorAll(".block")

// ele.forEach((e)=>{ 
//     console.log(e.innerHTML)

// })
// const ele = document.querySelector("div")
// console.log(ele.parentElement.children)


// const el = document.getElementById('username')
// el.setAttribute("aria",123)
// el.innerText =  "Shivam pal"
// el.classList.add("red-color","underline")
// console.log(el.classList)
// el.classList.remove("red-color")
// el.style.textDecoration = "underline"
// el.style.color = "tomato"
// el.parentElement.style.background = "gray"
// console.log(el)
// el.remove()

// const elements = document.getElementsByClassName('block')
// console.log(elements)
// for( let i  = 0 ; i < elements.length ; i++ )
// {elements.item(i).style.background = "blue"
// }

// const elements = document.getElementsByClassName('block')

// for (let i = 0; i < elements.length; i++) {
//    elements.item(i).remove()
// }
//  const el = document.getElementById("ClickButton");
// el.onclick =()=>{
//     console.log("Hello World");
// }

// el.onclick =()=>{
//     console.log("Hello again");
// }
//el.addEventListener("click", () => console.log("my"))

// const el =  document.getElementById("ClickButton");
// const nameBlock =document.getElementById("name-block");
// function doSomething() {
//  console.log("I am clicked");
// }
// el.addEventListener("click", ()=>{
//  if(nameBlock.style.color=="red"){
//      nameBlock.style.color="blue";
//  }
//  else{
//      nameBlock.style.color="red";
//  }
// })

// console.log(document.querySelector("body").children)
// const allChildren =  document.querySelector("body").children

// for (let i = 0; i < allChildren.length; i++) {
//     allChildren.item(i).addEventListener("click",()=>{
//        allChildren.item(i).remove()
//     }
// )}

// const button = document.getElementById("Clickbutton");
//  const Container = document.getElementById("my-container");
//  let count = 1

//  button.addEventListener("click", () => {
//     const el =document.createElement('li')
//     el.innerText = count
//     // Container.innerHTML = "<h1>Sandeep Sahu</h1>"
//     Container.appendChild(el)
//     count++
//  })



// let a = 10 
// let b = 20 
// let result = a+b


// async function getData(){
//     let resultFromServer = await fetch("https://jsonplaceholder.typicode.com/posts")

// console.log(await resultFromServer.json())



// }
// getData()
// console.log(result)



// let a= 5
// let b= 10
// let result =a+b

//  fetch("https://jsonplaceholder.typicode.com/posts")
// .then((data) =>{console.log(data)})
// .catch((error)=>{console.log(error)})
// console.log(result)


const button  =document.getElementById('Clickbutton');
const uname =  document.getElementById('username1');
const username = document.getElementById('username')
button.addEventListener('click', ()=> {
    const value = uname.value
    localStorage.setItem("name", value)
    location.reload()
})

window.addEventListener('load',()=>{
    const value = localStorage.getItem("name")
  username.innerText = value
})