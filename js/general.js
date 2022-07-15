// FAVORITE

const favoriteIcon = document.querySelectorAll('.icon-favorite')
var favoriteIconState = false

favoriteIcon.forEach(item => {
    item.addEventListener('click', function(){
        if (favoriteIconState == true){
            item.classList.remove('icon-Star-2')
            item.classList.add('icon-favorite')
            favoriteIconState = false
        }  else{
            item.classList.add('icon-Star-2')
            item.classList.remove('icon-favorite')
            favoriteIconState = true
        }
    })
})
// HEADER BURGER
const main = document.querySelector('.main')
const headerTop = document.querySelector('.header__header-top-content') 
const burger = document.querySelector('.header-body__burger');
const burgerMenu = document.querySelector('.header-body__container-burger-menu')
var burgerState = false

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

/*---------------------------------MENU CHANGE-----------------------------------------*/
const catalogMenuItem = document.querySelectorAll('.selection-menu__item')


catalogMenuItem.forEach(item =>{
    var catalogMenuItemState = false
    item.addEventListener('click', function(){
        if(catalogMenuItemState == false){
            item.classList.add('selection-menu__item_active')
            catalogMenuItemState = true
        }else{
            item.classList.remove('selection-menu__item_active')
            catalogMenuItemState = false
        }
    })
})
// DROP DOWN FOR CATALOG

catalogButton = document.querySelector('.burger-menu__item-catalog')
catalogState = false
catalog = document.querySelector('.catalog')

catalog.style.display = 'none'

catalogButton.addEventListener('click', function(){
    if (catalogState == false){
        catalog.style.display = 'block'
        catalogState = true
    } else{
        catalog.style.display = 'none'
        catalogState = false
    }
})