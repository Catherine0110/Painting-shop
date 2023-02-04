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






const searchBtn = document.querySelector('.js-header-search'),
      burger = document.querySelector('.js-burger'),
      mobileMenu = document.querySelector('.js-mobile-menu');

 

searchBtn.addEventListener('click', (e) => {        
    if(!e.target.closest('.js-search-form')) {
        searchBtn.classList.toggle('is-active'); 
        setTimeout( () => {
            document.getElementById('search').focus();
        }, 200)
    }
});
document.addEventListener('click', (e) => {
    if(!e.target.closest('.js-header-search')) {
        searchBtn.classList.remove('is-active');
    }
});

burger.addEventListener('click', (e) => {
    burger.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
});
$('.js-carousel-main').slick({
    arrows:  false,
    dots: true,
    fade: true,
    adaptiveHeight: true
    // autoplay: true
});
const body = document.querySelector('body');
const modalVideo = document.createElement('div');
modalVideo.classList.add('popup-video');
modalVideo.innerHTML = `
        <div class="popup-video__wrapper">
        <div class="popup-video__inner js-video" data-id="AgpWX18dby4"></div>
        </div>`;
body.append(modalVideo);

function createIframe(clickElement, element) {
    clickElement.addEventListener('click', (e) => {
        element.parentElement.parentElement.classList.add('is-active'); 
        body.style.overflow = 'hidden';
        const iframe = document.createElement('iframe');
        let iframeUrl = `https://www.youtube.com/embed/${element.dataset.id}?autoplay=1&autohide=1`;        
        iframe.setAttribute('src', iframeUrl);
        iframe.setAttribute('frameborder', '0');                
        iframe.setAttribute('allow', 'autoplay');                
        iframe.setAttribute('allowfullscreen', 'allowfullscreen');                

        element.appendChild(iframe);
        element.parentElement.parentElement.addEventListener('click', function() {
            iframe.remove();
            this.classList.remove('is-active');
            body.style.overflow = '';
        });
        
    });  
    
}

if(document.querySelector('.js-tutorial-video')) {
createIframe(document.querySelector('.js-tutorial-video'), document.querySelector('.js-video'));
}
if($('.js-select')) {
$('.js-select').select2();
}
// function masonryGutter(size){
//     $('.js-gallery-masonry').masonry({
//         // options
//         itemSelector: '.gallery__item',
//         columnWidth: '.gallery__item',
//         stamp: '.gallery__fix',  
        
//          gutter: size,
      
//          horizontalOrder: true
//       });
// }

// if(document.querySelector('.js-gallery-masonry') && !document.querySelector('.gallery-no-masonry .js-gallery-masonry')) {
//     if($(window).width() >= 1280) { 
//         masonryGutter(39);
//     } else if($(window).width() <= 1279 && $(window).width() >= 767) {
//         masonryGutter(15);
//     } else {
//         masonryGutter(7);
//     }
// }
let cards = [
    {
        image: "gallery-img-1.jpg",
        title: "Распоряжения о структуре тут длинное название картины ",
        author: "Екатерина Александровна Преображенская",
        size: "Картина,  80x60 см.",
        price: "927 750",
        priceold: "727 750",
    },
    {
        image: "gallery-img-2.jpg",
        title: "Абстракция, Опус J202",
        author: "Соколов Виталий",
        size: "Картина,  80x60 см.",
        price: "927 750",
        priceold: "727 750",
        shield: "Новинка",
        shieldNew: true
    },
    {
        image: "gallery-img-3.jpg",
        title: "Распоряжения о структуре тут длинное название картины ",
        author: "Екатерина Александровна Преображенская",
        size: "Картина,  80x60 см.",
        price: "927 750",
        priceold: "727 750",
        shield: "Новинка",
        shieldNew: true
    },
    {
        image: "gallery-img-4.jpg",
        title: "Распоряжения о структур",
        author: "Говард Херш",
        size: "Картина,  80x60 см.",
        price: "27 750"
    },
    {
        image: "gallery-img-5.jpg",
        title: "Абстракция, Опус J202",
        author: "Соколов Виталий",
        size: "Картина,  80x60 см.",
        price: "27 750",                        
    },
    {
        image: "gallery-img-6.jpg",
        title: "Распоряжения о структуре тут длинное название картины ",
        author: "Екатерина Александровна Преображенская",
        size: "Картина,  80x60 см.",
        price: "927 750",
        priceold: "727 750",
        shield: "Скидка 20%",
        shieldDiscount: true
    },
    {
        image: "gallery-img-7.jpg",
        title: "Растущее действие",
        author: "Рамина Роуз ",
        size: "Картина,  80x60 см.",
        price: "27 750",
        shield: "Скидка 20%",
        shieldDiscount: true
    },
    {
        image: "gallery-img-8.jpg",
        title: "Абстракция, Опус J202",
        author: "Соколов Виталий",
        size: "Картина,  80x60 см.",
        price: "27 750",                        
    },
    {
        image: "gallery-img-9.jpg",
        title: "Абстракция, Опус J202",
        author: "Соколов Виталий",
        size: "Картина,  80x60 см.",
        price: "27 750",                        
    }
]

