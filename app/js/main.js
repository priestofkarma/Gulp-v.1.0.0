$(document).ready(function () {

	/* ========== lazy load =========== */
	var lazyLoadInstance = new LazyLoad({
		elements_selector: ".lazy ",
	});


	/* ========== menu toggle =========== */
	/* 	let menuBtn = $('.h__menu_btn'),
			menu = $('.h__wrapper'),
			body = $('body');
	
		menuBtn.on('click',function () {
			body.toggleClass('menu-active');
		}); */

	/* ========== to top btn =========== */
	/* $('.to-top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 500);
	}); */

	/* ========== slick slider =========== */
	/* 	if ($('.slider').length) {
			$('.slider').slick({
				arrows: true,
				infinite: false,
				dots: true,
				autoplay: true,
				fade: false,
				prevArrow: $('.arrows .btn-prev'),
				nextArrow: $('.arrows .btn-next'),
				responsive: [
					{
						breakpoint: 2560,
						settings: "unslick",
					},
					{
						breakpoint: 1200,
						settings: {
							infinite: false,
							slidesToShow: 3,
							slidesToScroll: 2,
							draggable: true,
	
						}
					},
	
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							draggable: true,
	
						}
					},
	
				]
			});
		}
	 */
});