$('.js-popular-filters-slider').slick({        
    //   dots: true,
      arrows:  true,
      infinite: false, 
      variableWidth: false,       
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        
        {
          breakpoint: 1279,
          settings: {
            // infinite: true,
            slidesToShow: 4,
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