const innerHtml = innerCard => `
<div class="gallery__item">
<div class="gallery-card"> <a class="gallery-card__img" href="#"><img class="gallery-card__image" src="assets/images/${innerCard.image}" alt=""></a>
  <div class="gallery-card__content"> 
    <div class="gallery-card__group">
      <div class="gallery-card__shields">
        ${innerCard.shieldDiscount ? `<span class="gallery-card__shield gallery-card__shield-discount">${innerCard.shield}</span>`: ''}
        ${innerCard.shieldNew ? `<span class="gallery-card__shield gallery-card__shield-new">${innerCard.shield}</span>`: ''}</div>
      <a class="gallery-card__title" href="#">${innerCard.title}</a><a class="gallery-card__author" href="#">${innerCard.author}</a><span class="gallery-card__size">${innerCard.size}</span>
    </div>
    <div class="gallery-card__group">
      <div class="gallery-card__price">
        <div class="gallery-card__price-block"><span class="gallery-card__price-text">${innerCard.price}<span class="rub">₽</span></span>
        ${innerCard.priceold ? `<span class="gallery-card__price-old">${innerCard.priceold}</span>` : ''}
        </div>
        <div class="gallery-card__price-block"><a class="gallery-card__price-block-favorite js-icon" href="#"> 
            <svg class="icon favorite">       
              <use xlink:href="assets/images/favorite-bg-icon2.svg#like"></use>
            </svg></a><a class="gallery-card__price-block-cart js-icon" href="#"> 
            <svg class="icon cart">       
              <use xlink:href="assets/images/cart-bg-icon.svg#cart"></use>
            </svg></a></div>
      </div>
    </div>
  </div>
</div>
</div>`;  


    
 function render() {    
    const $html = $(cards.map(innerHtml).join(''));
    // gallery.querySelector('.js-gallery-inner').insertAdjacentHTML('beforeend', html); 
    $('.js-gallery-masonry').append($html)
        .masonry( 'appended', $html );

    msnryCreate();    
} 


$('.js-gallery-btn').on('click',  function(e) {    
    e.preventDefault();   
    render(); 
    this.remove();
    
});

function msnryCreate() {
    var msnry = $('.js-gallery-masonry').masonry({
        // options
        itemSelector: '.gallery__item',
        columnWidth: '.gallery__item',
        gutter: '.js-gallery-gutter',
        stamp: '.js-gallery-stamp',
        horizontalOrder: true
    });


    $('.js-gallery-masonry img').on('load', function() {   
        msnry.masonry();
    });
}
msnryCreate();






