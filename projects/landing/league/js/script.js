(function ($) {
  'use strict';


$(document).ready(function() {
  $('.popup-youtube').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
});


// TABLE CONFIGS
var tableSelector = 'table';
var targetBreakpoint = 767;
var currentVisibleColumn = 1;


// SETUP/SELECT REUSABLE ELEMENTS
var table = document.querySelector( tableSelector );
var allCells = table.querySelectorAll('th, td');
var columnHeaders = table.querySelectorAll('thead th:not(:empty)');
var rowHeaders = table.querySelectorAll('tbody th');


var prevButton = document.createElement('div');
    prevButton.className = "btn-prev";
    prevButton.innerHTML = "<i class='fa fa-angle-double-left'></i><span>Предыдущий тариф</span>";

var nextButton = document.createElement('div');
    nextButton.className = "btn-next";
    nextButton.innerHTML = "<span>Следующий тариф</span><i class='fa fa-angle-double-right'></i>";


function createButtons() {
  nextButton.style.display =  'none';
  prevButton.style.display =  'none';


  table.parentNode.insertBefore(nextButton, table.nextSibling);
  table.parentNode.insertBefore(prevButton, table.nextSibling);


  nextButton.addEventListener('click', function(){
    currentVisibleColumn = currentVisibleColumn + 1 >= columnHeaders.length ? 1 : currentVisibleColumn + 1;
    showCurrentlyVisible();
    document.location+='#variants';return false;
  });

  prevButton.addEventListener('click', function(){
    currentVisibleColumn = currentVisibleColumn - 1 > columnHeaders.length ? 1 : currentVisibleColumn - 1;
    showCurrentlyVisible();
    document.location+='#variants';return false;
  });
}

function showCurrentlyVisible() {
    // Get the Items we're going to show. The :not(:empty) query here is because sometimes you have empty <th>s in <thead>
    var currentlyVisibleColHeader = document.querySelector('thead th:not(:last-child):not(:empty):nth-of-type( '+ currentVisibleColumn +')');
    var currentlyVisibleCells = document.querySelectorAll('tbody td:not(:last-child):nth-of-type(' +currentVisibleColumn+ ')');

    // Hide All The Cells
    for(var i=0;i<allCells.length;i++ ) {
      allCells[i].style.display = 'none';
    }

    // Show Currently Visible Col Header
    currentlyVisibleColHeader.style.display = 'block';

    // Show Currently Visible Cells
    for( var i=0;i<currentlyVisibleCells.length;i++) {
      currentlyVisibleCells[i].style.display = 'block';
    }

    // Show Row Headers
    for( var i=0;i<rowHeaders.length;i++) {
      rowHeaders[i].style.display = 'block';
    }
}

function updateTable() {

  // Get the Table's Width. Might as well go FULL Container Query over here.
  var tableWidth = table.getBoundingClientRect().width;

  // If the table explodes off the viewport or is wider than the target breakpoint
  if ( tableWidth > window.innerWidth || tableWidth < targetBreakpoint || window.screen.width <= 768) {

    if(table.getAttribute('data-comparing') != 'active') {
      // Set the comparison state to "Active"
      table.setAttribute('data-comparing','active');

      // Show Buttons
      nextButton.style.display = 'flex';
      prevButton.style.display =  'flex';


      // Show the currently visible column
      showCurrentlyVisible();

    }

  } else {

    if(table.getAttribute('data-comparing') == 'active') {

      // Turn off comparing
      table.setAttribute('data-comparing','');

      // Hide buttons
      nextButton.style.display =  'none';
      prevButton.style.display =  'none';

      // Remove styles from all cells, ergo, show all the cells
      for( var i=0;i<allCells.length;i++ ) {
        allCells[i].style.display = '';
      }

      // Remove styles from all row headers
      for( var i=0;i<rowHeaders.length;i++) {
        rowHeaders[i].style.display = '';
      }
    }
  }
}

createButtons();
updateTable();
window.addEventListener('resize', updateTable);



/* scroll fix MacOS */
$(function(){
    if (/iPhone|iPod|iPad/.test(navigator.userAgent))
        $('iframe').wrap(function(){
            var $this = $(this);
            return $('<div />').css({
                width: $this.attr('width'),
                height: $this.attr('height'),
                overflow: 'scroll',
                '-webkit-overflow-scrolling': 'touch'
            });
        });
});


// $('.results-section .slider-content').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: true,
//   fade: false,
//   infinite: false,
//   speed: 1000,
//   asNavFor: '.slider-thumb',
//     arrows: true,
//     prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
//     nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
// });
// $('.results-section .slider-thumb').slick({
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   asNavFor: '.slider-content',
//   dots: false,
//   centerMode: false,
//   focusOnSelect: true
// });




  //  Count Up
  // function counter() {
  //   var oTop;
  //   if ($('.counter').length !== 0) {
  //     oTop = $('.counter').offset().top - window.innerHeight;
  //   }
  //   if ($(window).scrollTop() > oTop) {
  //     $('.counter').each(function () {
  //       var $this = $(this),
  //         countTo = $this.attr('data-count');
  //       $({
  //         countNum: $this.text()
  //       }).animate({
  //         countNum: countTo
  //       }, {
  //         duration: 1000,
  //         easing: 'swing',
  //         step: function () {
  //           $this.text(Math.floor(this.countNum));
  //         },
  //         complete: function () {
  //           $this.text(this.countNum);
  //         }
  //       });
  //     });
  //   }
  // }
  // $(window).on('scroll', function () {
  //   counter();
  // });

  // bottom to top
  // $('#top').click(function () {
  //   $('html, body').animate({
  //     scrollTop: 0
  //   }, 'slow');
  //   return false;
  // });
  // bottom to top

  $(document).on('ready', function () {

    // Nice Select
    // $('select').niceSelect();
    // -----------------------------
    //  Client Slider
    // -----------------------------
    // $('.category-slider').slick({
    //   slidesToShow: 8,
    //   infinite: true,
    //   arrows: false,
    //   autoplay: false,
    //   autoplaySpeed: 2000
    // });
    // -----------------------------
    //  Select Box
    // -----------------------------
    // $('.select-box').selectbox();
    // -----------------------------
    //  Video Replace
    // -----------------------------
    // $('.video-box img').click(function () {
    //   var video = '<iframe allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
    //   $(this).replaceWith(video);
    // });
    // -----------------------------
    //  Coupon type Active switch
    // -----------------------------
    // $('.coupon-types li').click(function () {
    //   $('.coupon-types li').not(this).removeClass('active');
    //   $(this).addClass('active');
    // });
    // -----------------------------
    // Datepicker Init
    // -----------------------------
    // $('.input-group.date').datepicker({
    //   format: 'dd/mm/yy'
    // });
    // -----------------------------
    // Datepicker Init
    // -----------------------------

    // -----------------------------
    // Button Active Toggle
    // -----------------------------
    // $('.btn-group > .btn').click(function () {
    //   $(this).find('i').toggleClass('btn-active');
    // });
    // -----------------------------
    // Coupon Type Select
    // -----------------------------
    // $('#online-code').click(function () {
    //   $('.code-input').fadeIn(500);
    // });
    // $('#store-coupon, #online-sale').click(function () {
    //   $('.code-input').fadeOut(500);
    // });
    /***ON-LOAD***/
    jQuery(window).on('load', function () {

    });

  });



  // $('.category-slider').slick({
  //   dots: false,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 1500,
  //   nextArrow: '<i class="fa fa-chevron-right arrow-right"></i>',
  //   prevArrow: '<i class="fa fa-chevron-left arrow-left"></i>',
  //   responsive: [{
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: false
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         arrows:false
  //       }
  //     }

  //   ]
  // });



  // tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

     // bootstrap slider range
  // $('.range-track').slider({});
  // $('.range-track').on('slide', function (slideEvt) {
  //   $('.value').text('$' + slideEvt.value[0] + ' - ' + '$' + slideEvt.value[1]);
  // });





})(jQuery);

