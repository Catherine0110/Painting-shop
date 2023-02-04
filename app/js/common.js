$('.js-gallery-slider').slick({        
    //   dots: true,
      arrows:  true,
      infinite: false, 
      variableWidth: false,       
      slidesToShow: 4,
      slidesToScroll: 1,      
    //   adaptiveHeight: true,
      responsive: [
        
        {
          breakpoint: 1280,
          settings: {
            // infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
            // centerMode: true, 
            // dots: true,
            arrows:  true
          }
        },
        {
          breakpoint: 767,
          settings: {
            variableWidth: false,             
    
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            // dots: true,
            arrows:  true
          }
        }
        
      ]
    });






@@include('../pages/components/header/header.js')
@@include('../pages/components/main/main.js')
@@include('../pages/components/tutorial/tutorial.js')
@@include('../pages/components/select/select.js')
@@include('../pages/components/gallery/gallery.js')
@@include('../pages/components/gallery-card/gallery-card.js')
@@include('../pages/components/main-styles/main-styles.js')
@@include('../pages/components/news/news.js')
@@include('../pages/components/parallax/parallax.js')
@@include('../pages/components/catalog-filter/catalog-filter.js')
@@include('../pages/components/popular-filters/popular-filters.js')
@@include('../pages/components/product-card-inner/product-card-inner.js')
@@include('../pages/components/popups-form/popups-form.js')