document.querySelectorAll('.js-icon').forEach(item  => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        item.classList.toggle('is-active');
    })
})
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
// var rellax = new Rellax('.js-rellax', {
//     speed: -2,
//     center: false,
//     wrapper: null,
//     round: true,
//     vertical: true,
//     horizontal: false
//   });
if(document.querySelector('.js-rellax')) {
var rellax = new Rellax('.js-rellax');
}
// select
if($('.js-select-catalog')) {
    $('.js-select-catalog').select2({
        
    });
}
//tabs
if(document.querySelector('.wrapper-catalog')) {
const tabsContent = document.querySelectorAll('.js-tabcontent'),
          tabsParent = document.querySelector('.js-tabheader__parent'),
          tabs = document.querySelectorAll('.js-tabheader__item');

    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.classList.add('hide');
            item.style.display = "none";
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove('is-active');
        });
    }

    function showTabsContent(i = 0) {
        tabsContent[i].classList.add('show');
        // tabsContent[i].classList.remove('hide');
        tabsContent[i].style.display = "block";
        tabs[i].classList.add('is-active');
    }

    hideTabContent();
    showTabsContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains('js-tabheader__item')) {
            tabs.forEach((item, i) => {
                if(target == item) {
                    hideTabContent();
                    showTabsContent(i);
                }
            });
        }
    });
    //accordion-filter-catalog

    function openBTN(btn) {
        setTimeout(function() {
            btn.classList.remove('is-active');
            btn.innerText = 'Развернуть фильтр';
        }, 300 );         
    }
    function closeBtn(btn) {
        btn.classList.add('is-active');
        btn.innerText = 'Свернуть фильтр';        
    }
    const   rollBtns = document.querySelectorAll('.js-roll-btn');

    for (let rollBtn of rollBtns) {

        rollBtn.addEventListener('click', function(event){
            event.preventDefault();
            // rollBtn.classList.toggle('is-active');
                
            var accordionContent = document.querySelector('.section-filter__tabs-inner');
            
            if(accordionContent.classList.contains('is-active') && rollBtn.classList.contains('is-active')){            
                accordionContent.classList.remove('is-active');
                accordionContent.style.maxHeight = null;
                
                openBTN(document.querySelector('.section-filter__tabs-btn-roll')); 
                openBTN(document.querySelector('.section-filter__btn-roll')); 
            } else {
                accordionContent.classList.add('is-active');        
                closeBtn(document.querySelector('.section-filter__tabs-btn-roll'));
                closeBtn(document.querySelector('.section-filter__btn-roll'));
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                setTimeout(function() {accordionContent.style.maxHeight = null;}, 400 );
            }       

        });
    }

//radioBtnsClick
document.querySelectorAll('.js-radio-checked').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(btn.checked && btn.classList.contains('checked')) {
            btn.classList.remove('checked');
        } else {
            btn.classList.add('checked');
        }
    });
});

// searchAuthorDrop


document.querySelector('.section-filter__tabs-main-select').onchange = function(e) {
    let optSelected = this.selectedOptions;
    let selected = Array.from(this.options)
    .filter(option => option.selected)
    .map(option => option.innerText);

    const parentOptions = document.querySelector('.section-filter__options-drop-item');
    const sortArr = (arr) => {
        arr.sort();
    };
    function createOption(options, parent){
        sortArr(options);
        parentOptions.innerHTML = "";
        options.forEach(option => {
            parent.innerHTML += `<span class="section-filter__options-drop-option">${option}</span>`;
           
        });
        document.querySelectorAll('.section-filter__options-drop-option').forEach((optionDrop, i) => {
            optionDrop.addEventListener('click', (e) => {                
                optionDrop.remove();
                optSelected[i].selected = false;
                options.splice(i, 1);
                createOption(options, parent);
                // console.log(options);
                // console.log(optSelected[i]);
                // console.log(optSelected);
            });
        });
    }
    createOption(selected, parentOptions);
    
};



      

//accordion-filterForm-catalog-mobile
document.querySelector('.js-top-mobile').addEventListener('click', function(event){
        
    var accordionContent = this.nextElementSibling;
    
    if(accordionContent.classList.contains('is-active')){            
        accordionContent.classList.remove('is-active');
        
    } else {
        accordionContent.classList.add('is-active');
    }       

});
//titleClick-catalog-mobile

for (var title of document.querySelectorAll('.js-tabheader__item-mobile')) { 
    title.addEventListener('click', function(){
        var accordionContent = this.nextElementSibling;
        accordionContent.classList.toggle('is-active');  
    });
    
}
//inputs


var custom_values = ['S', 'M', 'L', 'XL', 'XXL'];
$(".js-input-size").ionRangeSlider({
    type: "double",
    grid: true,        
    values: custom_values,
    from: custom_values.indexOf('M'),
    to: custom_values.indexOf('XL')
});


var $range = $(".js-input-main"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 0,
    max = 600000,
    from = 0,
    to = 0;

$range.ionRangeSlider({
	skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 23000,
    to: 299000,
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});



}


    
    
    

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


// const body = document.querySelector('body');
const popupForm = document.createElement('div');
popupForm.classList.add('popup-form', 'js-popupform');
popupForm.innerHTML = `
    <div class="popup-form__container js-popupform-container">
    <div class="popup-form__btn js-popupform-btn"></div>
    </div>`;
body.append(popupForm);

//form-authorization