/*
 **LOGINOFF
*/
function CheckFormatWork(k){
    let last_check = $('.format-work__active span').data('format_item');
    console.log(last_check);
    if(k > last_check){
        for(let i = last_check; i <= k; i++){
            setTimeout(function(){
                $('.format-work__navig__item span[data-format_item="'+i+'"]').parent('.format-work__navig__item').addClass('format-work__check');
            },50*(i-last_check+1));
        }
    } else {
        for(let i = last_check; i > k; i--){
            setTimeout(function(){
                $('.format-work__navig__item span[data-format_item="'+i+'"]').parent('.format-work__navig__item').removeClass('format-work__check');
            },50*(last_check-i));
        }
    }
}
$(document).ready(function(){
    $('.format-work__navig__item span').click(function(){
        CheckFormatWork($(this).data('format_item'));
        $('.format-work__navig__item').removeClass('format-work__active');
        $(this).parent('.format-work__navig__item').addClass('format-work__active');
        $('.format-work__content').hide();
        $('#format-work__content-'+$(this).data('format_item')).css({'display':'flex'});
    });
    $('.glide__controls__item').click(function(){
        $('.glide__controls__item').removeClass('glide__controls__item--active');
        $(this).addClass('glide__controls__item--active');
    });
});
const glide = new Glide('.glide').mount();
glide.on(['mount.after', 'run'], function () {
    $('.glide__controls__item').removeClass('glide__controls__item--active');
    $('.glide__controls__item').eq(glide.index).addClass('glide__controls__item--active');
});

glide.mount();





// var glideHero = new Glide('.cli-slider', {
//   type: 'carousel',
//   animationDuration: 1000,
//   //autoplay: 4500,
//   autoplay: false,
//   focusAt: '2',
//   startAt: 2,
//   perView: 1,
// });


// glideHero.mount();

var glideHero = new Glide('.cli-slider').mount({
  type: 'carousel',
  animationDuration: 1000,
  //autoplay: 4500,
  autoplay: false,
  perView: 1
});

glideHero.mount();