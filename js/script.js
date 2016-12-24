$(document).ready(function() {


	var images = ["gamutbw.jpg", "gamutbw2.jpg", "gamutbw3.jpg"];

	$("#gamut").css({"background-image": "url(images/" + images[Math.floor(Math.random()*images.length)] +")"});

	$("#gamut").fadeIn("slow");


		var w = window.innerWidth;
	var h = window.innerHeight;

	function shuffle(min, max) {

		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
$('.random').each(function(){
	$(this).css({'top' : shuffle(0,h), 'left' : shuffle(0,w), '-webkit-transform' : 'rotate(' + shuffle(0,w) + 'deg)'});
});


$('.random').mouseenter(function(){
	$(this).css({'top' : shuffle(0,h), 'left' : shuffle(0,w), '-webkit-transform' : 'rotate(' + shuffle(0,w) + 'deg)', '-webkit-transition' : 'all 0.5s'});
});

$("#pframe").click(function() {

$("#pframe").animate({right: "+=200px"}, 50);

$("#pframe").animate({bottom: "+=100px"}, 50);

});

$("#box").click(function() {

$("#currentback").fadeToggle(500);

});

$("#box1").click(function() {

$("#upcomeback").fadeToggle(500);

});



});






