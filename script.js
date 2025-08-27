
// section for the backgroundVideo speed
    const bgVideo = document.getElementById('backgroundVideo');
    bgVideo.playbackRate = 0.5;


//   section for the typed.js
var typed = new Typed("#text", {
    strings: ["@NjorogeVictor", ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
}
);

//DARk AND LIGHT MODE TOOGLE
const darkLight =document.getElementById(`darkLight`)


darkLight.addEventListener(`click` ,()=>{
    document.body.classList.toggle(`darkmode`)

    if(document.body.classList.contains(`darkmode`)){
        darkLight.innerHTML = `<i class="bi bi-sun"></i> `
    }else{
        darkLight.innerHTML= `<i class="bi bi-moon"></i> `
    }

})

