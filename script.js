
//   section for the typed.js
var typed = new Typed("#text", {
    strings: ["@NjorogeVictor", ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
}
);
var typed1 = new Typed("#xxxx", {
    strings: ["A fullstack Software-Developer based in Kenya", ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
}
);


// scroll fade in effect section

const darkLight =document.getElementById(`darkLight`)


darkLight.addEventListener(`click` ,()=>{
    document.body.classList.toggle(`darkmode`)

    if(document.body.classList.contains(`darkmode`)){
        darkLight.innerHTML = `<i class="bi bi-moon"></i> `
    }else{
        darkLight.innerHTML= `<i class="bi bi-sun"></i> `
        
    }
})