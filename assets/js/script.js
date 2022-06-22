$(document).ready(function($){

    /**
     * lam cho thang search 
     * khi click vao no thi chay o day
     */
    $('body').on('click',(e)=>{
        var width = $(window).width();
        if (width < 1300){
            $(".search-btn").click(function(){
                $(".search-btn").addClass("js-search__btn--click");
                $(".header-navbar__item--more").addClass("navbar__item--hide");
                $(".header-search").addClass("js-header-search");
                $(".header-search__input").addClass("js-header-search__input");
            })
            $(".js-app").click(function(){
                
            })
        }else{
           
        }

    });

    /**
     * 
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
    const modal = document.querySelector('.js-modal');
    const menu = document.querySelector('.js-menu');
    const menuContainer = document.querySelector('.js-modal__body')
    function showMenu(){
        modal.classList.add('open-menu');
    }
    function hideMenu(){
        modal.classList.remove('open-menu');

    }
    

    menu.addEventListener('click',showMenu);
    
    modal.addEventListener('click',hideMenu);
    
    menuContainer.addEventListener('click',function(event){
        event.stopPropagation();
    });

});