const authorizForm = document.createElement('form');
authorizForm.classList.add('popup-form__authorization-wrapper', 'js-authorization-form','js-form');
authorizForm.innerHTML = `
    <div class="popup-form__authorization-head">
        <span class="popup-form__authorization-head-title">Авторизация</span>
        <div class="popup-form__authorization-head-group">
            <span class="popup-form__authorization-head-text">Еще нет аккаунта?</span>
            <a href="#" class="popup-form__authorization-head-link js-registration-link">Зарегистрироваться</a>
        </div>
    </div>
    <div class="popup-form__authorization-inner">
        <div class="popup-form__authorization-main">
            <form class="popup-form__authorization-main-inputs">
                <label for="email" class="popup-form__authorization-main-inputs-label">
                    <span class="popup-form__authorization-main-inputs-text">E-mail</span>
                    <input class="popup-form__authorization-main-inputs-input input-email js-email" type="email" name="email"  required>
                </label>
                <label class="popup-form__authorization-main-inputs-label">
                    <span class="popup-form__authorization-main-inputs-text">Пароль</span>
                    <input class="popup-form__authorization-main-inputs-input input-password" type="password" name="password" minlength="8" required />
                </label>
                <button class="popup-form__authorization-main-btn" type="submit"><span class="btn-text">Авторизоваться</span></button>
                <div class="popup-form__authorization-main-group">
                    <a href="#" class="popup-form__authorization-main-group-link js-registration-link">Зарегистрироваться</a>
                    <span class="popup-form__authorization-main-group-text">Забыли пароль?</span>
                    <a href="#" class="popup-form__authorization-main-group-link js-resetpassword-link">Восстановить пароль</a>
                </div>
            </form>
        </div>
        <div class="popup-form__authorization-social">
            <span class="popup-form__authorization-social-text">С помощью социальных сетей</span>
            <div class="popup-form__authorization-social-group">
                <a href="#" class="popup-form__authorization-social-group-link">
                <svg viewBox="0 0 511.962 511.962" id="vk" xmlns="http://www.w3.org/2000/svg"><path d="M507.399 370.471c-1.376-2.304-9.888-20.8-50.848-58.816-42.88-39.808-37.12-33.344 14.528-102.176 31.456-41.92 44.032-67.52 40.096-78.464-3.744-10.432-26.88-7.68-26.88-7.68l-76.928.448s-5.696-.768-9.952 1.76c-4.128 2.496-6.784 8.256-6.784 8.256s-12.192 32.448-28.448 60.032c-34.272 58.208-48 61.28-53.6 57.664-13.024-8.416-9.76-33.856-9.76-51.904 0-56.416 8.544-79.936-16.672-86.016-8.384-2.016-14.528-3.36-35.936-3.584-27.456-.288-50.72.096-63.872 6.528-8.768 4.288-15.52 13.856-11.392 14.4 5.088.672 16.608 3.104 22.72 11.424 7.904 10.72 7.616 34.848 7.616 34.848s4.544 66.4-10.592 74.656c-10.4 5.664-24.64-5.888-55.2-58.72-15.648-27.04-27.488-56.96-27.488-56.96s-2.272-5.568-6.336-8.544c-4.928-3.616-11.84-4.768-11.84-4.768l-73.152.448s-10.976.32-15.008 5.088c-3.584 4.256-.288 13.024-.288 13.024s57.28 133.984 122.112 201.536c59.488 61.92 127.008 57.856 127.008 57.856h30.592s9.248-1.024 13.952-6.112c4.352-4.672 4.192-13.44 4.192-13.44s-.608-41.056 18.464-47.104c18.784-5.952 42.912 39.68 68.48 57.248 19.328 13.28 34.016 10.368 34.016 10.368l68.384-.96s35.776-2.208 18.816-30.336z"></path></svg>            
                <span class="popup-form__authorization-social-group-link-text">VKontakte</span>
                </a>
                <a href="#" class="popup-form__authorization-social-group-link">
                <svg viewBox="0 0 96.124 96.123" id="fb" xmlns="http://www.w3.org/2000/svg"><path d="M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037a1.96 1.96 0 0 0-1.96 1.961v15.803a1.96 1.96 0 0 0 1.96 1.96H36.57v39.876a1.96 1.96 0 0 0 1.96 1.96h16.352a1.96 1.96 0 0 0 1.96-1.96V54.287h14.654a1.96 1.96 0 0 0 1.96-1.96l.006-15.803a1.963 1.963 0 0 0-1.961-1.961H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003a1.96 1.96 0 0 0 1.959-1.96V1.98A1.96 1.96 0 0 0 72.089.02z"></path></svg>          
                <span class="popup-form__authorization-social-group-link-text">Facebook</span>
                </a>
                <a href="#" class="popup-form__authorization-social-group-link">
                <svg viewBox="0 0 95.481 95.481" id="ok" xmlns="http://www.w3.org/2000/svg"><path d="M43.041 67.254c-7.402-.772-14.076-2.595-19.79-7.064-.709-.556-1.441-1.092-2.088-1.713-2.501-2.402-2.753-5.153-.774-7.988 1.693-2.426 4.535-3.075 7.489-1.682.572.27 1.117.607 1.639.969 10.649 7.317 25.278 7.519 35.967.329 1.059-.812 2.191-1.474 3.503-1.812 2.551-.655 4.93.282 6.299 2.514 1.564 2.549 1.544 5.037-.383 7.016-2.956 3.034-6.511 5.229-10.461 6.761-3.735 1.448-7.826 2.177-11.875 2.661.611.665.899.992 1.281 1.376 5.498 5.524 11.02 11.025 16.5 16.566 1.867 1.888 2.257 4.229 1.229 6.425-1.124 2.4-3.64 3.979-6.107 3.81-1.563-.108-2.782-.886-3.865-1.977-4.149-4.175-8.376-8.273-12.441-12.527-1.183-1.237-1.752-1.003-2.796.071-4.174 4.297-8.416 8.528-12.683 12.735-1.916 1.889-4.196 2.229-6.418 1.15-2.362-1.145-3.865-3.556-3.749-5.979.08-1.639.886-2.891 2.011-4.014 5.441-5.433 10.867-10.88 16.295-16.322.359-.362.694-.746 1.217-1.305z"></path><path d="M47.55 48.329c-13.205-.045-24.033-10.992-23.956-24.218C23.67 10.739 34.505-.037 47.84 0c13.362.036 24.087 10.967 24.02 24.478-.068 13.199-10.971 23.897-24.31 23.851zm12.001-24.186c-.023-6.567-5.253-11.795-11.807-11.801-6.609-.007-11.886 5.316-11.835 11.943.049 6.542 5.324 11.733 11.896 11.709 6.552-.023 11.768-5.285 11.746-11.851z"></path></svg>        
                <span class="popup-form__authorization-social-group-link-text">Odnoklassniki</span>
                </a>
                <a href="#" class="popup-form__authorization-social-group-link">
                <svg viewBox="0 0 512 512" id="google" xmlns="http://www.w3.org/2000/svg"><path d="M160 224v64h90.528c-13.216 37.248-48.8 64-90.528 64-52.928 0-96-43.072-96-96s43.072-96 96-96c22.944 0 45.024 8.224 62.176 23.168l42.048-48.256C235.424 109.824 198.432 96 160 96 71.776 96 0 167.776 0 256s71.776 160 160 160 160-71.776 160-160v-32H160z"></path></svg>       
                <span class="popup-form__authorization-social-group-link-text">Google +</span>
                </a>
            </div>
        </div>
    </div>
    `;
