console.log("Hello world!");
main = document.querySelector('.main')
headerTop = document.querySelector('.header__header-top-content')


// BURGER

burger = document.querySelector('.header-body__burger');
burgerMenu = document.querySelector('.header-body__container-burger-menu')
burgerState = false

headerTop.addEventListener('click', function(){
    if (burgerState == true){
        burgerMenu.style.display = 'none'
    }
})

main.addEventListener('click', function(){
    if (burgerState == true){
        burgerMenu.style.display = 'none'
    }
})

burger.addEventListener('click', function(){
    if (burgerState == false){
        burgerMenu.style.display = 'block'
        burgerState = true
    } else{
        burgerMenu.style.display = 'none'
        burgerState = false
        
    }
})

// DROP DOWN FOR CATALOG

catalogButton = document.querySelector('.burger-menu__item-catalog')
catalogState = false
catalog = document.querySelector('.catalog')

catalogButton.addEventListener('click', function(){
    if (catalogState == false){
        catalog.style.display = 'block'
        catalogState = true
    } else{
        catalog.style.display = 'none'
        catalogState = false
    }
})

// BUTTONS FOR MENU OF CATALOG

const buttonMenuHits = document.querySelector('.product__menu-item_hits')
const buttonMenuDiscounts = document.querySelector('.product__menu-item_discounts')
const buttonMenuNovetlly = document.querySelector('.product__menu-item_novelties')

// animated buttons

buttonMenuHits.addEventListener('click', function(){
    buttonMenuHits.classList.add('product__menu-item-active')
    buttonMenuDiscounts.classList.remove('product__menu-item-active')
    buttonMenuNovetlly.classList.remove('product__menu-item-active')
})
buttonMenuDiscounts.addEventListener('click', function(){
    buttonMenuDiscounts.classList.add('product__menu-item-active')
    buttonMenuHits.classList.remove('product__menu-item-active')
    buttonMenuNovetlly.classList.remove('product__menu-item-active')
})
buttonMenuNovetlly.addEventListener('click', function(){
    buttonMenuNovetlly.classList.add('product__menu-item-active')
    buttonMenuDiscounts.classList.remove('product__menu-item-active')
    buttonMenuHits.classList.remove('product__menu-item-active')
})

// SWIPER KATALOG

var sliderWach = 4

function scrollCatalogAdaptive(){
    if (window.innerWidth < 680){
        sliderWach = 1
        console.log(innerWidth)
    }
    if (window.innerWidth < 1300){
        sliderWach = 2
        console.log(innerWidth)
    }
}
scrollCatalogAdaptive()

new Swiper('.product__items', {
    speed: 400,
    spaceBetween: 6,
    slidesPerView: sliderWach,
    navigation: {
        nextEl: '.swiper-button-nexti',
        prevEl: '.swiper-button-previ',
      },
  });

