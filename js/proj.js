jQuery(document).ready(function($){

$('.lightbox:not(.f-gallery)').magnificPopup({
    type: 'image',
    removalDelay: 300,
    gallery: {
    enabled: true
    },

    mainClass: 'mfp-fade',
    image: {
        titleSrc: 'title',
        gallery: {
            enabled: true
        },
    },

    iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '<div class="mfp-title mfp-bottom-iframe-title"></div>'+
              '</div>',

        patterns: {
            youtube: {
              index: 'youtube.com/',

              id: 'v=',
              src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
            },
            vimeo: {
              index: 'vimeo.com/',
              id: '/',
              src: '//player.vimeo.com/video/%id%?autoplay=1'
            },
            gmaps: {
              index: '//maps.google.',
              src: '%id%&output=embed'
            }
        },

        srcAction: 'iframe_src',
    },

    callbacks: {
        markupParse: function(template, values, item) {
         values.title = item.el.attr('title');
        }
    },
});

$('.gallery').each(function() {
    $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
        enabled:true
        }
    });
});

function customAjaxScroll() {
    var windowWidth = $(window).width();
    if (windowWidth > 991) {
        // Custom Ajax Page Scroll
        $("#ajax-page").mCustomScrollbar({
            scrollInertia: 8,
            documentTouchScroll: false
        });
    } else {
        $("#ajax-page").mCustomScrollbar('destroy');
    }
}

    // Ajax Loaded Page Scroll
    customAjaxScroll();

    $('.portfolio-page-carousel').owlCarousel({
        smartSpeed:1200,
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        navText: false,
        margin: 10
    });

});

jQuery(window).on('resize', function() {
    customAjaxScroll();
});