// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar()

import { teslaNew } from "./fetch.js"

let newsData = JSON.parse(localStorage.getItem("news"));



newsData.map(function (el, index, arr) {
    let container = document.querySelector("#detailed_news")
    container.innerHTML = null;
    let box = document.createElement("div")

    let imgae = document.createElement("img")
    imgae.src = el.urlToImage

    let tilte = document.createElement("h3")
    tilte.innerText = el.title

    let des = document.createElement("p")
    des.innerText = el.description

    box.append(imgae, tilte, des)
    container.append(box)
})




let search = (e) => {
    if (e.key === "Enter") {
        let value = document.querySelector("#search_input").value
        teslaNew(value).then((data) => {
            console.log(data.articles)
            // appenData(data.articles)
            let newDataS = data.articles
            localStorage.setItem("newsserach", JSON.stringify(newDataS));
            window.location.href = "search.html"
        })
    }
}
document.querySelector("#search_input").addEventListener("keydown", search)

