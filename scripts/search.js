// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar()

import { teslaNew } from "./fetch.js";


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

let newsData = JSON.parse(localStorage.getItem("news"))  || []
function  addnew(el,index) {
    // console.log("inside")
    newsData.push(el)
localStorage.setItem("news", JSON.stringify(newsData))
window.location.href = "news.html"
}



let search = (e)=> {
    if(e.key==="Enter")
    {
        let value = document.querySelector("#search_input").value
        let container = document.querySelector("#results")
        container.innerHTML  =null;
        teslaNew(value).then((data)=> {
            console.log(data.articles)
            appenData(data.articles)
          
        })
    }
}
document.querySelector("#search_input").addEventListener("keydown", search)




let newsserachI = JSON.parse(localStorage.getItem("newsserach"))

    let container = document.querySelector("#results")
    container.innerHTML  =null;
    newsserachI.map(function(el, index, arr) {
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



