<?php
include "../function.php";
include "../set_pswrd.php";
include "cook_cast.php";
?>
<!DOCTYPE HTML>
<html>
	<head>
		<?php
		include_once "../head.php";
		?>
		<!-- Put this script tag to the <head> of your page -->
		<script type="text/javascript" src="//vk.com/js/api/openapi.js?121"></script>

		<script type="text/javascript">
		  VK.init({apiId: 5417628, onlyWidgets: true});
		</script>
		<title>Трансляция</title>
	</head>
	<body>

		<div id="wrapper">
			<?php
			include_once "../header.php";
			include_once "../trans.php";
			?>
		</div>
	</body>
</html>