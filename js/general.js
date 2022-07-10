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
