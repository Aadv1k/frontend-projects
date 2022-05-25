import style from './scss/main.scss' 

let ham = document.getElementById('ham')
let navOverlay = document.getElementById('navOverlay')



ham.addEventListener('click', () => {
    if (ham.getAttribute('value') == 'close') {
        navOverlay.classList.add('nav__overlay--open')
        ham.setAttribute('value', 'open')
        document.getElementById('hamOpen').style.display = 'none'
        document.getElementById('hamClose').style.display = 'block'
        document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    } else {
        navOverlay.classList.remove('nav__overlay--open')
        document.getElementsByTagName('body')[0].style.overflow = 'scroll'
        ham.setAttribute('value', 'close')
        document.getElementById('hamOpen').style.display = 'block'
        document.getElementById('hamClose').style.display = 'none'
    }
    
})
