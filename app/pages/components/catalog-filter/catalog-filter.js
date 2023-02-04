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


    
    
    
