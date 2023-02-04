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