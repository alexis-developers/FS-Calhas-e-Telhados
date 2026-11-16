(function ($) {
    "use strict";

    /* Replace leftover template copy with the company's actual services. */
    function cleanTemplateCopy() {
        var templateCopy = /lorem ipsum|melhorar a presença online|existem muitas variações|distraído pelo conteúdo legível|conteúdo aqui|fictício padrão da indústria|your name|your email|your phone|your website|email here|message here/i;
        var replacement = 'Conserto de calhas, telhados metálicos e estruturas metálicas com segurança e acabamento profissional.';
        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        var nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach(function (node) {
            var value = node.nodeValue.replace(/\s+/g, ' ').trim();
            if (templateCopy.test(value)) {
                node.nodeValue = replacement;
            }
        });
    }
    cleanTemplateCopy();
    window.addEventListener('load', cleanTemplateCopy);
    window.setTimeout(cleanTemplateCopy, 300);

    /* Send quote forms to the company WhatsApp with the submitted details. */
    document.querySelectorAll('.te-comment-form').forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var data = new FormData(form);
            var name = data.get('name') || '';
            var email = data.get('email') || '';
            var phone = data.get('phone') || '';
            var service = data.get('select-services') || '';
            var message = data.get('message') || data.get('comment') || '';
            var text = 'Olá! Vim pelo site de vocês e preciso de orçamento.\n\n' +
                'Nome: ' + name + '\n' +
                'E-mail: ' + email + '\n' +
                'Telefone: ' + phone + '\n' +
                'Serviço: ' + service + '\n' +
                'Mensagem: ' + message;
            window.open('https://wa.me/5521968752021?text=' + encodeURIComponent(text), '_blank');
        });
    });

    /*
   Jquery Mobile Menu
   ============================*/
    $('#main-menu').meanmenu({
        meanMenuContainer: '.te-mobile-nav-menu',
        meanScreenWidth: "991",
        meanExpand: ['<i class="fal fa-plus"></i>'],
    });

    /*
   Jquery Header Search
   ============================*/
    $('.te-search-btn').on('click', function (e) {
        e.preventDefault();
        $('body').css('overflow', 'hidden');

        $('.te-search-form-wrapper').addClass('te-active');
    });
    $('.te-search-close').on('click', function (e) {
        e.preventDefault();
        $('body').css('overflow', 'auto');
        $('.te-search-form-wrapper').removeClass('te-active');
    });

    window.onclick = function(e){
        if( e.target.matches(".te-search-form-wrapper") ){
            $('.te-search-form-wrapper').removeClass('te-active');
        }
    }
    /*
   Jquery sidebar Toggle
   ============================*/
    $(".te-mobile-menu-toggle-btn").on("click", function () {
        $(".te-menu-sidebar-area").addClass("active");
        $(".te-body-overlay").addClass("active");
    });
    $(".te-menu-sidebar-close-btn").on("click", function () {
        $(".te-menu-sidebar-area").removeClass("active");
        $(".te-body-overlay").removeClass("active");
    });

    /*
   Jquery Body Overlay
   ============================*/
    $(".te-body-overlay").on("click", function () {
        $(".te-menu-sidebar-area").removeClass("active");
        $(".te-body-overlay").removeClass("active");
    });
    /*
    Stikey Js
    ============================*/

    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    if (100 < $(window).scrollTop()) {
        $(".te-header-menu-area.te-sticky-header").addClass("te-sticky_menu");
    }
    if( height  > 1400 ) {
        const nav = $(".te-header-menu-area.te-sticky-header");
        let scrolled = false;
        $(window).on("scroll", function () {
            if (100 < $(window).scrollTop() && !scrolled) {
                nav
                    .addClass("te-sticky_menu animated fadeIn")
                    .animate({"margin-top": "0px"});
                scrolled = true;
            }
            if (100 > $(window).scrollTop() && scrolled) {
                nav.removeClass("te-sticky_menu animated fadeIn").css("margin-top", "0px");
                scrolled = false;
            }
        });
    }

    /*
    Jquery Empty Post Content Hide
    ============================*/
    $('.blog-area .te-post-content p').filter(function() {
        return /\u00A0/.test($(this).text());
    }).hide();


    /*
    Skill Progress Bar Js
    ============================*/
    $('.skill-progressbar').one('inview', function(event, isInView) {
        if (isInView) {
            $('.progress-inner').each(function() {
                $(this).find('.progress-content').animate({
                    width:$(this).attr('data-percentage')
                },2000);

                $(this).find('.progress-number-count').animate(
                    {left:$(this).attr('data-percentage')},
                    {
                        duration: 2000,
                        step: function(now) {
                            let data = Math.round(now);
                            $(this).find('.progress-percent').html(data + '%');
                        }
                    });
            });

        }
    });

    /*
   Slider
   ============================*/
    $(".te-slider-wrapper").slick({
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        draggable: true,
        arrows: true,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 1500,
        prevArrow:
            "<button type='button' class='slider-arrow-btn prev-btn'><i class='fa-solid fa-arrow-left'></i></button>",
        nextArrow:
            "<button type='button' class='slider-arrow-btn next-btn'><i class='fa-solid fa-arrow-right'></i></button>",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false
                },
            },
        ],
    });

    /*
    Portfolio Slider
    ============================*/
    $(".portfolio-slider-wrapper").slick({
        slidesToShow: 4,
        infinite: true,
        autoplay: false,
        draggable: true,
        arrows: true,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 1500,
        responsive: [
            {
                breakpoint: 1449,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    $('#portfolio_slider_prev').on('click', function(e) {
        e.preventDefault();
        $('.slick-prev').trigger('click');
    });
    $('#portfolio_slider_next').on('click', function(e) {
        e.preventDefault();
        $('.slick-next').trigger('click');
    });

    /*
   Info Card Slider
   ============================*/
    $("#info_card_slider_wrapper").slick({
        slidesToShow: 3,
        infinite: true,
        autoplay: true,
        draggable: true,
        arrows: true,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 1500,
        prevArrow:
            "<button type='button' class='te-info-card-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
        nextArrow:
            "<button type='button' class='te-info-card-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });


    /*
   Testimonial Slider
   ============================*/
    $("#testimonial_one").slick({
        slidesToShow: 3,
        infinite: true,
        autoplay: true,
        draggable: true,
        arrows: true,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 1500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    autoplay: true,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    autoplay: true,
                    slidesToShow: 1,
                },
            }
        ],
    });

    $('#testimonial_slider_prev').on('click', function(e) {
        e.preventDefault();
        $('.slick-prev').trigger('click');
    });
    $('#testimonial_slider_next').on('click', function(e) {
        e.preventDefault();
        $('.slick-next').trigger('click');
    });

    /*
    Testimonial Slider Two
    ============================*/
    $("#testimonial_two").slick({
        slidesToShow: 1,
        infinite: true,
        autoplay: false,
        draggable: true,
        arrows: true,
        slidesToScroll: 2,
        loop: true,
        dots: false,
        speed: 1500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    autoplay: true,
                    slidesToShow: 1,
                },
            }
        ],
    });

    /*
    Testimonial Slider Three
    ============================*/
    $("#testimonial_three").slick({
        slidesToShow: 5,
        infinite: true,
        autoplay: true,
        draggable: true,
        variableWidth: true,
        arrows: true,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 1500,
        responsive: [
            {
                breakpoint: 1449,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    variableWidth: false,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    variableWidth: false,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                },
            },
        ],
    });

    $('#testimonial_slider_prev').on('click', function(e) {
        e.preventDefault();
        $('.slick-prev').trigger('click');
    });
    $('#testimonial_slider_next').on('click', function(e) {
        e.preventDefault();
        $('.slick-next').trigger('click');
    });

    // Testimonial Four
    $("#testimonial_four").slick({
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        draggable: true,
        arrows: true,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 1500,
    });

    $('#testimonial_slider_prev').on('click', function(e) {
        e.preventDefault();
        $('.slick-prev').trigger('click');
    });
    $('#testimonial_slider_next').on('click', function(e) {
        e.preventDefault();
        $('.slick-next').trigger('click');
    });


    /*
    Testimonial Slider Three
    ============================*/
    $("#testimonial_five").slick({
        slidesToShow: 5,
        infinite: true,
        autoplay: true,
        draggable: true,
        centerMode: true,
        variableWidth: true,
        arrows: true,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 1500,
        responsive: [
            {
                breakpoint: 1449,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    variableWidth: false,
                    slidesToShow: 2,
                    centerMode: false,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    variableWidth: false,
                    slidesToShow: 2,
                    centerMode: false,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    });

    $('#testimonial_slider_prev').on('click', function(e) {
        e.preventDefault();
        $('.slick-prev').trigger('click');
    });
    $('#testimonial_slider_next').on('click', function(e) {
        e.preventDefault();
        $('.slick-next').trigger('click');
    });

    /*
   Related Portfolio Slider
   ============================*/
    $("#related_portfolio").slick({
        slidesToShow: 3,
        infinite: true,
        autoplay: true,
        draggable: true,
        arrows: true,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 1500,
        prevArrow:
            "<button type='button' class='portfolio-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
        nextArrow:
            "<button type='button' class='portfolio-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });


    /*
   Post Gallery Slider
   ============================*/
    $(".post-gallery").slick({
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        draggable: true,
        arrows: true,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 300,
        prevArrow:
            "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
        nextArrow:
            "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
    });

    /*
   Client Logo Slider
   ============================*/
    $(".client-logo-slider-wrapper").slick({
        slidesToShow: 5,
        infinite: true,
        autoplay: true,
        draggable: true,
        arrows: false,
        slidesToScroll: 1,
        loop: true,
        dots: false,
        speed: 1500,
        rtl: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    });

    /*
    Counter Js
    ============================*/
    $(".counter").counterUp({
        delay: 10,
        time: 1000,
    });

    /*
   Magnific Popup
   ============================*/
    $(".video-play").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });

    /*
    Jquery Wow Js
    ============================*/
    if($('.wow').length){
        var wow = new WOW(
            {
                boxClass:     'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset:       0,          // distance to the element when triggering the animation (default is 0)
                mobile:       false,       // trigger animations on mobile devices (default is true)
                live:         true       // act on asynchronously loaded content (default is true)
            }
        );
        wow.init();
    }

    /*
   Jquery Tilt Js
   ============================*/
    $('.tilt-animate').tilt({
        maxTilt: 12,
        perspective: 1500,
    })


    /*
    Portfolio Isotope Js
    ============================*/
    $('.te-portfolio-filter').on( 'click', 'li', function() {
        $("li").removeClass("active");
        $(this).addClass("active");
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    var $grid = $('.te-portfolio-isotope-wrapper').isotope({
        itemSelector: '.te-single-isotop',
        percentPosition: true,
        masonry: {
            columnWidth: '.te-single-isotop'
        }
    });
    $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
    });
    /*
    Preeloader
    ============================*/
    $(window).on("load", function () {
        $("#preloader").fadeOut();
        $("#preloader-status").delay(200).fadeOut("slow");
        $("body").delay(200).css({"overflow-x": "hidden"});
    });
})(jQuery);
