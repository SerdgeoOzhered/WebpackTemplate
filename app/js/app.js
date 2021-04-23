 

$(document).ready(function() {
	const swiper = new Swiper('.swiper-container', {
		// Optional parameters
		direction: 'vertical',
		loop: true,
	  
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.slider__next',
		  prevEl: '.slider__prev',
		},
	  
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		},
	  });
})