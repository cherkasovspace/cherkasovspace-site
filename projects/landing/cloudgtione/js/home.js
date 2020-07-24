jQuery(document).ready(function($){
    $('.tera-pods__video__item').click(function(){
        $('.tera-pods__video_big>div').detach().appendTo('.tera-pods__video_small');
        $(this).detach().appendTo('.tera-pods__video_big');
    });
    $('.reviews_carousel').owlCarousel({
        items:             1,
        itemsDesktop:      false,
        itemsDesktopSmall: false,
        itemsTablet:       false,
        itemsMobile:       false,
        nav: true,
        navText: '',
        loop: true,
    });
});
var arr_soti = [];
$( ".hex_box_soti" ).each(function( index ) {
    arr_soti[index] = $(this).html();
});
var global_width = $(window).width();
function soti_768(arr_soti){
    var res_768 = '';
    for (i = 0; i < 9; i++) {
        if( i == 0 || i == 1 || i == 3 || i == 4 || i == 6 || i == 7 ) {
            res_768 += "<div class='row'>";
        }
        res_768 += "<div class='hex_box hex_box_soti'>"+arr_soti[i]+"</div>";
        if( i == 0 || i == 2 || i == 3 || i == 5 || i == 6 || i == 8 ) {
            res_768 += "</div>";
        }
    }
    $('.advantages__plitka').html(res_768);
}
function soti_980(arr_soti){
    var res_980 = '';
    for (i = 0; i < 9; i++) {
        if( i == 0 || i == 1 || i == 3 || i == 6 || i == 8 ) {
            res_980 += "<div class='row'>";
        }
        res_980 += "<div class='hex_box hex_box_soti'>"+arr_soti[i]+"</div>";
        if( i == 0 || i == 2 || i == 5 || i == 7 || i == 8 ) {
            res_980 += "</div>";
        }
    }
    $('.advantages__plitka').html(res_980);
}
function soti_320(arr_soti){
    var res_320 = '';
    for (i = 0; i < 9; i++) {
        res_320 += "<div class='row'><div class='hex_box hex_box_soti'>"+arr_soti[i]+"</div></div>";
    }
    $('.advantages__plitka').html(res_320);
}
if( $(window).width() > 767 && $(window).width() < 980 ) {
    soti_768(arr_soti);
}
if( $(window).width() > 979 ) {
    soti_980(arr_soti);
}
if( $(window).width() < 768 ) {
    soti_320(arr_soti);
}
$(window).resize(function(){
    if( $(window).width() > 767 && $(window).width() < 980 && ( global_width < 768 || global_width > 979 ) ) {
        soti_768(arr_soti);
        global_width = $(window).width();
    }
    if( $(window).width() > 979 && global_width < 980 ) {
        soti_980(arr_soti);
        global_width = $(window).width();
    }
    if( $(window).width() < 768 && global_width > 767 ) {
        soti_320(arr_soti);
        global_width = $(window).width();
    }
});

jQuery(document).ready(function($){
$( ".header__menu_block" ).click(function() {
  $( ".header__menu_open" ).toggle();
});
});

jQuery(document).ready(function($){
$( ".tera-pods__play" ).click(function() {
  $( ".overlay" ).hide();
  $('#video')[0].play();
  
  $('#video').on('ended',function(){
	$( ".overlay" ).show();
    });  
  
});
});

jQuery(document).ready(function($){
$( ".tera-pods__mobile" ).click(function() {
  $( ".overlay" ).hide();
  $('#video')[0].play();
  
  $('#video').on('ended',function(){
	$( ".overlay" ).show();
    });  
  
});
});





