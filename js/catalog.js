'use strict'


/*-------------------------FILTER CATALOG----------------------------------------*/
const filterCatalog = document.querySelector('.main__catalog-menu')
console.log('Hello world!')

const filterItem = document.querySelectorAll('.filter-item')
var filterItemState = false

filterItem.forEach(item => {
    item.addEventListener('click', function(){
        if (filterItemState == false){
            item.classList.add('filter__item_active')
            console.log(`filter catalog active!`)
            filterCatalog.classList.add('main__catalog-menu2')
            filterItemState = true
        } else{
            item.classList.remove('filter__item_active')
            console.log(`filter catalog desable!`)
            filterCatalog.classList.remove('main__catalog-menu2')
            filterItemState = false
        }
    })
});
//------------------------------------------- DELETE CHEKED----------------------------------

const filterDeleteButton = document.querySelector('.filter__sort-delete')
const filterCheckbox = document.querySelectorAll('.filter__sort-checbox')

filterCheckbox.forEach(item => {
    item.addEventListener('click', function(){
        item.checked = true;
    })
})


filterDeleteButton.addEventListener('click', function(){
    filterCheckbox.forEach(item => {
        item.checked = false;
    });

    rangeSliderPrice.noUiSlider.set(0, 5000)
})
//------------------------------------------- DELETE CHEKED2----------------------------------


const filterDeleteButton2 = document.getElementById('delete-filter')


filterCheckbox.forEach(item => {
    var filterCheckboxState = false
    item.addEventListener('click', function(){
        if(filterCheckboxState == false){
            item.checked = true;
            filterCheckboxState = true
        } else{
            item.checked = false;
            filterCheckboxState = false
        }
    })
})


filterDeleteButton2.addEventListener('click', function(){
    filterCheckbox.forEach(item => {
        item.checked = false;
    });


})

/*--------------------------------MODAL FILTER----------------------------------------*/
const buttonFilter = document.querySelector('.menu__button-filter')
const modalFilterContent = document.querySelector('.modal-filter__content')
const modalFilterContentBack = document.querySelector('.modal-filter__back')
const modalFilter = document.querySelector('.main__modal-filter')
const modalFilterFilter = document.querySelector('.modal-filter__filter')
const modalFilterButtonInModal = document.querySelector('.modal-filter__icon-title')
var modalFilterContentState = false

buttonFilter.addEventListener('click', function(){
    if(modalFilterContentState == false){
        modalFilterContent.classList.add('modal-filter__content_active')
        modalFilter.classList.add('modal-filter__content_active')
        modalFilterContentBack.classList.add('modal-filter__back_active')
        modalFilterFilter.classList.add('modal-filter__filter_active')
        modalFilterContentState = true
    } else{
        modalFilterContent.classList.remove('modal-filter__content_active')
        modalFilter.classList.remove('modal-filter__content_active')
        modalFilterContentBack.classList.remove('modal-filter__back_active')
        modalFilterFilter.classList.remove('modal-filter__filter_active')
        modalFilterContentState = false
    }
    modalFilterContentBack.addEventListener('click', function(){
        if(modalFilterContentState == true){
            modalFilterContent.classList.remove('modal-filter__content_active')
            modalFilter.classList.remove('modal-filter__content_active')
            modalFilterFilter.classList.remove('modal-filter__filter_active')
            modalFilterContentBack.classList.remove('modal-filter__back_active')
            modalFilterContentState = false
        }
    })
    modalFilterButtonInModal.addEventListener('click', function(){
        if(modalFilterContentState == true){
            modalFilterContent.classList.remove('modal-filter__content_active')
            modalFilter.classList.remove('modal-filter__content_active')
            modalFilterFilter.classList.remove('modal-filter__filter_active')
            modalFilterContentBack.classList.remove('modal-filter__back_active')
            modalFilterContentState = false
        }
    })
    console.log('10');
    
})
/*------------------------------RANGE SLIDER FOR FILTER--------------------------------------------------------*/

// Or the namespace:

var rangeSliderPrice = document.getElementById('range-slider-price');

var price0 = document.getElementById('min-price0')
var price1 = document.getElementById('max-price1')
const prices = [price0, price1]
var maxPrice = 5000
var minPrice = 1
var price = [maxPrice, minPrice]


