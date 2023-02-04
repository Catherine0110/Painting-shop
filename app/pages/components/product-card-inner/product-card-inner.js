if(document.querySelector('.section-product-card')) {
//slider-section-product-card

$('.js-card-big-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.js-card-small-slider',
    responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false
          }
        }
    ]
  });
  $('.js-card-small-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.js-card-big-slider',
    dots: false,
    arows: false,
    vertical: true,
    // centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            vertical: false,
            centerMode: true,
            // centerPadding: '40px',
            // slidesToShow: 1
          }
        }
    ]
  });

  //accordion-section-product-card

  const accordionBtns = document.querySelectorAll('.js-accordion-card-btn');

  for (let btn of accordionBtns) {
    btn.addEventListener('click', (e) => {
      let accordionContent = btn.nextElementSibling;
      if(accordionContent.classList.contains('is-active')) {
        btn.classList.remove('is-active');
        accordionContent.classList.remove('is-active');
        // accordionContent.style.maxHeight = '0';
      

      } else {
        btn.classList.add('is-active');
        accordionContent.classList.add('is-active');
        // accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        // setTimeout(function() {accordionContent.style.maxHeight = '100%';}, 100 );
      }
    });
  }

  //like-icon-change-section-product-card

  for (let likeIcon of document.querySelectorAll('.js-like-btn')) {
    likeIcon.addEventListener('click', (e) => {
      e.preventDefault();
      const spanLike = likeIcon.querySelector('span');
      
      if(likeIcon.classList.contains('is-active')) {
        likeIcon.classList.remove('is-active');
        spanLike.innerText = "В избранное";
      } else {
        likeIcon.classList.add('is-active');
        spanLike.innerText = "В избранном";
      }
    });
  }

  //poopup-zoom
 


const lightbox = new FsLightbox();
function lightboxImg() {
  let arr = [];
  document.querySelectorAll('.section-product-card__images-big-item-img').forEach( function(element) {
    arr.push(element.getAttribute('src'));
 });
 return arr;
 
}
// lightbox.props.sources = ['assets/images/card-img.jpg', 'assets/images/video-img-main.jpg', 'assets/images/main-bg.jpg'];
lightbox.props.sources = lightboxImg();
// lightbox.props.onInit = () => console.log('Lightbox initialized!');

document.querySelector('.js-zoom-btn ').addEventListener('click', (e) => {
  
  // lightbox.open();
  // const lightbox = new FsLightbox();
    document.querySelectorAll('.section-product-card__images-big-item.slick-slide').forEach((item, i) => {
    
    if(item.classList.contains('slick-current')) {
      
      // fsLightboxInstances['fs-img'].open(i);
      lightbox.open(i);

    }
  });
});



}

