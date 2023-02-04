$('.js-news-slider').slick({        
    //   dots: true,
      arrows:  true,
      infinite: false, 
      variableWidth: false,       
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        
        {
          breakpoint: 1280,
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