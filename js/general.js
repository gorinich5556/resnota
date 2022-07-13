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