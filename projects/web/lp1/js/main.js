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


$(document).ready(function(){

    $('.counter-value-one').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 4000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });


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




 });
