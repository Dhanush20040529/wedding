const map = document.querySelectorAll(".map")
console.log(map)
map.forEach((m)=>{
    m.addEventListener("click",()=>{
        window.location.href = "https://maps.app.goo.gl/k4anWLUgzzBQSHqw6"
    })
})

const receptionLocation = document.querySelector(".reception")
receptionLocation.addEventListener("click",()=>{
    window.location.href = "https://maps.app.goo.gl/DHgsYBpyrxiu1mBeA"
})

