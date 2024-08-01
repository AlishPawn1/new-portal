
jQuery(function ($){

    $(document).ready(function() {
        $(".primary-menu li.menu-dropdown > a").append('<span class="dropdown-btn"><i class="fas fa-chevron-down"></i></span>');
    
        $('.dropdown-btn').on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            var $parentLi = $(this).parent().parent();
            $parentLi.toggleClass('open').siblings().removeClass('open');
            $parentLi.find("ul.sub-menu").first().slideToggle();
            $parentLi.siblings().find("ul.sub-menu").slideUp().parent().removeClass('open');
        });
    
        $(document).on('click', function(event) {
            if (!$(event.target).closest('.menu-dropdown').length) {
                $('.menu-dropdown').removeClass('open');
                $('.sub-menu').slideUp();
            }
        });
    });
    
    $('.primary-menu li').has('ul').addClass('menu-dropdown');

    $(document).ready(function(){
        $('.menu-open').click(function(){
            $('.overlay').toggleClass('active');
            $('.menu-wrap').toggleClass('active');
            $('body').addClass('overflow-hidden')
        });
    
        $('.overlay, .menu-close').click(function(){
            $('.overlay').removeClass('active');
            $('.menu-wrap').removeClass('active');
            $('body').removeClass('overflow-hidden')
        });

        var navHeight = $('.site-header .bottom-header').innerHeight();
        var bottomHeader = document.querySelector('.site-header .bottom-header');
        var bottomHeaderTop = bottomHeader.offsetTop;
        $('.site-header .bottom-header').css('min-height', navHeight + 'px');

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            var viewFooter = $('body').height() - $('footer').outerHeight() - ($(window).height() / 2);
            if($(window).width() < 991){
                viewFooter = $('body').height() - $('footer').outerHeight();
            }
            if (scroll > bottomHeaderTop && scroll < viewFooter) {
                $('.site-header .bottom-header nav').addClass('sticky slideInDown');
                $('.site-header .bottom-header .nav-bar').addClass('active');
            } else {
                $('.site-header .bottom-header nav').removeClass('sticky slideInDown');
                $('.site-header .bottom-header .nav-bar').removeClass('active');
            }
        });

        function cloneTopBar() {
            const windowWidth = $(window).width();
    
            if (windowWidth <= 1024) {
                if (!$('.menu-wrap > .search-box').length) {
                    $('.search-box').clone().appendTo('.menu-wrap');
                }
            } else {
                $('.menu-wrap > .search-box').remove();
            }
        }
        
        cloneTopBar();
        
        $(window).resize(function() {
            cloneTopBar();
        });

        var btn = $('#bottom-to-top');

        $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
            btn.addClass('show');
            } else {
            btn.removeClass('show');
            }
        });

        btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '300');
        });
    });    

});

function initializeSplide(selector, options, extensions) {
    document.querySelectorAll(selector).forEach(element => {
        if (element.querySelector('.splide__track') && element.querySelector('.splide__list')) {
            new Splide(element, options).mount(extensions);
        } else {
            console.error(`Splide initialization failed: Missing required elements in ${selector}`);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    function engtonepNumber(engnumber) {
        const nepaliNumbers = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
        return nepaliNumbers[engnumber];
    }

    function convertToNepaliNumerals(number) {
        return String(number).split('').map(engtonepNumber).join('');
    }

    function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        const nepHours = convertToNepaliNumerals(hours);
        const nepMinutes = convertToNepaliNumerals(String(minutes).padStart(2, '0'));
        const nepSeconds = convertToNepaliNumerals(String(seconds).padStart(2, '0'));
        const currentTime = `${nepHours}:${nepMinutes}:${nepSeconds} ${ampm}`;
        document.getElementById('timeDisplay').textContent = currentTime;
    }

    setInterval(updateTime, 1000);
    updateTime();
});


if (document.querySelector('.banner-slide')) {
    initializeSplide('.banner-slide', {
        perPage: 1,
        pagination: false,
        gap: 10,
        breakpoints: {
            1024: {
                arrows: false,
                pagination: true,
            }
        }
    });
}

if (document.querySelector('.latest-update-slide')) {
    initializeSplide('.latest-update-slide', {
        type: 'loop',
        // perPage: 6,
        autoWidth: true,
        arrows: false,
        pagination: false,
        gap: 24,
        width: 'auto',
        autoScroll: {
            speed: 0.5,
            // pauseOnHover: false,
        },
    }, window.splide.Extensions);
}

// 
function change_english_unicode(){
    var english_nepali = document.getElementById('unicode_english_nepali');
    var nepali_english = document.getElementById('unicode_nepali_english');
    nepali_english.value = english_nepali.value;
}
// function convert_to_nepali(){
//     var array_one = new Array("‘","?","क़","ख़","ग़","ज़","ड़","ढ़","फ़","ॐ","ऽ","।","m'","m]","mfF","mF","०","१","२","३","४","५","६","७","८","९","फ्र","झ","फ","क्त","क्र","ल","ज्ञ्","द्घ","ज्ञ","द्द","द्ध","श्र","रु","द्य","क्ष्","क्ष","त्त","द्म","त्र","ध्र","ङ्घ","ड्ड","द्र","ट्ट","ड्ढ","ठ्ठ","रू","हृ","ङ्ग","त्र","ङ्क","ङ्ख","ट्ठ","द्व","ट्र","ठ्र","ड्र","ढ्र","्र","ड़","ढ़","क्","क","ख्","ख","ग्","ग","घ्","घ","ङ","च्","च","छ","ज्","ज","झ्","झ","ञ्","ञ","ट","ठ","ड","ढ","ण्","ण","त्","त","थ्","थ","द","ध्","ध","न्","न","प्","प","फ्","ब्","ब","भ्","भ","म्","म","य","र","ल्","ल","व्","व","श्","श","ष्","ष","स्","स","ह्","ह","्य","ऑ","ऑ","औ","ओ","आ","अ","ई","इ","ऊ","उ","ऋ","ऐ","ए","ॉ","ू","ु","ं","ा","ृ","्","े","ै","ँ","ी","ः","ो","ौ")
//     var array_two = new Array("…","<","क़","ख़","ग़","ज़","ड़","ढ़","फ़","ç","˜",".","'m","]m","Fmf","Fm",")","!","@","#","$","%","^","&","*","(","k|m","em","km","Qm","qm","n","¡","¢","1","2","4",">","?","B","I","If","Q","ß","q","„","‹","•","›","§","°","¶","¿","Å","Ë","Ì","Í","Î","Ý","å","6«","7«","8«","9«","|","8Þ","9Þ","S","s","V","v","U","u","£","3","ª","R","r","5","H","h","‰","´","~","`","6","7","8","9","0","0f","T","t","Y","y","b","W","w","G","g","K","k","ˆ","A","a","E","e","D","d","o","/","N","n","J","j","Z","z","i","if",":",";","X","x","Ø","cf‘","c‘f","cf}","cf]","cf","c","O{","O","pm","p","C","P]","P","f‘","\"","'","+","f","[","\\","]","}","F","L","M","f]","f}")
// }