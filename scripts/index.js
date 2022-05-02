// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import { navbar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

import {countryNew,teslaNew} from "./fetch.js"

//https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}

let contryies = document.querySelector("#sidebar").children

function childSearch() {
    // console.log(this.id);
    countryNew(this.id).then((data)=> {
        console.log(data.articles)
        appenData(data.articles)
    })
}



for(let i=1; i<contryies.length; i++)
{
    contryies[i].addEventListener("click",childSearch )
}

function  appenData(data) {
    let container = document.querySelector("#results")
    container.innerHTML  =null;
    data.map(function(el, index, arr) {
        let box = document.createElement("div")
        box.setAttribute("class", "news")
        box.addEventListener("click",function () {
            addnew(el,index)
        })
        let imageBox = document.createElement("div")
        let imgae = document.createElement("img")
        imgae.src = el.urlToImage

        let tilteBox = document.createElement("div")
        let tilte = document.createElement("h4")
        tilte.innerText = el.title

        let des  = document.createElement("p")
        des.innerText= el.description

        imageBox.append(imgae)
        tilteBox.append(tilte,des)
        box.append(imageBox, tilteBox)
        container.append(box)

    })

}

const url= " https://masai-mock-api.herokuapp.com/news/top-headlines?country=in"

fetch(url).then(function(res) {
    return res.json()
}).then(function (res) {
    console.log("res", res)
    appenData(res.articles)
}).catch(function(err) {
    console.log(err.articles)
    
    
})

let newsData = JSON.parse(localStorage.getItem("news")) || []
function  addnew(el,index) {
    // console.log("inside")
    newsData.push(el)
localStorage.setItem("news", JSON.stringify(newsData))
window.location.href = "news.html"
}


//https://masai-mock-api.herokuapp.com/news?q=${value}


let search = (e)=> {
    if(e.key==="Enter")
    {
        let value = document.querySelector("#search_input").value
        let container = document.querySelector("#results")
        container.innerHTML  =null;
        teslaNew(value).then((data)=> {
            console.log(data.articles)
            // appenData(data.articles)
            let newDataS = data.articles
            localStorage.setItem("newsserach", JSON.stringify(newDataS));
            window.location.href= "search.html"
        })
    }
}
document.querySelector("#search_input").addEventListener("keydown", search)