$(document).ready(function($){

    $('body').on('click',(e)=>{

      /**
     --------------------------Search---------------------
     */
        var width = $(window).width();

        $(".search-btn").click(function(){
          $(".search-btn").addClass("js-search__btn--click");
          $(".header-search").addClass("js-header-search");
          $(".header-search__input").addClass("js-header-search__input");
          $(".tes").addClass("overlay");
          if(width < 1300) {
            $(".header-navbar__list").addClass("navbar__item--hide");

          }else {
            
            $(".header-navbar__item--more").addClass("navbar__item--show");
            $(".header-navbar__item--res").addClass("navbar__item--hide");
            
          }
          
        });

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
     var slides = document.querySelectorAll('.my-slide ');
    var btns = document.querySelectorAll('.navigation-dot__btn');
    let currentSlide = 1;

    // Slider click dots
    var manualNav = function(manual){
      slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
          btn.classList.remove('active');
        });
      });

      slides[manual].classList.add('active');
      btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    // Slider autoplay
    var repeat = function(activeClass){
      let active = document.getElementsByClassName('active');
      let i = 1;

      var repeater = () => {
        setTimeout(function(){
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
          });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i){
          i = 0;
        }
        if(i >= slides.length){
          return;
        }
        repeater();
      }, 3000);
      }
      repeater();
    }
    repeat();
   

});
