//DARk AND LIGHT MODE TOOGLE
const darkLight =document.getElementById(`darkLight`)


darkLight.addEventListener(`click` ,()=>{
    document.body.classList.toggle(`darkmode`)

    if(document.body.classList.contains(`darkmode`)){
        darkLight.innerHTML = `<i class="bi bi-sun"></i>`
        
    }else{
        darkLight.innerHTML= `<i class="bi bi-moon"></i> `
    }
})


// create a new variable for the biiger screen dark/light mode button
const darkLight1 =document.getElementById(`darkLight1`)


darkLight1.addEventListener(`click` ,()=>{
    document.body.classList.toggle(`darkmode`)

    if(document.body.classList.contains(`darkmode`)){
        darkLight.innerHTML = `<i class="bi bi-moon"></i> `
        
    }else{
        darkLight.innerHTML= `<i class="bi bi-moon"></i> `
    }
})


// typed js
var typed1 = new Typed("#profileText", {
    strings: ["UI/UX Designer","Full Stack Developer", ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
}
);

// script for getIntouch button
const getIntouch =document.getElementById(`getIntouchbtn`).addEventListener("click", function () {
document.getElementById("contact").scrollIntoView({
behavior: "smooth" // smooth scroll
});
});