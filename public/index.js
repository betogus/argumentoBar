const databaseImg = {
    eventosSponsors: [
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/argum_9548-scaled.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/argum_9540-scaled.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/argum_9538-scaled.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/argum_9532-scaled.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/argum_9529-scaled.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/argum_9526-scaled.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/argum_9480-scaled.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/argum_9477-scaled.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/argum_9470-scaled.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/argum_9464-scaled.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/argum_9458-scaled.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/argum_9455-scaled.jpg"
    ],
    desayunosCorporativos: [
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/Argumento-25.9.20-35mmproductora-27-1.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/Argumento-25.9.20-35mmproductora-36-1.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/Argumento-25.9.20-35mmproductora-39-1.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/Argumento-25.9.20-35mmproductora-43-1.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/Argumento-25.9.20-35mmproductora-106-1.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/Argumento-25.9.20-35mmproductora-107-1.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/Argumento-25.9.20-35mmproductora-144.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/Argumento-25.9.20-35mmproductora-145.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/Argumento-25.9.20-35mmproductora-146-1.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/Argumento-25.9.20-35mmproductora-147.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/argumento-1-scaled.jpg",
        "https://argumentorestaurante.com/wp-content/uploads/2021/04/argumento-6-scaled.jpg"
    ],
    
}
/* CAROUSEL DEL INICIO */
let nav = document.querySelector('nav');
let navLinks = document.querySelectorAll('.nav-link');
let logo = document.querySelector('.logo');
let logoAbajo = document.querySelector('.logo-abajo');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('nav-transition', 'shadow');
        nav.classList.remove('ocultar')
        logo.classList.add('text-dark');
        logoAbajo.classList.add('text-dark');
        navLinks.forEach(function (navLink) {
            navLink.classList.add('text-dark');
        });
    } else {
        nav.classList.remove('nav-transition', 'shadow');
        nav.classList.add('ocultar')
        logo.classList.remove('text-dark');
        logoAbajo.classList.remove('text-dark');
        navLinks.forEach(function (navLink) {
            navLink.classList.remove('text-dark');
        });
    }
});
for (let i = 1; i < 4; i++) {
    let botonCarousel = []
    botonCarousel[i] = document.querySelector(`#img-${i}`);
    let imgMiniatura = []
    imgMiniatura[i] = document.querySelector(`#img-miniatura-${i}`);
    botonCarousel[i].addEventListener("mouseover", () => {
        imgMiniatura[i].classList.remove("img-hidden");
    });
    botonCarousel[i].addEventListener('mouseout', () => {
        imgMiniatura[i].classList.add("img-hidden");
    })
}
/* DESPLAZAMIENTO DE LAS IMAGENES DE FONDO AL SCROLLEAR */
let imgContainer = document.querySelectorAll(".img-container");
window.onscroll = function () {
    imgContainer.forEach(function (img) {
        let scrollPos = window.scrollY;
        if (img.id === "background-1") {
            img.style.backgroundPosition = "center " + (100 + scrollPos / 2) + "px";
        } else {
            img.style.backgroundPosition = "center " + (-300 + scrollPos / 2) + "px";
        }
    });
}



/* BOTON ABRIR IMAGEN / CARROUSEL */
let cargarMas = document.querySelector('.seccion6-cargarmas')
let pestaniaActiva = "eventos-sponsors"
let eventosSponsors = document.getElementById('eventos-sponsors')
let desayunosCorporativos = document.getElementById('desayunos-corporativos')
let seccion6container = document.querySelector('.seccion6-container')
let seccion6div = document.querySelector('.seccion6-div')
let innerSeccion6 = document.querySelector('.inner-seccion6')

function cambiarPestania() {
    
    
    seccion6container.classList.remove('active')
    seccion6container.classList.add('aparecer')

     setTimeout(() => {
          seccion6container.classList.add('active')
          cargarMas.style.display = "block"
          let contenidoFinal = ""
          if (pestaniaActiva === "eventos-sponsors") {
              eventosSponsors.innerHTML = "<b>Eventos Sponsors</b>"
              desayunosCorporativos.innerHTML = "Desayunos Corporativos"
              for (let i = 0; i < 9; i++) {
                  let contenido =
                      `<div class="seccion6-div" data-bs-toggle="modal" data-bs-target="#exampleModal"><img class="seccion6-img" id="seccion6-img-${i}"
           src="${databaseImg.eventosSponsors[i]}" alt="foto">
         <div href="" class="caption"></div>
       </div>
  `
                  contenidoFinal += contenido
              }
          } else {
              eventosSponsors.innerHTML = "Eventos Sponsors"
              desayunosCorporativos.innerHTML = "<b>Desayunos Corporativos</b>"
              for (let i = 0; i < 9; i++) {
                  let contenido =
                      `<div class="seccion6-div" data-bs-toggle="modal" data-bs-target="#exampleModal"><img class="seccion6-img" id="seccion6-img-${i}"
           src="${databaseImg.desayunosCorporativos[i]}" alt="foto">
         <div href="" class="caption"></div>
       </div>
  `
                  contenidoFinal += contenido
              }
          }

          seccion6container.innerHTML = contenidoFinal
          contenidoFinal = ""
     }, 1000)
    
}

