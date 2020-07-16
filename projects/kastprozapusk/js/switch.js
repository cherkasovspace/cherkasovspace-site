$(function(){
	$(".block8 .switching").css("display", "none");
	$(".switch").each(function(i){
		$(this).click(function(){
			if($(this).find('.plus img').attr('src') == 'images/block8_minus.png') {
				$(this).find('.plus img').attr('src', 'images/block8_plus.png');
			}
			else {
				$(this).find('.plus img').attr('src', 'images/block8_minus.png');
			}
			
			$(".switch").not($(this)).find('.plus img').attr('src', 'images/block8_plus.png');
			$(".switch").not($(this)).find('h3').css("color", "#424242");

			$(".switching").not($(".switching").eq(i)).slideUp(400);
			$(".switching").eq(i).slideToggle(800);
		});
	});
});