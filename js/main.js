const burgerBtn = document.querySelector('.nav__burger-btn')
const mobileMenu = document.querySelector('.menu-mobile')
const nav = document.querySelector('.nav')

const burger = document.querySelector('.burger-icon')
const x = document.querySelector('.x-icon')

const abaoutTitle = document.querySelectorAll('.abaout__box-title')

const msgStatus = document.querySelector('.msg-status')

const otderTitle = document.querySelectorAll('.acc-title')


// burgerIcon

burgerBtn.addEventListener('click', () => {

    mobileMenu.classList.toggle('show-menu')
    burger.classList.toggle('none')
    x.classList.toggle('none')
    if(window.scrollY <= 190){
        x.style.color = '#1A1E2E'
    }

})

// navScroll

document.addEventListener('DOMContentLoaded', () => {

    const colorOnNav = () => {
        if(window.scrollY >= 190){
            nav.classList.add('add-color')
            x.style.color = '#ffff'
        } else {
            nav.classList.remove('add-color')
        }
    }

    window.addEventListener('scroll', colorOnNav)

})

// abaoutAcc & bg

abaoutTitle.forEach(el => el.addEventListener('click', () => {

    abaoutTitle.forEach(item => {
        if(item !== el){
            item.nextElementSibling.classList.remove('add-height')
            item.children[1].classList.remove('icon-rotate')
        }
    })

    el.nextElementSibling.classList.toggle('add-height')
    el.children[1].classList.toggle('icon-rotate')

    const abaoutBg = document.querySelector('.abaout__bg')

    if(el.classList.contains('pref')){
        abaoutBg.classList.add('abaout__bg--pref')
        abaoutBg.classList.remove('abaout__bg--elastic')
        abaoutBg.classList.remove('abaout__bg--eko')
        abaoutBg.classList.remove('abaout__bg--fast')

    } else if (el.classList.contains('elastic')){
        abaoutBg.classList.remove('abaout__bg--pref')
        abaoutBg.classList.add('abaout__bg--elastic')
        abaoutBg.classList.remove('abaout__bg--eko')
        abaoutBg.classList.remove('abaout__bg--fast')

    } else if (el.classList.contains('eko')){
        abaoutBg.classList.remove('abaout__bg--pref')
        abaoutBg.classList.remove('abaout__bg--elastic')
        abaoutBg.classList.add('abaout__bg--eko')
        abaoutBg.classList.remove('abaout__bg--fast')

    } else if (el.classList.contains('fast')) {
        abaoutBg.classList.remove('abaout__bg--pref')
        abaoutBg.classList.remove('abaout__bg--elastic')
        abaoutBg.classList.remove('abaout__bg--eko')
        abaoutBg.classList.add('abaout__bg--fast')
    }

})
)

// Mail

if(document.location.search === '?mail_status=sent'){
    msgStatus.classList.add('msg-success')
    msgStatus.textContent = 'Wiadomość wysłana'

    setTimeout(() =>{
        msgStatus.classList.remove('msg-success')
        msgStatus.textContent = ' '
    }, 3000);
} else if (document.location.search === '?mail_status=error'){
    msgStatus.classList.add('msg-error')
    msgStatus.textContent = 'Błąd wysania, spróbuj ponownie'
    setTimeout(() =>{
        msgStatus.classList.remove('msg-error')
        msgStatus.textContent = ' '
    }, 3000);
}

console.log(document.location.search );

// OrderACC

otderTitle.forEach(el => el.addEventListener('click', () =>{
    el.nextElementSibling.classList.toggle('order-add-height')
    el.firstElementChild.classList.toggle('rotate-icon')
}))