console.log(".....APP Started");
function callAPI(){
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=9f5d30e1403a49f1aca979c1a6608128")
    .then((res) => res.json())
.then((data) => renderUI(data)
    
)}
    


function renderUI(data){
    const root = document.getElementById("root");
    // got the article from data
    
    const articles =data.articles;

    // console.log(articles);
    
    
    
    for(let i =0; i < articles.length; i++){

   
    const ar = articles[i];

    // console.log(ar);
    // created parent div

    const div = document.createElement("div");
    div.setAttribute("class", "news-card");
    const h3 =document.createElement("h3");
    const p =document.createElement("p");
    const img = document.createElement("img");
    img.src = ar.urlToImage;
    
    h3.innerText = ar.title;
    p.innerText = ar.description;
    div.appendChild(h3);
    div.appendChild(img);
div.appendChild(p);

    root.appendChild(div);
}
}
callAPI();



    