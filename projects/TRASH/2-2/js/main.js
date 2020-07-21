
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

     if(document.getElementById("default-select")){
          $('select').niceSelect();
    };




var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 5000,
        easing: 'swing',
        step: function(now) {
            $(this).text(commaSeparateNumber(Math.ceil(now)));
        }
      });
  });
    a = 1;
  }
    function commaSeparateNumber(val)
    {
        while (/(\d+)(\d{3})/.test(val.toString())){
          val = val.toString().replace(/(\d+)(\d{3})/, '$1'+' '+'$2');
        }
        return val;
    }
});



var iosScrollPosition = 0;

function isIOS() {
   // use any implementation to return true if device is iOS
}

function initModalFixIOS() {
    if (isIOS()) {
        // Bootstrap's fade animation does not work with this approach
        // iOS users won't benefit from animation but everything else should work
        jQuery('#formOne').removeClass('fade');
        jQuery('#formTwo').removeClass('fade');
    }
}

function onShowModalFixIOS() {
    if (isIOS()) {
        iosScrollPosition = jQuery(window).scrollTop();
        jQuery('body').css({
            'position': 'relative', // body is now relative
            'top': 0
        });
        jQuery('#formOne').css({
            'position': 'absolute', // modal is now absolute
            'height': '100%',
            'top': iosScrollPosition // modal position correction
        });
        jQuery('#formTwo').css({
            'position': 'absolute', // modal is now absolute
            'height': '100%',
            'top': iosScrollPosition // modal position correction
        });
        jQuery('html, body').css('overflow', 'hidden'); // prevent page scroll
    }
}

function onHideModalFixIOS() {
    // Restore everything
    if (isIOS()) {
        jQuery('body').css({
            'position': '',
            'top': ''
        });
        jQuery('html, body').scrollTop(iosScrollPosition);
        jQuery('html, body').css('overflow', '');
    }
}

jQuery(document).ready(function() {
    initModalFixIOS();
    jQuery('#formOne')
        .on('show.bs.modal', onShowModalFixIOS)
        .on('hide.bs.modal', onHideModalFixIOS);
     jQuery('#formTwo')
        .on('show.bs.modal', onShowModalFixIOS)
        .on('hide.bs.modal', onHideModalFixIOS);
});

    //  Counter Js

    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 1000,
    // });


// $(document).ready(function() {
//     $('.count').each(function() {
//       $(this).prop('Counter',0).animate({
//           Counter: $(this).text()
//       }, {
//           duration: 1500,
//         easing: 'swing',
//         step: function(now) {
//             $(this).text(commaSeparateNumber(Math.ceil(now)));
//         }
//       });
//   });

//     function commaSeparateNumber(val)
//     {
//         while (/(\d+)(\d{3})/.test(val.toString())){
//           val = val.toString().replace(/(\d+)(\d{3})/, '$1'+' '+'$2');
//         }
//         return val;
//     }
// });


// window.onload = function () {

// var chart = new CanvasJS.Chart("chartContainer", {
//   animationEnabled: true,
//   data: [{
//     type: "funnel",
//     indexLabel: "{label} - {y}",
//     toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
//     neckWidth: 20,
//     neckHeight: 0,
//     valueRepresents: "area",
//     dataPoints: [
//       { y: 1118, label: "Interviewed" },
//       { y: 201, label: "Offers Extended" },
//       { y: 14000000, label: "Filled" }
//     ]
//   }]
// });
// calculatePercentage();
// chart.render();

// function calculatePercentage() {
//   var dataPoint = chart.options.data[0].dataPoints;
//   var total = dataPoint[0].y;
//   for(var i = 0; i < dataPoint.length; i++) {
//     if(i == 0) {
//       chart.options.data[0].dataPoints[i].percentage = 100;
//     } else {
//       chart.options.data[0].dataPoints[i].percentage = ((dataPoint[i].y / total) * 100).toFixed(2);
//     }
//   }
// }

// }


              $('#testimonial-slider').owlCarousel({
                items:2,
                dots:true,
                nav:false,
                slideSpeed:1000,
                autoplay: true,
                loop:true,
                autoplayHoverPause: true,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: false
                  },
                  400: {
                    items: 1,
                    nav: false
                  },
                  600: {
                    items: 1,
                    nav: false
                  },
                  1000: {
                    items: 2,
                    nav: false

                  }
                }
              });




$("#owl-demo").owlCarousel({

                loop:true,
                margin: 0,
                items: 1,
                nav:true,
                     navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
                // navigation: true,
                autoplay: false,
                smartSpeed: 1500,
                dots:false,
responsiveClass:true,
    responsive: {
        0:{
            items:1,
            nav:false,
            navText: ["",""],
            dots:true,
        },
        320:{
            items:1,
            nav:false,
            navText: ["",""],
            dots: true
        },
        650:{
            items:1,
            nav:false,
            navText: ["",""],
            dots: true
        },
        800:{
            items:1,
            nav:true,
        },
        1000:{
            items:1,
            nav:true,
        },
        1300:{
            items:1,
            nav:true,
        }
    }
                // navContainer: '#owl-demo',
                // navText: ['<i class="fa fa-angle-left aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                // navigationText: ['<i class="fa fa-angle-left aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],

  });


    $(document).ready(function() {

    $('html, body').hide();

        if (window.location.hash) {

        setTimeout(function() {

        $('html, body').scrollTop(0).show();

        $('html, body').animate({

        scrollTop: $(window.location.hash).offset().top

        }, 1000)

        }, 0);

        }

        else {

        $('html, body').show();

        }

    });





    $('.active-course-carusel').owlCarousel({
        items:3,
        loop:true,
        margin:30,
        dots: true,
        nav:true,
        navText: ["<span class='lnr lnr-arrow-up'></span>",
        "<span class='lnr lnr-arrow-down'></span>"],
            responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            900: {
                items: 3,
            }

        }
    });

        $('.active-tstimonial-carusel').owlCarousel({
        items:3,
        margin:30,
        autoplay:true,
        loop:true,
        dots: true,
            responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            900: {
                items: 3,
            }

        }
    });















 });
