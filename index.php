<?php
if($_GET['name']==""){
	?>
<!DOCTYPE html>
<html>
<head><title>Valentine Wishes</title><meta charset="UTF-8" /></head>
<body>
<script type="text/javascript">
	var name = prompt("Enter the name of the person to whom you want to make Valentine's Day wishes");
	while(name === "null" || name === ""){
		name = prompt("Enter the name of the person to whom you want to make Valentine's Day wishes");
	}
	if(name !== "null" && name !== "" && name.length !== 0){
		window.history.replaceState('', '', updateURLParameter(window.location.href, "name", name));
		location.reload();
	}
	
	function updateURLParameter(url, param, paramVal){
		var TheAnchor = null;
		var newAdditionalURL = "";
		var tempArray = url.split("?");
		var baseURL = tempArray[0];
		var additionalURL = tempArray[1];
		var temp = "";

		if(additionalURL){
			var tmpAnchor = additionalURL.split("#");
			var TheParams = tmpAnchor[0];
				TheAnchor = tmpAnchor[1];
			if(TheAnchor)
				additionalURL = TheParams;

			tempArray = additionalURL.split("&");

			for(var i=0; i<tempArray.length; i++){
				if(tempArray[i].split('=')[0] != param){
					newAdditionalURL += temp + tempArray[i];
					temp = "&";
				}
			}        
		}else{
			var tmpAnchor = baseURL.split("#");
			var TheParams = tmpAnchor[0];
				TheAnchor  = tmpAnchor[1];
			if(TheParams)
				baseURL = TheParams;
		}

		if(TheAnchor)
			paramVal += "#" + TheAnchor;

		var rows_txt = temp + "" + param + "=" + paramVal;
		return baseURL + "?" + newAdditionalURL + rows_txt;
	}
</script>
</body>
</html>
<?php
}else{
	$name = trim($_GET['name']);

?>
<!DOCTYPE html>
<html>
<head>
	<!-- Title -->
	<title>Valentine's Wishes for <?php echo($name);?></title>
	
	<!-- Meta -->
	<meta name="description" content="Valentine Wishes for <?php echo($name);?>" />
	<meta name="author" content="DevDJ" />
	<meta name="copyrights" content="DevDJ" />
	<meta name="revised" content="13.02.2021" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="googlebot" content="all" />
	<meta name="robots" content="noindex, nofollow" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta charset="UTF-8" />
	
	<!-- Style CSS -->
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
</head>
<body>
<div class="animation hidden">
	<h1 class="faded">
		<div class="underlay"></div>
		<span class="step-1">
			<span>All</span>
		</span>
		<span class="step-2">
			<span>the best</span>
		</span>
		<span class="step-3">
			<span>on the</span>
		</span>
		<span class="step-4">
			<span>occasion of</span>
		</span>
		<span class="step-5">
			<span>Valentine's Day</span>
		</span>
		<span class="step-6">
			<span><?php echo($name);?></span>
		</span>
		<span class="step-7">
			<span></span>
		</span>
		<span class="step-8">
			<span>Animation by: DevDJ</span>
		</span>
	</h1>
</div>
<div class="mail-wrapper">
	<div class="container">
		<div class="mail new-message">
			<div class="cover">
				<i class="fas fa-heart"></i>
				<p>Valentine</p>
			</div>
			<div class="letter">
				<h1 class="btn">Click</h1>
			</div>
		</div>
	</div>
</div>
<div class="heart-wrapper hidden">
	<div class="heart">
		<div class="tl"></div>
		<div class="tr"></div>
		<div class="bl"></div>
		<div class="br"></div>
	</div>
	<div class="ring"></div>
	<div class="circles"></div>
</div>
<footer class="footer">
	<div class="footer-container">
		<h1 class="message">Powered by:</h1>
		<a href="//DevDJ.pl" target="_blank" name="DevDJ" title="DevDJ" rel="DevDJ" noopener="DevDJ">
			<img class="author-logo" src="images/author-logo.png">
		</a>
	</div>
</footer>
<canvas id="confetti" class="hidden" width="1" height="1"></canvas>
<audio class="player hidden" src="audio/Ed Sheeran - Perfect Apollaktos (Rudeejay & Da Brozz x Luis Rodriguez Mash-Boot).mp3" type="audio/mp3" controls autoplay="false"></audio>
<!-- JavaScripts -->
<script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/confetti.js"></script>
</body>
</html>
<?php
}
?>