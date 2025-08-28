
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
var typed = new Typed("#xxxx", {
    strings: ["A fullstack Software-Developer based in Kenya", ],
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

// scroll fade in effect section

const fade = document.querySelectorAll('.fade-in-on-scroll');

function handleScroll() {
  fade.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      el.classList.add('active'); // trigger fade-in
    } else {
      el.classList.remove('active'); // optional: fade out when scrolling up
    }
  });
}

window.addEventListener('scroll', handleScroll);

