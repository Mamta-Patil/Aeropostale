// woman section
let mainSection = document.querySelector("#mainSection");
let productdata = []
function fetchdata() {
    fetch("https://aeropostale-backend-1.onrender.com/womanData")
        .then((res) => res.json())
        .then((data) => {
            datalist(data)
            productdata = data
        })
        .catch((err) => console.log(err))
}
fetchdata()

function datalist(data) {
    console.log("hello");
    let store = data.map((el) =>
        singledata(el.id, el.image1, el.title, el.discription, el.price))
    mainSection.innerHTML = store.join("")
}

function singledata(id, image1, title, discription, price) {
    let data = `   
    <a href="description.html?title=${encodeURIComponent(title)}&image1=${encodeURIComponent(image1[0])}&image2=${encodeURIComponent(image1[1])}&image3=${encodeURIComponent(image1[2])}&image4=${encodeURIComponent(image1[3])}&price=${encodeURIComponent(price)}&discription=${encodeURIComponent(discription)}" class="nav-link p-0"> 
    <div class="card" data-id="${id}">
    <div class="card-image">
        <img src="${image1}" alt="" width="100%" class="img1">
    </div>
    <div class="card-body">
        <p class="card-title">${title}</p>
        <p class="card-discription">${discription}</p>
        <p class="card-price">$${price}</p>
    </div>
    </div>  
</a>
    `
    return data;
}

// men's products data
let mainSectionmen = document.querySelector("#mainSectionmen");
let productdatamen = []
function fetchdatamen() {
    fetch("https://aeropostale-backend-1.onrender.com/menData")
        .then((res) => res.json())
        .then((data) => {
            datalistmen(data)
            productdatamen = data
            console.log(data)
        })
        .catch((err) => console.log(err))
}
fetchdatamen()

function datalistmen(data) {
    let store = data.map((el) =>
        singledatamen(el.id, el.image1, el.title, el.discription, el.price))
    mainSectionmen.innerHTML = store.join("")
}

function singledatamen(id, image1, title, discription, price) {
    let data = `   
    <a href="description.html?title=${encodeURIComponent(title)}&image1=${encodeURIComponent(image1[0])}&image2=${encodeURIComponent(image1[1])}&image3=${encodeURIComponent(image1[2])}&image4=${encodeURIComponent(image1[3])}&price=${encodeURIComponent(price)}&discription=${encodeURIComponent(discription)}" class="nav-link p-0"> 
    <div class="card" data-id="${id}">
    <div class="card-image">
        <img src="${image1}" alt="" width="100%" class="img1">
    </div>
    <div class="card-body">
        <p class="card-title">${title}</p>
        <p class="card-discription">${discription}</p>
        <p class="card-price">$${price}</p>
    </div>
    </div>  
</a>
    `
    return data;
}

// navbar toggle using jquery$
$(document).ready(function () {
    $(".slidebar").hide();
    $(".menu").click(function () {
        $(this).toggleClass("bi-list  bi-x");
        $(".slidebar").slideToggle("show")
    })
})

// soart product by price woman data
let high_to_low = document.getElementById("high-to-low")
let low_to_high = document.getElementById("low-to-high")
high_to_low.addEventListener("click", () => {
    const high_to_low_data = productdata.sort((a, b) => b.price - a.price)
    console.log(high_to_low_data);
    datalist(high_to_low_data)
})
low_to_high.addEventListener("click", () => {
    const low_to_high_data = productdata.sort((a, b) => a.price - b.price)
    console.log(low_to_high_data);
    datalist(low_to_high_data)
})

//For THEME 
function Darkmode() {
    let element = document.body;
    element.classList.toggle("dark")
    console.log(element);
}