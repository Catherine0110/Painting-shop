// $('.js-styles-slider').slick({
//     arrows:  false,
//     // dots: true,
//     fade: true,
//     // autoplay: true
// });


$('.js-styles-slider').slick({        
    //   dots: true,
      arrows:  true,
      infinite: false, 
      variableWidth: false,       
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        
        {
          breakpoint: 1279,
          settings: {
            // infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            // variableWidth: true, 
            // dots: true,
            arrows:  true
          }
        },
        {
          breakpoint: 767,
          settings: {
            variableWidth: false,             
    
            slidesToShow: 1,
            slidesToScroll: 1,
            // dots: true,
            arrows:  true
          }
        }
        
      ]
    });