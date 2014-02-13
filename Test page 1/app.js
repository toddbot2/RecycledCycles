$(document).ready(function(){
	$('.nav').mouseenter(function(){
		$('li').css('display', 'block').addClass('.nav-bar');
	});
	$('.nav').mouseleave(function(){
		$('li').css('display', 'none').removeClass('.nav-bar');
	});
});