document.querySelector('.popup-form__container').append(authorizForm);

//form-reg
const registrationForm = document.createElement('form');
registrationForm.classList.add('popup-form__registration-wrapper', 'js-registration-form','js-form');
registrationForm.innerHTML = `
    <div class="popup-form__authorization-head">
        <div class="popup-form__authorization-head-group-item">
            <span class="popup-form__authorization-head-title">Регистрация</span>
            <span class="popup-form__authorization-head-text text-top">Это бесплатно и займет не более 3 минут</span>
        </div>
        <div class="popup-form__authorization-head-group">            
            <div class="popup-form__authorization-head-group-item">
                <span class="popup-form__authorization-head-text">Уже зарегистрированы?</span>
                <a href="#" class="popup-form__authorization-head-link js-authorization-link">Авторизоваться</a>
            </div>
        </div>
    </div>
    <div class="popup-form__authorization-radio">
        <label class="popup-form__authorization-radio-inputs-label">
            <input class="popup-form__authorization-radio-inputs-input input-radio" type="radio" name="radio" checked>
            <span class="popup-form__authorization-radio-inputs-text">Я художник</span>
        </label>
        <label class="popup-form__authorization-radio-inputs-label">
            <input class="popup-form__authorization-radio-inputs-input input-radio" type="radio" name="radio">
            <span class="popup-form__authorization-radio-inputs-text">Я покупатель</span>
        </label>
    </div>
    <div class="popup-form__authorization-inner">
        <div class="popup-form__authorization-main">
                <span class="popup-form__authorization-social-text main-text">С помощью E-mail</span>
                <div class="popup-form__authorization-main-inputs-group">
                    <label class="popup-form__authorization-main-inputs-label label-name">
                        <span class="popup-form__authorization-main-inputs-text">Имя</span>
                        <input class="popup-form__authorization-main-inputs-input input-name js-input-name" type="text" name="name"  required>
                    </label>
                    <label class="popup-form__authorization-main-inputs-label label-name">
                        <span class="popup-form__authorization-main-inputs-text">Фамилия</span>
                        <input class="popup-form__authorization-main-inputs-input input-surname js-input-name" type="text" name="surname"  required>
                    </label>
                </div>
                <label for="email" class="popup-form__authorization-main-inputs-label">
                    <span class="popup-form__authorization-main-inputs-text">E-mail</span>
                    <input class="popup-form__authorization-main-inputs-input input-email js-email" type="email" name="email"  required>
                </label>
                <label class="popup-form__authorization-main-inputs-label label-password">
                    <span class="popup-form__authorization-main-inputs-text">Пароль</span>
                    <input class="popup-form__authorization-main-inputs-input input-password" type="password" name="password" minlength="8"  required />
                </label>
                <label class="popup-form__authorization-main-inputs-label label-checkbox">
                    <input class="popup-form__authorization-main-inputs-input-checkbox" type="checkbox" name="checkbox"  checked required>
                    <span class="popup-form__authorization-main-inputs-text-checkbox">Я согласен с <a href="#">пользовательским соглашением</a></span>
                </label>
                <button class="popup-form__authorization-main-btn" type="submit"><span class="btn-text">зарегистрироваться</span></button>
               
                
            
        </div>
        <div class="popup-form__authorization-social">
            <span class="popup-form__authorization-social-text">С помощью социальных сетей</span>
            <div class="popup-form__authorization-social-group">
                <a href="#" class="popup-form__authorization-social-group-link">
                <svg viewBox="0 0 511.962 511.962" id="vk" xmlns="http://www.w3.org/2000/svg"><path d="M507.399 370.471c-1.376-2.304-9.888-20.8-50.848-58.816-42.88-39.808-37.12-33.344 14.528-102.176 31.456-41.92 44.032-67.52 40.096-78.464-3.744-10.432-26.88-7.68-26.88-7.68l-76.928.448s-5.696-.768-9.952 1.76c-4.128 2.496-6.784 8.256-6.784 8.256s-12.192 32.448-28.448 60.032c-34.272 58.208-48 61.28-53.6 57.664-13.024-8.416-9.76-33.856-9.76-51.904 0-56.416 8.544-79.936-16.672-86.016-8.384-2.016-14.528-3.36-35.936-3.584-27.456-.288-50.72.096-63.872 6.528-8.768 4.288-15.52 13.856-11.392 14.4 5.088.672 16.608 3.104 22.72 11.424 7.904 10.72 7.616 34.848 7.616 34.848s4.544 66.4-10.592 74.656c-10.4 5.664-24.64-5.888-55.2-58.72-15.648-27.04-27.488-56.96-27.488-56.96s-2.272-5.568-6.336-8.544c-4.928-3.616-11.84-4.768-11.84-4.768l-73.152.448s-10.976.32-15.008 5.088c-3.584 4.256-.288 13.024-.288 13.024s57.28 133.984 122.112 201.536c59.488 61.92 127.008 57.856 127.008 57.856h30.592s9.248-1.024 13.952-6.112c4.352-4.672 4.192-13.44 4.192-13.44s-.608-41.056 18.464-47.104c18.784-5.952 42.912 39.68 68.48 57.248 19.328 13.28 34.016 10.368 34.016 10.368l68.384-.96s35.776-2.208 18.816-30.336z"></path></svg>            
                <span class="popup-form__authorization-social-group-link-text">VKontakte</span>
                </a>
                <a href="#" class="popup-form__authorization-social-group-link">
                <svg viewBox="0 0 96.124 96.123" id="fb" xmlns="http://www.w3.org/2000/svg"><path d="M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037a1.96 1.96 0 0 0-1.96 1.961v15.803a1.96 1.96 0 0 0 1.96 1.96H36.57v39.876a1.96 1.96 0 0 0 1.96 1.96h16.352a1.96 1.96 0 0 0 1.96-1.96V54.287h14.654a1.96 1.96 0 0 0 1.96-1.96l.006-15.803a1.963 1.963 0 0 0-1.961-1.961H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003a1.96 1.96 0 0 0 1.959-1.96V1.98A1.96 1.96 0 0 0 72.089.02z"></path></svg>          
                <span class="popup-form__authorization-social-group-link-text">Facebook</span>
                </a>
                <a href="#" class="popup-form__authorization-social-group-link">
                <svg viewBox="0 0 95.481 95.481" id="ok" xmlns="http://www.w3.org/2000/svg"><path d="M43.041 67.254c-7.402-.772-14.076-2.595-19.79-7.064-.709-.556-1.441-1.092-2.088-1.713-2.501-2.402-2.753-5.153-.774-7.988 1.693-2.426 4.535-3.075 7.489-1.682.572.27 1.117.607 1.639.969 10.649 7.317 25.278 7.519 35.967.329 1.059-.812 2.191-1.474 3.503-1.812 2.551-.655 4.93.282 6.299 2.514 1.564 2.549 1.544 5.037-.383 7.016-2.956 3.034-6.511 5.229-10.461 6.761-3.735 1.448-7.826 2.177-11.875 2.661.611.665.899.992 1.281 1.376 5.498 5.524 11.02 11.025 16.5 16.566 1.867 1.888 2.257 4.229 1.229 6.425-1.124 2.4-3.64 3.979-6.107 3.81-1.563-.108-2.782-.886-3.865-1.977-4.149-4.175-8.376-8.273-12.441-12.527-1.183-1.237-1.752-1.003-2.796.071-4.174 4.297-8.416 8.528-12.683 12.735-1.916 1.889-4.196 2.229-6.418 1.15-2.362-1.145-3.865-3.556-3.749-5.979.08-1.639.886-2.891 2.011-4.014 5.441-5.433 10.867-10.88 16.295-16.322.359-.362.694-.746 1.217-1.305z"></path><path d="M47.55 48.329c-13.205-.045-24.033-10.992-23.956-24.218C23.67 10.739 34.505-.037 47.84 0c13.362.036 24.087 10.967 24.02 24.478-.068 13.199-10.971 23.897-24.31 23.851zm12.001-24.186c-.023-6.567-5.253-11.795-11.807-11.801-6.609-.007-11.886 5.316-11.835 11.943.049 6.542 5.324 11.733 11.896 11.709 6.552-.023 11.768-5.285 11.746-11.851z"></path></svg>        
                <span class="popup-form__authorization-social-group-link-text">Odnoklassniki</span>
                </a>
                <a href="#" class="popup-form__authorization-social-group-link">
                <svg viewBox="0 0 512 512" id="google" xmlns="http://www.w3.org/2000/svg"><path d="M160 224v64h90.528c-13.216 37.248-48.8 64-90.528 64-52.928 0-96-43.072-96-96s43.072-96 96-96c22.944 0 45.024 8.224 62.176 23.168l42.048-48.256C235.424 109.824 198.432 96 160 96 71.776 96 0 167.776 0 256s71.776 160 160 160 160-71.776 160-160v-32H160z"></path></svg>       
                <span class="popup-form__authorization-social-group-link-text">Google +</span>
                </a>
            </div>
        </div>
    </div>
    `;
