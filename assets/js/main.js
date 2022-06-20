
  

    const modal = document.querySelector('.js-modal')
    const menu = document.querySelector('.js-menu')
    const menuContainer = document.querySelector('.js-modal__body')
    function showMenu(){
        modal.classList.add('open-menu')
    }
    function hideMenu(){
        modal.classList.remove('open-menu')

    }

    menu.addEventListener('click',showMenu)
    
    modal.addEventListener('click',hideMenu)
    
    menuContainer.addEventListener('click',function(event){
        event.stopPropagation()
    })


    // Action star
    // const $1 = document.querySelector.bind(document)
    // let starElement = $1(".product-item__rating");
    // starElement.onclick = function(){
    //         if(this.classList.contains("product-item__rating--gold")){
    //             this.classList.remove("product-item__rating--gold") 
    //         }
    //         else {
    //             this.classList.add("product-item__rating--gold") 
    //         }
    // }

    $(document).ready(function(){
            $('.multiple-items').slick({
                nav: false,
                dots:true,
                nextArrow: false,
                arrows:false,
                // autoplay: true,
                autoplaySpeed :1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                // infinite:true,
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

           
    });

