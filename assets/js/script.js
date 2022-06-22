$(document).ready(function($){

    /**
     --------------------------Search---------------------
     */
    $('body').on('click',(e)=>{
        var width = $(window).width();

        $(".search-btn").click(function(){
          $(".search-btn").addClass("js-search__btn--click");
          $(".header-search").addClass("js-header-search");
          $(".header-search__input").addClass("js-header-search__input");
          $(".tes").addClass("overlay");
          if(width < 1300) {
            $(".header-navbar__item--more").addClass("navbar__item--hide");

          }else {
            
            $(".header-navbar__item--more").addClass("navbar__item--show");
            $(".header-navbar__item--res").addClass("navbar__item--hide");
            
          }
          
        });

      $(".tes").click(function(){
        $(".search-btn").removeClass("js-search__btn--click");
        $(".header-search").removeClass("js-header-search");
        $(".header-search__input").removeClass("js-header-search__input");
        if(width < 1300) {
          $(".header-navbar__item--more").removeClass("navbar__item--hide");

        }else {
          $(".header-navbar__item--more").removeClass("navbar__item--show");
          $(".header-navbar__item--res").removeClass("navbar__item--hide");
        }
        
      });



        

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





    /**
     -----------------Slider--------------------------
     */
    $('.multiple-items').slick({
        nav: false,
        dots:true,
        nextArrow: false,
        arrows:false,
        infinite:true,
        autoplay: true,
        autoplaySpeed :1000,
        slidesToShow: 3,
        slidesToScroll: 2,
        speed:1000,
        dotClass:'slick-dots',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 740,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToScroll: 1,
                slidesToShow: 1,
               
              }
            }
          ]

    });

    
    // const modal = document.querySelector('.js-modal');
    // const menu = document.querySelector('.js-menu');
    // const menuContainer = document.querySelector('.js-modal__body')
    // function showMenu(){
    //     modal.classList.add('open-menu');
    // }
    // function hideMenu(){
    //     modal.classList.remove('open-menu');

    // }
    

    // menu.addEventListener('click',showMenu);
    
    // modal.addEventListener('click',hideMenu);
    
    // menuContainer.addEventListener('click',function(event){
    //     event.stopPropagation();
    // });

});
