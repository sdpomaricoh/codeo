 var typed = new Typed('#typing', {
    strings: ['imagination', 'inspiration', 'talent', 'creativity'],
    typeSpeed: 100,
    backSpeed: 0,
    fadeOut: true,
    loop: false,
    cursorChar: '_'
});


 jQuery(document).ready(function($){

 	$('.toggle').click(function(){
 		$(this).toggleClass('active');
 		$('.menuFullWidth').toggleClass('active');
 	});

 });