document.querySelector('.popup-form__container').append(registrationForm);

// resetPassword

const resetPasswordForm = document.createElement('form');
resetPasswordForm.classList.add('popup-form__resetpassword-wrapper', 'js-resetpassword-form','js-form');
resetPasswordForm.innerHTML = `
    <div class="popup-form__authorization-head">
        <span class="popup-form__authorization-head-title">Восстановить пароль</span>
    </div>
    <div class="popup-form__authorization-main">
        <label class="label-reset">
            <span class="popup-form__authorization-social-text main-text">Введите свой e-mail</span>
            <input class="popup-form__authorization-main-inputs-input input-email js-email" type="email" name="email" placeholder="E-mail"  required>
        </label>
        <button class="popup-form__authorization-main-btn js-resetpassword-btn" type="submit"><span class="btn-text">Восстановить пароль</span></button>
        <div class="popup-form__authorization-head-group-item">
                <span class="popup-form__authorization-head-text">Вспомнили пароль?</span>
                <a href="#" class="popup-form__authorization-head-link js-authorization-link kl">Авторизоваться</a>
        </div>
    </div>`;

document.querySelector('.popup-form__container').append(resetPasswordForm);

const successForm = document.createElement('form');
successForm.classList.add('popup-form__success-wrapper', 'js-success-form');
successForm.innerHTML = `
    <div class="popup-form__authorization-head">
        <span class="popup-form__authorization-head-title">Успех!</span>
    </div>
    <div class="popup-form__authorization-main">
        <span class="popup-form__authorization-social-text main-text">Мы отправили на ваш e-mail инструкцию 
        по сбросу пароля</span>
        <img src="assets/images/success-checkbox.png" alt="">
    </div>`;

