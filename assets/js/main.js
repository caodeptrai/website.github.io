
  


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

           
    });

    

    $(document).ready(
      function() {
        

       
        $(window).resize(function(e) {
          console.log(e);
          var width = $(window).width();
          if (width < 1300){
            $(".js-search-btn").click(function(){
              $(this).css({
                "background-color": "var(--black-color)",
                "width": "48px",
                "border-radius": "0 50px 50px 0",
                "border": "none",
                "color": "var(--while-color)"
              })
              $(".header-navbar__item--res").hide();
              
              $(".header-navbar__item--more").hide();
    
              $(".header-search__input").css("width","200px")
    
              $(".header-search").css({
                  "border-radius":"50px",
                  "border": "1px solid var(--border-color)",
              })
            })

            $(".js-app").click(function(){
              $(".header-navbar__item--res").hide();
    
              $(".header-navbar__item--more").show();
    
              $(".header-search__input").css({
                "width":"0px",
                "transition": "0.50s ease"
              })
             
              $(".js-search-btn").css({
                "border": "none",
                "background-color": "transparent",
                "height": "100%",
                "color":"var(--black-color)"
                
              })
    
              $(".header-search").css({
                "height": "36px",
                // "border-radius": "50px",
                "display": "flex",
                "border":"none",
                
            })
            });
          }

          if(width >1300) {
            $(".js-search-btn").click(function(){
          $(this).css({
            "background-color": "var(--black-color)",
            "width": "48px",
            "border-radius": "0 50px 50px 0",
            "border": "none",
            "color": "var(--while-color)"
          })
          $(".header-navbar__item--res").hide();
          
          $(".header-navbar__item--more").show();

          $(".header-search__input").css("width","200px")

          $(".header-search").css({
              "border-radius":"50px",
              "border": "1px solid var(--border-color)",
          })
        });

        $(".js-app").click(function(){
          $(".header-navbar__item--res").show();

          $(".header-navbar__item--more").hide();

          $(".header-search__input").css({
            "width":"0px",
            "transition": "0.50s ease"
          })
         
          $(".js-search-btn").css({
            "border": "none",
            "background-color": "transparent",
            "height": "100%",
            "color":"var(--black-color)"
            
          })

          $(".header-search").css({
            "height": "36px",
            // "border-radius": "50px",
            "display": "flex",
            "border":"none",
            
        })
        });
          }
        });
    
      }
      
     
    );

    
