jQuery(document).ready(function($) {

	//=================================== animated anchors =================================//
	
	$('a.anchor').click(function() {
		
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

			var $target = $(this.hash);

			$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

			if ($target.length) {

				var targetOffset = $target.offset().top-70;

				$('html,body').animate({
					scrollTop : targetOffset
				}, 500);

				return false;

			}

		}

	});
	

});//Конец ready



