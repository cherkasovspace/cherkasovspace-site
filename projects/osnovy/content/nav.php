												<!-- block1 (Навикация) -->
			<div class="block1">
				<div class="content">
					<div class="nav">
						<?php
							$strCook = strip_tags(trim($_COOKIE["strQuery"]));
							switch($strCook){
								case "3web":
									include "nav/nav3.php"; break;
								case "2dokrutka":
									include "nav/nav2.php"; break;
								case "1opros":
									include "nav/nav1.php"; break;
								case "content":
									include "nav/nav1.php"; break;
							}
						?>
					</div>
				</div>
			</div>
												<!-- Закончился block1 (Навикация) -->
