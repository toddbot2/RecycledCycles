$(document).ready(function(){
	$('.layer-one li').mouseenter(function(){
		$('.layer-two li', this).css('display', 'inline');
	});
	$('.layer-one li').mouseleave(function(){
		$('.layer-two li', this).css('display', 'none');
	});


	$('')
});