document.querySelector('.popup-form__container').append(successForm);




document.querySelector('.js-tools-user').addEventListener('click', function(e)  {
    document.querySelectorAll('.js-form label.error').forEach(item => {
        item.classList.remove('error');
    });
    document.querySelectorAll('.js-form span.error').forEach(item => {
        item.style ="display: none;";
    });
    document.querySelectorAll('.js-form input').forEach(item => {
        item.value ="";
    });
    popupForm.classList.add('is-active');
    authorizForm.classList.add('is-active');
    body.style.overflow = "hidden";
});
for (let link of document.querySelectorAll('.js-registration-link')) {
    link.addEventListener('click', function(e)  {
        
        authorizForm.classList.remove('is-active');
        document.querySelector('.js-registration-form').classList.add('is-active');    
        
    });
}
for (let link of document.querySelectorAll('.js-authorization-link')) {
    link.addEventListener('click', function(e) {
        authorizForm.classList.add('is-active');
        link.offsetParent.parentElement.classList.remove('is-active');

    });
}

document.querySelector('.js-resetpassword-link').addEventListener('click', function(e)  {
    
    authorizForm.classList.remove('is-active');
    resetPasswordForm.classList.add('is-active');    
    
});
document.querySelector('.js-resetpassword-form').addEventListener('submit', function(e) {
    if(this.querySelector('.js-email[aria-invalid="false"]')) {
    this.classList.remove('is-active');
    successForm.classList.add('is-active');
    }
});