if(rangeSliderPrice){
    noUiSlider.create(rangeSliderPrice, {
        start: [minPrice, maxPrice],
        connect: true,
        step: 1,
        range: {
            'min': 1,
            'max': 5000
        }
    });

    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value

        rangeSliderPrice.noUiSlider.set(arr)
    }
    
    filterDeleteButton2.addEventListener('click', function(){
        setRangeSlider(1, 5000)
        rangeSliderPrice.noUiSlider.set(1, 5000)
        price0.value = 1
        price1.value = 5000
        console.log(prices)
    })
    
    prices.forEach((el, index) =>{
        el.addEventListener('change' , (e) =>{
            setRangeSlider(index, e.currentTarget.value)
        })
    })

    rangeSliderPrice.noUiSlider.on('update', function(values, handle){
        prices[handle].value = Math.round(values[handle])
    })
}
/*------------------------------RANGE SLIDER FOR FILTER2--------------------------------------------------------*/

// Or the namespace:
function range(){
    var rangeSliderPrice = document.getElementById('range-slider-price2');
    var price0 = document.getElementById('min-pric0')
    var price1 = document.getElementById('max-pric1')
    const prices = [price0, price1]
    var maxPrice = 5000
    var minPrice = 1


    if(rangeSliderPrice){
        noUiSlider.create(rangeSliderPrice, {
            start: [minPrice, maxPrice],
            connect: true,
            step: 1,
            range: {
                'min': 1,
                'max': 5000
            }
        });

        const setRangeSlider = (i, value) => {
            let arr = [null, null];
            arr[i] = value

            rangeSliderPrice.noUiSlider.set(arr)
        }
        
        filterDeleteButton.addEventListener('click', function(){
            setRangeSlider(1, 5000)
            setRangeSlider(1, 5000)
            rangeSliderPrice.noUiSlider.set(1, 5000)
            price0.value = 1
            price1.value = 5000
            console.log(prices)
        })
        
        prices.forEach((el, index) =>{
            el.addEventListener('change' , (e) =>{
                setRangeSlider(index, e.currentTarget.value)
            })
        })

        rangeSliderPrice.noUiSlider.on('update', function(values, handle){
            prices[handle].value = Math.round(values[handle])
        })
    }
}
range()
/*----------------------------FILTER TABS--------------------------*/

const filterPriceTab = document.querySelector('.filter__price')
const filterPriceIcon = document.querySelector('.filter__price-icon')
var filterPriceTabState = true

const filterFilterTab = document.querySelector('.filter__sort')
const filterFilterIcon = document.querySelector('.filter__sort-header-icon')
var filterFilterTabState = true


// price filters
filterPriceIcon.addEventListener('click', function(){
    if (filterPriceTabState == false){
        filterPriceTab.style.display = 'block'
        filterPriceIcon.classList.remove('icon-tab-deactive')
        filterPriceTabState = true
    } else{
        filterPriceTab.style.display = 'none'
        filterPriceIcon.classList.add('icon-tab-deactive')
        filterPriceTabState = false
    }
    console.log('ee');
})

// general filters
filterFilterIcon.addEventListener('click', function(){
    if (filterFilterTabState == false){
        filterFilterTab.style.display = 'block'
        filterFilterIcon.classList.remove('icon-tab-deactive')
        filterFilterTabState = true
    } else{
        filterFilterTab.style.display = 'none'
        filterFilterIcon.classList.add('icon-tab-deactive')
        filterFilterTabState = false
    }
    console.log('ee');
})
/*-----------------------------MENU DROP LIST-------------------------------*/

const dropListButton = document.querySelector('.menu__button-defult')
const dropList = document.querySelector('.menu__drop-list')
const filter = document.querySelector('.filter')
const buttonText = document.querySelector('.restange-button__title')
const filteLink = document.querySelectorAll('.filter-item-drop-list')
var dropListState = false

dropListButton.addEventListener('click', function(){
    if (dropListState == false){
        dropList.style.display = 'block'
        dropListState = true
    } else{
        dropList.style.display = 'none'
        dropListState = false
    }
})
filter.addEventListener('click', function(){
    if(dropListState == true){
        dropList.style.display = 'none'
        dropListState = false
    }
})
filteLink.forEach(item => 
    item.addEventListener('click' , function(){
        if(dropListState == true){
            dropList.style.display = 'none'
            dropListState = false
            console.log(filteLink); 
            let itemText =  item.textContent
            console.log(itemText)
            buttonText.textContent = itemText
        }
    })
)
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
/*-------------------------------------------LAZY LOADING---------------------------------------------------------------*/
const lazyButton = document.querySelector('.catalog-product__lazy-loading-button')
const MoreLoadingBlock = document.querySelector('.catalog-product__products')  

lazyButton.addEventListener('click', async function(){
    let respons = await fetch('lazy_product.html',{
        method: 'GET'
    });
    console.log(respons);
    
    let result = await respons.text();
    console.log('jjjj');
    MoreLoadingBlock.insertAdjacentHTML('beforeend', result);

    console.log('k');
})


