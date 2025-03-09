
const mobileNav = document.querySelector('.nav__links-mobile')
const burgerBtn = document.querySelector('.nav__burger-btn')


const handleMobileNavbar = () => {
    mobileNav.classList.toggle('nav__links-mobile--opened')
    burgerBtn.classList.toggle('nav__burger-btn--active')
    const isOpened = burgerBtn.getAttribute('aria-expanded')
    
    if(isOpened === 'false') {
        burgerBtn.setAttribute('aria-expanded', 'true')
    }else {
        burgerBtn.setAttribute('aria-expanded', 'false')
    }
}

burgerBtn.addEventListener('click', handleMobileNavbar)