document.querySelector('.js-popupform').addEventListener('click', function(e) {
    if(!e.target.closest('.js-popupform-container') && e.target.closest('.js-popupform') || e.target.closest('.js-popupform-btn')) {
        this.classList.remove('is-active');  
        const forms = this.querySelectorAll('form');
        forms.forEach(item => {
            item.classList.remove('is-active');
        });  
        body.style.overflow = '';    
    }
});

// $.extend( $.validator.messages, {
// 	required: "Это поле необходимо заполнить.",
// 	remote: "Пожалуйста, введите правильное значение.",
// 	email: "Введите правильный e-mail.",
// 	url: "Пожалуйста, введите корректный URL.",
// 	date: "Пожалуйста, введите корректную дату.",
// 	dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
// 	number: "Пожалуйста, введите число.",
// 	digits: "Пожалуйста, вводите только цифры.",
// 	creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
// 	equalTo: "Пожалуйста, введите такое же значение ещё раз.",
// 	extension: "Пожалуйста, выберите файл с правильным расширением.",
// 	maxlength: $.validator.format( "Пожалуйста, введите не больше {0} символов." ),
// 	minlength: $.validator.format( "Пожалуйста, введите не меньше {0} символов." ),
// 	rangelength: $.validator.format( "Пожалуйста, введите значение длиной от {0} до {1} символов." ),
// 	range: $.validator.format( "Пожалуйста, введите число от {0} до {1}." ),
// 	max: $.validator.format( "Пожалуйста, введите число, меньшее или равное {0}." ),
// 	min: $.validator.format( "Пожалуйста, введите число, большее или равное {0}." )
// } );

$('.js-input-name').on('input', function() {
    var value = $(this).val();
    value = value.replace(/[^A-Za-zА-Яа-яЁё\s\-]/ig, '');
    $(this).val(value);
  });


$.validator.addMethod("js-email", function(value, element) {
    return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
}, "Введите корректный email");

$('.js-form').each(function(){
$(this).validate({
    errorPlacement: function(error, element) {
        
            var $parent = element.parent();
            $parent.append(error);
        
    },
    errorElement: 'span',
    highlight: function(element, errorClass) {
      $(element).parent().addClass(errorClass);
      
    },
    unhighlight: function(element, errorClass) {
      $(element).parent().removeClass(errorClass);
    },
    submitHandler: function(form) {
        $(form).trigger("formSubmit");
    } 
  });
});






