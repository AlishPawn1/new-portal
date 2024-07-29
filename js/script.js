
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
        $('.site-header .bottom-header').css('min-height', navHeight + 'px');

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            var viewFooter = $('body').height() - $('footer').outerHeight() - ($(window).height() / 2);
            if($(window).width() < 991){
                viewFooter = $('body').height() - $('footer').outerHeight();
            }
            if (scroll > 200 && scroll < viewFooter) {
                $('.site-header .bottom-header nav').addClass('sticky slideInDown');
            } else {
                $('.site-header .bottom-header nav').removeClass('sticky slideInDown');
            }
        });

        function cloneTopBar() {
            const windowWidth = $(window).width();
    
            if (windowWidth <= 991) {
                if (!$('.menu-wrap > .search-box').length) {
                    $('.search-box').clone().appendTo('.menu-wrap');
                }
                if (!$('.menu-wrap > .login-register').length) {
                    $('.login-register').clone().appendTo('.menu-wrap');
                }
            } else {
                $('.menu-wrap > .login-register').remove();
                $('.menu-wrap > .search-box').remove();
            }
        }
        
        cloneTopBar();
        
        $(window).resize(function() {
            cloneTopBar();
        });
        
    });

});

function clearSearch() {
    document.getElementById('searchInput').value = '';
}

function initializeSplide(selector, options, extensions) {
    document.querySelectorAll(selector).forEach(element => {
        if (element.querySelector('.splide__track') && element.querySelector('.splide__list')) {
            new Splide(element, options).mount(extensions);
        } else {
            console.error(`Splide initialization failed: Missing required elements in ${selector}`);
        }
    });
}

if (document.querySelector('.banner-slide')) {
    initializeSplide('.banner-slide', {
        perPage: 1,
        pagination: false,
        breakpoints: {
            1024: {
                arrows: false,
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