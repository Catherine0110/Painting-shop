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





