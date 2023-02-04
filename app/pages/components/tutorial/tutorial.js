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