seccion6container.addEventListener('click', async (e) => {
    if (e.target.className = "seccion6-div") {
        if (pestaniaActiva === "eventos-sponsors") {
            let contenidoFinal = ""
            for (let i = 0; i < databaseImg.eventosSponsors.length; i++) {
                if (e.target.children[0].src === databaseImg.eventosSponsors[i]) {
                    let contenido = `
               <div class="carousel-item active carousel-seccion6" data-bs-interval="5000">
                       <img class="img-fluid ajustar-alto" 
                         src="${e.target.children[0].src}"
                         class="d-block w-100" alt="...">
                     </div>
               `
                    contenidoFinal += contenido
                } else {
                    let contenido = `
               <div class="carousel-item carousel-seccion6" data-bs-interval="5000">
                   <img class="img-fluid"
                     src="${databaseImg.eventosSponsors[i]}"
                     class="d-block w-100" alt="...">
                 </div>
               `
                    contenidoFinal += contenido
                }
            }
            innerSeccion6.innerHTML = contenidoFinal
        } else {
            let contenidoFinal = ""
            for (let i = 0; i < databaseImg.desayunosCorporativos.length; i++) {
                if (e.target.children[0].src === databaseImg.desayunosCorporativos[i]) {
                    let contenido = `
               <div class="carousel-item active carousel-seccion6" data-bs-interval="5000">
                       <img class="img-fluid"
                         src="${e.target.children[0].src}"
                         class="d-block w-100" alt="...">
                     </div>
               `
                    contenidoFinal += contenido
                } else {
                    let contenido = `
               <div class="carousel-item carousel-seccion6" data-bs-interval="5000">
                   <img class="img-fluid"
                     src="${databaseImg.desayunosCorporativos[i]}"
                     class="d-block w-100" alt="...">
                 </div>
               `
                    contenidoFinal += contenido
                }
            }
            innerSeccion6.innerHTML = contenidoFinal
        }
    }
})

/* ELEGIR PESTAÑA */

cambiarPestania()
eventosSponsors.addEventListener('click', () => {
    pestaniaActiva = "eventos-sponsors"
    cambiarPestania()
})
desayunosCorporativos.addEventListener('click', () => {
    pestaniaActiva = "desayunos-corporativos"
    cambiarPestania()

})

/* CARGAR MAS */
cargarMas.addEventListener('click', () => {
    if (pestaniaActiva === "eventos-sponsors") {
        for (let i = 9; i < databaseImg.eventosSponsors.length; i++) {
            let contenido = `
        <div class="seccion6-div" data-bs-toggle="modal" data-bs-target="#exampleModal"><img class="seccion6-img" id="seccion6-img-${i}"
                src="${databaseImg.eventosSponsors[i]}" alt="foto">
              <div href="" class="caption"></div>
            </div>
        `
            seccion6container.innerHTML += contenido
        }
        cargarMas.style.display = "none"
    } else {
        for (let i = 9; i < databaseImg.desayunosCorporativos.length; i++) {
            let contenido = `
        <div class="seccion6-div" data-bs-toggle="modal" data-bs-target="#exampleModal"><img class="seccion6-img" id="seccion6-img-${i}"
                src="${databaseImg.desayunosCorporativos[i]}" alt="foto">
              <div href="" class="caption"></div>
            </div>
        `
            seccion6container.innerHTML += contenido
        }
        cargarMas.style.display = "none"
    }
    
})

/* FORMULARIO */

const handleSubmit = (evt, form, route) => {
    evt.preventDefault()
    let data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    }
   

    fetch(route, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        })
     
        .then(res => {
            console.log(res)
            console.log(res.status)
            if (res.status === 201) {
                form.email.value = ""
                form.name.value = ""
                form.message.value = ""
                Toastify({
                    text: "Se envió con éxito",
                    duration: 3000,
                    destination: "https://github.com/apvarun/toastify-js",
                    newWindow: true,
                    close: false,
                    gravity: "top", // `top` or `bottom`
                    position: "left", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "rgb(143,123,105);",
                    },
                    onClick: function () {} // Callback after click
                }).showToast();
            }
        
        })    
        .catch(err => console.log(err))
}


let formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) => handleSubmit(e, e.target, '/'))

