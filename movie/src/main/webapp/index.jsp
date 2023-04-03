<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>영화의 모든 것 CINEVERSE</title>
	<link href="/movie/css/index.css" rel="stylesheet">
</head>
<body>
	<%@include file="/header.jsp" %>
	
	<div class="wrap">
		<div class="boxoffice">
			<div onclick="slidermove( 205 )" class="sliderleftbtn"> < </div>
			<div onclick="slidermove( -205 )" class="sliderrightbtn"> > </div>
			<div class="boxoffice_title">박스오피스</div>
			<div class="boxofficeSlider">
				<div class="boxofficeinfobox">				
				</div> <!-- boxofficeinfobox end -->
			</div>
		</div>  
	</div>
	    
	<script src="/movie/js/index.js" type="text/javascript"></script>
</body>
</html>




<!-- <div class="onemovie"> -->
<!-- 	<div class="mposter"> -->
<!-- 		<img alt="" src="/movie/img/indextest/poster/poster1.jpg"> -->
<!-- 		<div class="mrank">1</div> -->
<!-- 	</div>    -->
<!-- 	<div class="moviename">스즈메의 문단속</div> -->
	
<!-- 	<div class="movieinfo"> -->
<!-- 		<div class="mrate">예매율 <span class="mrateno">43.4</span>%</div> -->
<!-- 		<div> -->
<!-- 			<span><i class="fa-solid fa-star"></i> <span class="moviegrade">9.3</span> </span> -->
<!-- 		</div> -->
<!-- 	</div> -->
<!-- </div> -->