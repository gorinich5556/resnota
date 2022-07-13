console.log("Hello world!");
main = document.querySelector('.main')
headerTop = document.querySelector('.header__header-top-content')



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



// SWIPER KATALOG

var sliderWach = 4

function scrollCatalogAdaptive(){
    if (window.innerWidth < 1300 && window.innerWidth > 680){
        sliderWach = 2
        console.log(innerWidth + 'px адаптив 1300')
    }
    if (window.innerWidth < 680){
        sliderWach = 1
        console.log(innerWidth + 'px адаптив 680')
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

// CHANGE CATALOG SWIPER

const SwiperHits = document.querySelector('.product__items_hits')
const SwiperDiscount = document.querySelector('.product__items_discount')
const SwiperNovetlly = document.querySelector('.product__items_novetlly')

function changeCatalogSwiper(SwiperHits, productHitsState, SwiperDiscount, productDiscountState){
    if (productDiscountState == true){
        SwiperDiscount.style.display = 'block'
        SwiperHits.style.display = 'none'
        SwiperNovetlly.style.display = 'none'
    }
    if (productHitsState == true){
        SwiperDiscount.style.display = 'none'
        SwiperHits.style.display = 'block'
        SwiperNovetlly.style.display = 'none'
    }
    if (productNovetllyState == true){
        SwiperDiscount.style.display = 'none'
        SwiperHits.style.display = 'none'
        SwiperNovetlly.style.display = 'block'
    }
}
changeCatalogSwiper(SwiperHits, productHitsState, SwiperDiscount, productDiscountState)
// BUTTONS FOR MENU OF CATALOG

const buttonMenuHits = document.querySelector('.product__menu-item_hits')
const buttonMenuDiscounts = document.querySelector('.product__menu-item_discounts')
const buttonMenuNovetlly = document.querySelector('.product__menu-item_novelties')

var productDiscountState = true
var productHitsState = false
var productNovetllyState = false

// animated default

buttonMenuDiscounts.classList.add('product__menu-item-active')

// animated onclick buttons

buttonMenuHits.addEventListener('click', function(){
    buttonMenuHits.classList.add('product__menu-item-active')
    buttonMenuDiscounts.classList.remove('product__menu-item-active')
    buttonMenuNovetlly.classList.remove('product__menu-item-active')
    productHitsState = true
    productDiscountState = false
    productNovetllyState = false
    changeCatalogSwiper(SwiperHits, productHitsState, SwiperDiscount, productDiscountState)
})
buttonMenuDiscounts.addEventListener('click', function(){
    buttonMenuDiscounts.classList.add('product__menu-item-active')
    buttonMenuHits.classList.remove('product__menu-item-active')
    buttonMenuNovetlly.classList.remove('product__menu-item-active')
    productHitsState = false
    productDiscountState = true
    productNovetllyState = false
    changeCatalogSwiper(SwiperHits, productHitsState, SwiperDiscount, productDiscountState)
})
buttonMenuNovetlly.addEventListener('click', function(){
    buttonMenuNovetlly.classList.add('product__menu-item-active')
    buttonMenuDiscounts.classList.remove('product__menu-item-active')
    buttonMenuHits.classList.remove('product__menu-item-active')
    productHitsState = false
    productDiscountState = false
    productNovetllyState = true
    changeCatalogSwiper(SwiperHits, productHitsState, SwiperDiscount, productDiscountState)
})

