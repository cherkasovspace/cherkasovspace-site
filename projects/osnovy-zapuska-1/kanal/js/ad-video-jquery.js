$(function(){
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

	var width1 = 850;
	var height1 = $(".video iframe").height();
	resHeightBlock(".video iframe", width1, height1);
	$(window).resize(function(){
		resHeightBlock(".video iframe", width1, height1);
	});

	var width2 = 350;
	var height2 = $(".videoot iframe").height();
	resHeightBlock(".videoot iframe", width2, height2);
	$(window).resize(function(){
		resHeightBlock(".videoot iframe", width1, height1);
	});
});

