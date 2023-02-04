document.querySelectorAll('.js-icon').forEach(item  => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        item.classList.toggle('is-active');
    })
})