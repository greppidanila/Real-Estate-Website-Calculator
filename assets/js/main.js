/*=============== CAMBIO DE FONDO DE COLOR DEL HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById("header");
    //Cuando el scroll es mayor que 50 de altura viewport, agregar la clase scroll-header a la etiqueta del header
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);



/*=============== SWIPER EN LAS CARDS DE PROPIEDADES | Slider =============*/
    var swiperPopular = new Swiper(".popular__container", {
        spaceBetween: 30,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });



/*=============== LISTA DESPLEGABLE | Accordion ===============*/
const accordionItems = document.querySelectorAll('.value__accordion-item')

accordionItems.forEach((elemento) =>{
    const accordionHeader = elemento.querySelector('.value__accordion-header')

    accordionHeader.addEventListener('click', () =>{
        const abrirElemento = document.querySelector('.accordion-open')

        alternarElemento(elemento)

        if(abrirElemento && abrirElemento!== elemento){
            alternarElemento(abrirElemento)
        }
    })
})

const alternarElemento = (elemento) =>{
    const accordionContent = elemento.querySelector('.value__accordion-content')

    if(elemento.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        elemento.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
    elemento.classList.add('accordion-open')
    }    
}


/*=============== LINK ACTIVO EN NAV según sección vista ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActivo = () =>{
const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActivo)



/*=============== MOSTRAR SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // Cuando el SCROLL es superior a 350 de altura viewport, agregar la clase show-scroll a la etiqueta "a" con la clase scrollup
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)





/*=============== MODO DARK LIGHT ===============*/ 
const temaBoton = document.getElementById('theme-button')
const temaDark = 'dark-theme'
const temaIcono = 'bx-sun'

// Tema seleccionado previamente (si está seleccionado por el usuario)
const temaSeleccionado = localStorage.getItem('tema-seleccionado')
const iconoSeleccionado = localStorage.getItem('icono-seleccionado')

// Obtenemos el tema actual que tiene la interfaz validando la clase dark-theme
const obtenerTemaActual = () => document.body.classList.contains(temaDark) ? 'dark' : 'light'
const obtenerIconoActual = () => temaBoton.classList.contains(temaIcono) ? 'bx bx-moon' : 'bx bx-sun'

// Validamos si el usuario eligió previamente un tema
if (temaSeleccionado) {
  // Si se cumple la validación, preguntamos cuál fue el problema para saber si activamos o desactivamos dark-theme.
    document.body.classList[temaSeleccionado === 'dark' ? 'add' : 'remove'](temaDark)
    temaBoton.classList[iconoSeleccionado === 'bx bx-moon' ? 'add' : 'remove'](temaIcono)
}

// Activar/desactivar el tema manualmente con el botón
temaBoton.addEventListener('click', () => {
    // Agregar o eliminar el tema/icono oscuro
    document.body.classList.toggle(temaDark)
    temaBoton.classList.toggle(temaIcono)
    // Guardamos el tema y el icono actual que eligió el usuario
    localStorage.setItem('tema-seleccionado', obtenerTemaActual())
    localStorage.setItem('icono-seleccionado', obtenerIconoActual())
})



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 100,
    reset: true
})

sr.reveal('.home__title, .popular__container, .subscribe__container, .footer__container')
sr.reveal('.home__description, .footer__info', {delay: 200})
sr.reveal('.home__search', {delay: 300})
sr.reveal('.home__value', {delay: 400})
sr.reveal('.home__images', {delay: 500, origin: 'bottom'})
sr.reveal('.logos__img', {interval: 100})
sr.reveal('.value__images, .contact__content', {origin: 'left'})
sr.reveal('.value__content, .contact__images', {origin: 'right'})
