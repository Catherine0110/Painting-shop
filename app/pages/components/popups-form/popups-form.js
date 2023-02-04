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



