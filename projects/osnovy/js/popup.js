$(function(){
	function appeared(param1, param2){//функция появления
		$(param1).show();
		$(param2).show();
		$(param1).addClass('animated a_1s opaqueness');
		$(param2).addClass('animated a_1s opaqueness');
	}

	function faded(param1, param2){//функция исчезновения
		$(param1).removeClass('animated a_1s opaqueness');
		$(param2).removeClass('animated a_1s opaqueness');
		$(param1).hide();
		$(param2).hide();
	}

	function resHeightBlock (par, par1, par2) {
		var widthResize =  $(par).width();
		var raznicaWidth = par1 - widthResize;
		var otnoshenie = par1 / raznicaWidth;
		var raznicaHeight = par2 / otnoshenie;
		var heightResize = par2 - raznicaHeight;
		if(heightResize != 0 && heightResize > 0) {
			$(par).height(heightResize);
		}
	}

	function setEqualHeight(columns){
	    var tallestcolumn = 0;
	    columns.each(function(){
	       currentHeight = $(this).height();
	       if(currentHeight > tallestcolumn){
	           tallestcolumn  = currentHeight;
	       }
	   });
	   columns.height(tallestcolumn);
	}

	function frameRes(){
		var wScreen = $(window).width();
		var iframeThis = $(".popup").find("iframe");
		var width = iframeThis.width();// ширина фрейма
		var height = iframeThis.height();// высота фрейма
		var wWidth = $('.wrapperPopup').width();// ширина попап окна
		var pHeight = $('.popup').height();// высота попап окна
		if(wScreen < wWidth){
			$('.wrapperPopup, .popup').css("width", wScreen);
			wWidth = $('.wrapperPopup, .popup').width();
		}
		if(wWidth < width){
			iframeThis.width(wWidth);
			iframeThis.css("height", pHeight);
		}
		resHeightBlock(".popup iframe", width, height);
		$('.popup').height($(".popup").find("iframe").height());
	}

	function imgRes(){
		var imgThis = $(".popup").children("img");
		var width = imgThis.width();
		var height = imgThis.height();
		$(".wrapperPopup, .popup").width(width);
		$(".popup").height(height);

	}
	/*===================================*/

	$('.wrapperPopup, .fon').hide();

	$(".a_form").on('click', function(){
		appeared('.fon', '.forma');
	});

	$('.fon').on('click', function(){
		faded(this, '.forma');
	});
	$('.forma .x').on('click', function(){
		faded('.fon', '.forma');
	});

});