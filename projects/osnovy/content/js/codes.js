$(function(){
	$(".iz").hover(function(){
		$(this).prepend('<div class="hint"><h4>Скоро будет доступно!</h4><p>Доступ к этому видео придет на ваш емайл.</p></div>');
		$(this).children().eq(0).addClass("animated a_05s opaqueness");

	}, function(){
		$(this).children().eq(0).removeClass('animated a_05s opaqueness').remove();
	});
	if($(window).width() <= 480){
		$(".h3z").hover(function(){
			$(this).append('<div class="hint"><h4>Скоро будет доступно!</h4><p>Доступ к этому видео придет на ваш емайл.</p></div>');
			$(this).children().eq(0).addClass("animated a_05s opaqueness");

		}, function(){
			$(this).children().eq(0).removeClass('animated a_05s opaqueness').remove();
		});
	}

	$(window).resize(function(){
		if($(window).width() > 480){
			$(".h3z").children().eq(0).removeClass('animated a_05s opaqueness').remove();
		}
	});

	console.log("hello");
});