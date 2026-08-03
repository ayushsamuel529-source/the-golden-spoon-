// ======================================
// MENU DATA
// ======================================

const menuData = [

{
    id:"breakfast",
    title:"Breakfast Menu",
    subtitle:"The Golden Spoon",
    description:"Freshly prepared breakfast made with premium ingredients to start your day perfectly.",

    food:[
        "food/breakfast-banner1.jpeg",
        "food/breakfast-banner2.jpeg",
        "food/breakfast-banner3.jpeg",
        "food/breakfast-banner4.jpeg"
    ]
},

{
    id:"lunch",
    title:"Lunch Menu",
    subtitle:"The Golden Spoon",
    description:"Enjoy our premium lunch selection including our famous Golden Truffle Steak Platter.",

    food:[
        "food/lunch-banner1.jpg",
        "food/lunch-banner2.jpeg",
        "food/lunch-banner3.jpeg",
        "food/lunch-banner4.jpg"
    ]
},

{
    id:"dinner",
    title:"Dinner Menu",
    subtitle:"The Golden Spoon",
    description:"Luxury dinner experience prepared by our master chefs with the finest ingredients.",

    food:[
        "food/dinner-banner1.jpeg",
        "food/dinner-banner2.jpeg",
        "food/dinner-banner3.jpeg",
        
    ]
},

{
    id:"snacks",
    title:"Snacks Menu",
    subtitle:"The Golden Spoon",
    description:"Crispy, cheesy and delicious snacks for every craving.",

    food:[
        "food/snacks-banner1.jpg",
        "food/snacks-banner2.jpg",
        "food/snacks-banner3.jpg",
        
    ]
},

{
    id:"sweets",
    title:"Desserts Menu",
    subtitle:"The Golden Spoon",
    description:"Sweet handcrafted desserts made with premium chocolate and fresh cream.",

    food:[
        "food/sweets-banner1.jpg",
        "food/sweets-banner2.jpg",
        "food/sweets-banner3.jpg",
        
    ]
},

{
    id:"drinks",
    title:"Drinks Menu",
    subtitle:"The Golden Spoon",
    description:"Refreshing beverages and signature mocktails to complete your meal.",

    food:[
        "food/drinks-banner1.jpg",
        "food/drinks-banner2.jpg",
        "food/drinks-banner3.jpg",
        
    ]
}

];

// ======================================
// VARIABLES
// ======================================

let currentIndex = 0;

// Current image inside selected category
let currentBannerIndex = 0;

// Auto slider
let autoSlide;

const bannerImage = document.getElementById("bannerImage");

const bannerTitle = document.getElementById("bannerTitle");

const bannerSubTitle = document.getElementById("bannerSubTitle");

const bannerDescription = document.getElementById("bannerDescription");

const categories = document.querySelectorAll(".menu-content");

const buttons = document.querySelectorAll(".category-btn");
function updateBanner(){

    bannerImage.style.opacity="0";

    setTimeout(function(){

        bannerImage.src =
menuData[currentIndex].food[currentBannerIndex];

        bannerTitle.textContent =
        menuData[currentIndex].title;

        bannerSubTitle.textContent =
        menuData[currentIndex].subtitle;

        bannerDescription.textContent =
        menuData[currentIndex].description;

        bannerImage.style.opacity="1";
        bannerImage.classList.remove("show");
void bannerImage.offsetWidth;
bannerImage.classList.add("show");

    },250);

}
function changeCategory(category,index,button){

    currentIndex = index;

    currentBannerIndex = 0;

    categories.forEach(function(item){

        item.classList.remove("active");

    });

    buttons.forEach(function(btn){

        btn.classList.remove("active");

    });

    document
    .getElementById(category)
    .classList
    .add("active");

    button.classList.add("active");

    updateBanner();

}
  


// ======================================
// NEXT BANNER
// ======================================
function nextBanner(){

    currentBannerIndex++;

    if(currentBannerIndex >= menuData[currentIndex].food.length){

        currentBannerIndex = 0;

    }

    updateBanner();

}



function previousBanner(){

    currentBannerIndex--;

    if(currentBannerIndex < 0){
currentBannerIndex =
menuData[currentIndex].food.length - 1;

    }

    updateBanner();

}


// ======================================
// AUTO SLIDER
// ======================================

function startAutoSlide(){

    clearInterval(autoSlide);

    autoSlide = setInterval(function(){

        nextBanner();

    },3000);

}


// ======================================
// STOP AUTO SLIDER WHEN HOVER
// ======================================

const banner = document.querySelector(".menu-banner");

banner.addEventListener("mouseenter",function(){

    clearInterval(autoSlide);

});

banner.addEventListener("mouseleave",function(){

    startAutoSlide();

});
// ======================================
// PAGE LOAD
// ======================================

window.addEventListener("load",function(){

    buttons[0].classList.add("active");

    categories[0].classList.add("active");

    updateBanner();

    startAutoSlide();

});
   


// ======================================
// RESET AUTO SLIDER AFTER BUTTON CLICK
// ======================================

buttons.forEach(function(button,index){

    button.addEventListener("click",function(){

        currentIndex = index;

        currentBannerIndex = 0;

        updateBanner();

        startAutoSlide();

    });

});



// ======================================
// KEYBOARD SUPPORT
// ======================================

document.addEventListener("keydown",function(event){

    if(event.key==="ArrowRight"){

        nextBanner();

    }

    if(event.key==="ArrowLeft"){

        previousBanner();

    }

});
// ======================================



// ======================================
// END OF JAVASCRIPT
// ======================================