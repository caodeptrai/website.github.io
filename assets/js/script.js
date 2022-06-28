$(document).ready(function($){

  const width = $(window).width();

   /**
     --------------------------Search---------------------
     */

  $(".search-btn").click(function(){
    $(".search-btn").addClass("js-search__btn--click");
    $(".header-search").addClass("js-header-search");
    $(".header-search__input").addClass("js-header-search__input");
  
    if(width < 1300) {
      $(".header-navbar__list").addClass("navbar__item--hide");

    }else {
      
      $(".header-navbar__item--more").addClass("navbar__item--show");
      $(".header-navbar__item--res").addClass("navbar__item--hide");
      
    }
    
  });

  $('body').on('click',(e)=>{
      var container = $('.header-search');
      if(!container.is(e.target)&&container.has(e.target).length===0){
        $(".search-btn").removeClass("js-search__btn--click");
        $(".header-search").removeClass("js-header-search");
        $(".header-search__input").removeClass("js-header-search__input");

        if(width < 1300) {
          $(".header-navbar__list").removeClass("navbar__item--hide");
          $(".header-navbar__item--more").removeClass("navbar__item--hide");

        }else {
          $(".header-navbar__item--more").removeClass("navbar__item--show");
          $(".header-navbar__item--res").removeClass("navbar__item--hide");
        }
      }
  });

    /*
        -----------------Menu--------------------    
    */ 
    $(".js-menu").click(function(){
        $(".js-modal").addClass("open-menu");
        $(".js-modal__menu").addClass("show-menu")
    });

    $(".js-modal").click(function(){
        $(".js-modal").removeClass("open-menu");
        $(".js-modal__menu").removeClass("show-menu")
    });

    $(".js-modal__menu").click(function(event){
        event.stopPropagation();
    });

/* ---------------------Star---------------*/
    $(".product-item__rating-icon").click(function(){
      $(this).toggleClass("product-item__rating--gold")
  });

    

    /**
     -----------------Slider--------------------------
     */
    const slideContainer = document.querySelector('.slide-container');
    const slideItems = document.querySelectorAll('.my-slide');
    const dotItems = document.querySelectorAll('.navigation-dot__btn');
    let positionX = 0;
    let index = 0;

    // click slider
    for(var i = 0; i< dotItems.length;i++) {
      dotItems[i].addEventListener("click",function(e){
          for(var i  = 0;i < dotItems.length;i++) {
              dotItems[i].classList.remove('active');
          }
          e.target.classList.add("active");
          const sliderIndex = parseInt(e.target.dataset.index);
          index = sliderIndex;
          positionX = -1 * index * 100;
          slideItems.forEach((slide) => {
            
            slide.style = `transform: translateX(${positionX}%)`;

          });
          
          
      })
  };

  
  // Auto Slider

  var comeBack = function() {
      positionX = 0;
      slideItems.forEach((slide) => {
          
      slide.style = `transform: translateX(0%)`;
  
    });
  }

  var forward = function() {
    positionX = -1 * index * 100;
    slideItems.forEach((slide) => {
            
    slide.style = `transform: translateX(${positionX}%)`;
   
    });

   
  };

 
var changSlide = function() {
  if(width >= 768) {
    if (index < slideItems.length - 2){
      forward();
      i++;
    }else {
      comeBack();
    }
  } 
  else if (width >= 425) {
    if (index < slideItems.length - 1){
      forward();
    }else {
      comeBack();
    }
  } 
  else {
    if (index < slideItems.length ){
      forward();
    }
    else {
      comeBack();
    }

}
 index++;
  
};
 
  setInterval(changSlide,1000);

});
