//Scroll suave
window.addEventListener("scroll", function() {
    let header = document.querySelector('#header_topo')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

//reload para o topo

document.addEventListener('DOMContentLoaded', function() {
  // Role a página para o topo
  window.scrollTo(0, 0);
});

// Menu hamburguer  

const hamburguer = document.querySelector(".mobile-menu");
const nav = document.querySelector(".organiza_header_topo");

hamburguer.addEventListener("click",() => nav.classList.toggle("active"));

hamburguer.addEventListener("click",() => hamburguer.classList.toggle("active"));

//menu button
function mostrarDisplay(numero) {
  document.getElementById('button1').classList.remove('active_menu_button');
  document.getElementById('button2').classList.remove('active_menu_button');
  document.getElementById('button3').classList.remove('active_menu_button');
  document.getElementById('button' + numero).classList.add('active_menu_button');

    for (let i = 1; i <= 3; i++) {
      document.getElementById(`display${i}`).style.display = 'none';
    }

 document.getElementById(`display${numero}`).style.display = 'flex';
  }

// Contador
let animationStarted = false;

let CounterObserver = new IntersectionObserver((entries, observer) => {
  let [entry] = entries;
  if (!entry.isIntersecting || animationStarted) return;

  console.log(entry);
  

  animationStarted = true;

  let valueDisplays = document.querySelectorAll(".num");
  let duration = 1000; 
  
  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let increment = (endValue / duration) * 10; // incremento <<

    let counter = setInterval(function () {
      startValue += increment;
      valueDisplay.textContent = Math.floor(startValue);

      if (startValue >= endValue) {
        valueDisplay.textContent = endValue;
        clearInterval(counter);
      }
    }, 10);
  });
}, {
  root: null,
  threshold: 0.4,
});

CounterObserver.observe(document.getElementById('banner_6'));

window.sr = ScrollReveal({ reset: true});
ScrollReveal().reveal('.subtitulo', { duration: 1000});
ScrollReveal().reveal('.titulo', { duration: 1400});
ScrollReveal().reveal('.fade_button', { duration: 1800});
ScrollReveal().reveal('.ancora_imagem', { duration: 1000});
ScrollReveal().reveal('.banner_3_conteudo', { duration: 1500}); 
ScrollReveal().reveal('.card_1_figure', { duration: 500}); 
ScrollReveal().reveal('.card_2_figure', { duration: 1500}); 
ScrollReveal().reveal('.card_3_figure', { duration: 2500}); 
ScrollReveal().reveal('.card_4_figure', { duration: 3500}); 
ScrollReveal().reveal('.banner_5_fade1', { duration: 500}); 
ScrollReveal().reveal('.banner_5_fade2', { duration: 1500}); 
ScrollReveal().reveal('.banner_5_fade3', { duration: 2500}); 
ScrollReveal().reveal('.banner_6_titulo', { duration: 1000}); 
ScrollReveal().reveal('.banner_9_container', { duration: 1000}); 
ScrollReveal().reveal('.contato_footer', { duration: 3000}); 
ScrollReveal().reveal('.news_footer', { duration: 1000}); 
ScrollReveal().reveal('.links_rápidos', { duration: 3000}); 