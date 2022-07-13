/*----------------------------SWIPER PRODUCT IMAGES-------------------------------*/

const swiperImages = document.querySelectorAll('.swiper__image')
const swiperImage = document.querySelector('.swiper__image')
const swiperPagination = document.querySelector('.swiper-pagination')
const ff = document.querySelector('.product-info')
let swiperImg = []

var a = []
swiperImages.forEach(el => {
  a.push(el.getAttribute('src'))
})
console.log(a)
a.forEach(ef => {
  swiperPagination.insertAdjacentHTML('beforeend', `<img src = "${ef}" class = "swiper_pagination_img"> `);
})

swiperImages.forEach(img => {
    swiperImg.push(img.innerHTML)
})

console.log (swiperImg)
console.log (swiperImages)
console.log (swiperImage)

const swiper = new Swiper('.sw', {
    // Optional parameters
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      bulletClass:'swiper_pagination_img',
      bulletActiveClass:'swiper_pagination_img-active',
      renderCustom: function (swiper, current, total) {
        $('.swiper-pagination img').removeClass('swiper_pagination_img-active');
        $('.swiper-pagination img:nth-child('+current+')').addClass('swiper_pagination_img-active');
      }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    initialSlide: 1,

    speed: 700,

    spaceBetween: 100,
  });

/*------------------------------COUNT BUY PRODUCT--------------------------------*/

const buttonMinus = document.querySelector('.product-buy__minus')
const buttonPlus = document.querySelector('.product-buy__plus')
const productCount = document.querySelector('.product-buy__count')
var productCountJs = 1

buttonMinus.addEventListener('click', function(){
  if (productCountJs >= 2){
    productCountJs --
    productCount.innerHTML = productCountJs
  }
})
buttonPlus.addEventListener('click', function(){
  if (productCountJs >= 1){
    productCountJs ++
    productCount.innerHTML = productCountJs
  }
})

/*------------------------------PRODUCT OTHER TAB--------------------------------*/

const deliveryButton = document.querySelector('.product-tabs__deliveri')
const paymentButton = document.querySelector('.product-tabs__payment')
const GuaranteesButton = document.querySelector('.product-tabs__guarantees')
const deliveryTab = document.querySelector('.card-product__tab-info_deliveri')
const paymentTab = document.querySelector('.card-product__tab-info_payment')
const GuaranteesTab = document.querySelector('.card-product__tab-info_guarantees')

deliveryButton.classList.add('product-tabs__tab_active')

deliveryButton.addEventListener('click', function(){
  deliveryTab.style.display = 'block'
  paymentTab.style.display = 'none'
  GuaranteesTab.style.display = 'none'
  deliveryButton.classList.add('product-tabs__tab_active')
  paymentButton.classList.remove('product-tabs__tab_active')
  GuaranteesButton.classList.remove('product-tabs__tab_active')
})
paymentButton.addEventListener('click', function(){
  deliveryTab.style.display = 'none'
  paymentTab.style.display = 'block'
  GuaranteesTab.style.display = 'none'
  deliveryButton.classList.remove('product-tabs__tab_active')
  paymentButton.classList.add('product-tabs__tab_active')
  GuaranteesButton.classList.remove('product-tabs__tab_active')
})
GuaranteesButton.addEventListener('click', function(){
  deliveryTab.style.display = 'none'
  paymentTab.style.display = 'none'
  GuaranteesTab.style.display = 'block'
  deliveryButton.classList.remove('product-tabs__tab_active')
  paymentButton.classList.remove('product-tabs__tab_active')
  GuaranteesButton.classList.add('product-tabs__tab_active')
})