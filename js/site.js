$(document).ready(function(){

	//Smooth Scrolling Functionality
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					$('.mobile-menu').animate({right: "-90%"},function(){
						$('.mobile-menu').hide();
					});
					return false;
				}
			}
		});
	});

	$('#testimonial-bank').slick({
		infinite: true,
		speed: 300,
		autoplay:true,
		slidesToShow:1,
		variableWidth:false,
		dots: false,
		arrows: true,
		nextArrow: '<div class="slick-next"><img src="images/arrow-right.png"></div>',
		prevArrow: '<div class="slick-prev"><img src="images/arrow-left.png"></div>',
	});

	$('.close').click(function(){
		$('.mobile-menu').animate({right: "-90%"},function(){
			$('.mobile-menu').hide();
		});
	});

	$('.mobile-nav').click(function(){
		$('.mobile-menu').show();
		$('.mobile-menu').animate({right: "0%"});
	});




});